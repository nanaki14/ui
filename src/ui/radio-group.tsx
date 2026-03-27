import { RadioGroup } from '@base-ui/react/radio-group'
import { Radio } from '@base-ui/react/radio'
import { CircleIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function RadioGroupRoot({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup>) {
  return (
    <RadioGroup
      data-slot='radio-group'
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof Radio.Root>) {
  return (
    <Radio.Root
      data-slot='radio-group-item'
      className={cn(
        'border-primary text-primary focus-visible:ring-ring aspect-square size-4 rounded-full border shadow-sm transition-colors',
        'focus:outline-none focus-visible:ring-1',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <Radio.Indicator className='flex items-center justify-center'>
        <CircleIcon className='fill-primary text-primary size-2.5' />
      </Radio.Indicator>
    </Radio.Root>
  )
}

export { RadioGroupRoot as RadioGroup, RadioGroupItem }
