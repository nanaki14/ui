import { Tabs as TabsPrimitive } from '@base-ui/react/tabs'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

function Tabs({
  className,
  orientation = 'horizontal',
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      orientation={orientation}
      className={cn(
        // Layout
        'flex gap-2',
        // Group marker
        'group/tabs',
        // Orientation: horizontal stacks list above panel
        'data-horizontal:flex-col',
        className,
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  cn(
    // Layout
    'inline-flex w-fit items-center justify-center p-[3px]',
    // Visual
    'rounded-lg text-muted-foreground',
    // Group marker
    'group/tabs-list',
    // Orientation: horizontal
    'group-data-horizontal/tabs:h-8',
    // Orientation: vertical
    'group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col',
  ),
  {
    variants: {
      variant: {
        default: 'bg-muted',
        line: 'gap-1 rounded-none bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function TabsList({
  className,
  variant = 'default',
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // Layout
        'relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 px-1.5 py-0.5 cursor-pointer',
        // Visual
        'rounded-md border border-transparent font-medium text-foreground/60 text-sm whitespace-nowrap',
        // Dark mode
        'dark:text-muted-foreground',
        // Transition
        'transition-all ease-out-quad',
        // Orientation: vertical
        'group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start',
        // Hover
        'hover:text-foreground dark:hover:text-foreground',
        // Focus
        'focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        // Disabled
        'disabled:pointer-events-none disabled:opacity-50',
        'aria-disabled:pointer-events-none aria-disabled:opacity-50',
        // Icon spacing
        'has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1',
        // Icon sizing
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Active (default variant)
        'data-active:bg-background data-active:text-foreground',
        'dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground',
        'group-data-[variant=default]/tabs-list:data-active:shadow-sm',
        // Active (line variant overrides)
        'group-data-[variant=line]/tabs-list:bg-transparent',
        'group-data-[variant=line]/tabs-list:data-active:bg-transparent',
        'group-data-[variant=line]/tabs-list:data-active:shadow-none',
        'dark:group-data-[variant=line]/tabs-list:data-active:border-transparent',
        'dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent',
        // Indicator (line variant)
        'after:absolute after:bg-foreground after:opacity-0 after:transition-opacity',
        // Indicator position: horizontal
        'group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5',
        // Indicator position: vertical
        'group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5',
        // Indicator show when active (line variant)
        'group-data-[variant=line]/tabs-list:data-active:after:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        // Layout
        'flex-1',
        // Typography
        'text-sm',
        // Focus
        'outline-none',
        // Open animation (Base UI Tabs re-mounts the panel on switch)
        'animate-in fade-in-0 blur-in-xs duration-300 ease-out-quad',
        // Slide direction follows data-activation-direction
        'data-[activation-direction=left]:slide-in-from-left-2',
        'data-[activation-direction=right]:slide-in-from-right-2',
        'data-[activation-direction=up]:slide-in-from-top-2',
        'data-[activation-direction=down]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants }
