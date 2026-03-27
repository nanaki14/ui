import { Separator } from '@base-ui/react/separator'
import { cn } from '@/lib/utils'

function SeparatorComponent({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot='separator'
      orientation={orientation}
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  )
}

export { SeparatorComponent as Separator }
