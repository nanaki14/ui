import { Progress } from '@base-ui/react/progress'
import { cn } from '@/lib/utils'

function ProgressComponent({
  className,
  value,
  ...props
}: React.ComponentProps<typeof Progress.Root>) {
  return (
    <Progress.Root
      data-slot="progress"
      value={value}
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
      {...props}
    >
      <Progress.Track className="h-full w-full overflow-hidden">
        <Progress.Indicator
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${value ?? 0}%` }}
        />
      </Progress.Track>
    </Progress.Root>
  )
}

export { ProgressComponent as Progress }
