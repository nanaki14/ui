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
      data-slot='slider'
      defaultValue={defaultValue}
      value={value}
      className={cn('relative flex w-full touch-none items-center select-none', className)}
      {...props}
    >
      <Slider.Control className='flex w-full items-center'>
        <Slider.Track className='bg-secondary relative h-1.5 w-full grow overflow-hidden rounded-full'>
          <Slider.Indicator className='absolute h-full bg-primary' />
        </Slider.Track>
        <Slider.Thumb className='border-primary/50 bg-background block size-4 shrink-0 rounded-full border shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50' />
      </Slider.Control>
    </Slider.Root>
  )
}

export { SliderComponent as Slider }
