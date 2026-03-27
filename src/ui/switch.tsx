import { Switch } from '@base-ui/react/switch'
import { cn } from '@/lib/utils'

function SwitchComponent({
  className,
  ...props
}: React.ComponentProps<typeof Switch.Root>) {
  return (
    <Switch.Root
      data-slot='switch'
      className={cn(
        'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'bg-input data-[checked]:bg-primary',
        className,
      )}
      {...props}
    >
      <Switch.Thumb
        className={cn(
          'pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform',
          'translate-x-0 data-[checked]:translate-x-4',
        )}
      />
    </Switch.Root>
  )
}

export { SwitchComponent as Switch }
