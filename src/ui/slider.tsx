import { Slider as SliderPrimitive } from '@base-ui/react/slider'

import { cn } from '@/lib/utils'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  onValueChange,
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  // Base UI's SliderControl emits a scalar when values.length <= 1, even if the
  // consumer passed a single-element array — re-wrap it to match the input shape.
  const wantsArray = Array.isArray(value) || Array.isArray(defaultValue)
  const handleValueChange: typeof onValueChange = onValueChange
    ? (next, details) => {
        const normalized =
          wantsArray && !Array.isArray(next) ? [next as number] : next
        ;(onValueChange as (v: typeof normalized, d: typeof details) => void)(
          normalized,
          details,
        )
      }
    : undefined

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      onValueChange={handleValueChange}
      thumbAlignment="edge"
      className={cn(
        // Layout (defaults to horizontal)
        'w-full',
        // Orientation: vertical
        'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Control
        className={cn(
          // Layout
          'relative flex w-full touch-none items-center select-none',
          // Disabled
          'data-disabled:opacity-50',
          // Orientation: vertical
          'data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40',
          'data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        )}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            // Layout (horizontal default)
            'relative grow h-1 w-full overflow-hidden rounded-full select-none',
            // Visual
            'bg-muted',
            // Orientation: vertical
            'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1',
          )}
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className={cn(
              // Layout (horizontal default)
              'h-full select-none',
              // Visual
              'bg-primary',
              // Orientation: vertical
              'data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-full',
            )}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            // biome-ignore lint/suspicious/noArrayIndexKey: thumbs are index-addressed
            key={index}
            className={cn(
              // Layout
              'relative block size-3 shrink-0 rounded-full select-none',
              // Visual
              'border border-ring bg-white',
              // Transition
              'transition-[color,box-shadow]',
              // Focus / Hover / Active
              'ring-ring/50 outline-hidden hover:ring-3 focus-visible:ring-3 active:ring-3',
              // Disabled
              'disabled:pointer-events-none disabled:opacity-50',
              // Touch hit area
              'after:absolute after:-inset-2',
            )}
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
