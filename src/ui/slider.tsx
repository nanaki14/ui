import { Slider } from '@base-ui/react/slider'
import { cn } from '@/lib/utils'

function SliderComponent({
  className,
  defaultValue,
  value,
  ...props
}: React.ComponentProps<typeof Slider.Root>) {
  return (
    <Slider.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      <Slider.Control className="flex w-full items-center">
        <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
          <Slider.Indicator className="absolute h-full bg-primary" />
        </Slider.Track>
        <Slider.Thumb className="block size-4 shrink-0 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
      </Slider.Control>
    </Slider.Root>
  )
}

export { SliderComponent as Slider }
