import { ToggleGroup } from '@base-ui/react/toggle-group'
import { Toggle } from '@base-ui/react/toggle'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { toggleVariants } from '@/ui/toggle'

type ToggleGroupProps = React.ComponentProps<typeof ToggleGroup> &
  VariantProps<typeof toggleVariants>

function ToggleGroupComponent({
  className,
  variant,
  size,
  children,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroup
      data-slot='toggle-group'
      className={cn('flex items-center justify-center gap-1', className)}
      {...props}
    >
      {children}
    </ToggleGroup>
  )
}

function ToggleGroupItem({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof Toggle> &
  VariantProps<typeof toggleVariants>) {
  return (
    <Toggle
      data-slot='toggle-group-item'
      className={cn(toggleVariants({ variant, size }), 'min-w-0', className)}
      {...props}
    />
  )
}

export { ToggleGroupComponent as ToggleGroup, ToggleGroupItem }
