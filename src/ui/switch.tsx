import { Switch as SwitchPrimitive } from '@base-ui/react/switch'

import { cn } from '@/lib/utils'

function Switch({
  className,
  size = 'default',
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: 'sm' | 'default'
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        // Group
        'peer group/switch',
        // Layout
        'relative inline-flex shrink-0 items-center rounded-full border border-transparent',
        // Transition
        'transition-all ease-out-quad',
        // Focus
        'outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
        // Invalid
        'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
        'dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        // Size
        'data-[size=default]:h-[18.4px] data-[size=default]:w-[32px]',
        'data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]',
        // State: checked / unchecked
        'data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80',
        // Disabled
        'data-disabled:cursor-not-allowed data-disabled:opacity-50',
        // Touch hit area
        'after:absolute after:-inset-x-3 after:-inset-y-2',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // Layout
          'pointer-events-none block rounded-full',
          // Visual
          'bg-background ring-0 dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground',
          // Transition
          'transition-transform ease-out-quad',
          // Size (group-based)
          'group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3',
          // Translate: checked
          'group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)]',
          'group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)]',
          // Translate: unchecked
          'group-data-[size=default]/switch:data-unchecked:translate-x-0',
          'group-data-[size=sm]/switch:data-unchecked:translate-x-0',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
