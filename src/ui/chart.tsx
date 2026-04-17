import * as React from 'react'
import { Legend, ResponsiveContainer, Tooltip } from 'recharts'
import { cn } from '@/lib/utils'

type ValueType = number | string | Array<number | string>
type NameType = number | string

type TooltipPayloadItem = {
  name?: NameType
  value?: ValueType
  dataKey?: string | number
  color?: string
  payload?: Record<string, unknown>
  [key: string]: unknown
}

type TooltipProps = {
  active?: boolean
  payload?: TooltipPayloadItem[]
  label?: string
  labelFormatter?: (label: string, payload: TooltipPayloadItem[]) => React.ReactNode
  formatter?: (
    value: ValueType,
    name: NameType,
    item: TooltipPayloadItem,
    index: number,
    payload: TooltipPayloadItem[],
  ) => React.ReactNode
}

export type ChartConfig = {
  [key: string]: {
    label?: string
    color?: string
    icon?: React.ComponentType
  }
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }
  return context
}

function ChartContainer({
  config,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  config: ChartConfig
  children: React.ComponentProps<typeof ResponsiveContainer>['children']
}) {
  const colorVars = Object.entries(config).reduce<Record<string, string>>((vars, [key, value]) => {
    if (value.color) {
      vars[`--color-${key}`] = value.color
    }
    return vars
  }, {})

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border",
          className,
        )}
        style={colorVars as React.CSSProperties}
        {...props}
      >
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartTooltip = Tooltip

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  labelFormatter,
  formatter,
  nameKey,
}: TooltipProps & {
  className?: string
  indicator?: 'dot' | 'line' | 'dashed'
  hideLabel?: boolean
  hideIndicator?: boolean
  nameKey?: string
  labelKey?: string
}) {
  const { config } = useChart()

  if (!active || !payload?.length) {
    return null
  }

  const resolvedLabel =
    !hideLabel && payload.length > 0
      ? labelFormatter
        ? labelFormatter(label ?? '', payload)
        : label
      : null

  return (
    <div
      className={cn(
        'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
        className,
      )}
    >
      {resolvedLabel && <div className="font-medium">{resolvedLabel}</div>}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = nameKey
            ? String(item[nameKey as keyof typeof item] ?? item.name ?? item.dataKey)
            : String(item.name ?? item.dataKey ?? 'value')
          const itemConfig = config[key] ?? {}
          const indicatorColor = item.color ?? itemConfig.color

          return (
            <div
              key={`${key}-${index}`}
              className="flex w-full flex-wrap items-stretch gap-2 [&>svg]:size-2.5 [&>svg]:text-muted-foreground"
            >
              {!hideIndicator && (
                <div
                  className={cn(
                    'shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]',
                    indicator === 'dot' && 'mt-0.5 size-2.5 rounded-full',
                    indicator === 'line' && 'w-1',
                    indicator === 'dashed' && 'w-0 border-[1.5px] border-dashed bg-transparent',
                  )}
                  style={
                    {
                      '--color-bg': indicatorColor,
                      '--color-border': indicatorColor,
                    } as React.CSSProperties
                  }
                />
              )}
              <div className="flex flex-1 justify-between leading-none">
                <span className="text-muted-foreground">{itemConfig.label ?? key}</span>
                {item.value !== undefined && (
                  <span className="font-medium font-mono text-foreground tabular-nums">
                    {formatter
                      ? formatter(item.value, key, item, index, payload)
                      : Array.isArray(item.value)
                        ? item.value.join(' – ')
                        : String(item.value)}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = Legend

function ChartLegendContent({
  className,
  payload,
  nameKey,
}: React.ComponentProps<'div'> & {
  payload?: Array<{
    value?: string
    color?: string
    dataKey?: string | number
  }>
  nameKey?: string
}) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div className={cn('flex items-center justify-center gap-4 text-xs', className)}>
      {payload.map((item) => {
        const key = nameKey
          ? String(item[nameKey as keyof typeof item] ?? item.value ?? item.dataKey)
          : String(item.value ?? item.dataKey ?? '')
        const itemConfig = config[key] ?? {}

        return (
          <div key={key} className="flex items-center gap-1.5">
            <div
              className="size-2 shrink-0 rounded-[2px]"
              style={{ backgroundColor: item.color ?? itemConfig.color }}
            />
            <span className="text-muted-foreground">{itemConfig.label ?? key}</span>
          </div>
        )
      })}
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent }
