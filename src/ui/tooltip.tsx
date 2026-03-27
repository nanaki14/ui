import * as React from 'react'
import { Tooltip } from '@base-ui/react/tooltip'
import { cn } from '@/lib/utils'

// Tooltip.Provider is available but not required in Base UI v1.
// TooltipProvider is exposed as a convenience wrapper for shared delay groups.
function TooltipProvider({
  children,
  ...props
}: React.ComponentProps<typeof Tooltip.Provider>) {
  return <Tooltip.Provider {...props}>{children}</Tooltip.Provider>
}

function TooltipRoot(props: {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onOpenChangeComplete?: (open: boolean) => void
  disableHoverablePopup?: boolean
  trackCursorAxis?: 'none' | 'x' | 'y' | 'both'
  disabled?: boolean
  children?: React.ReactNode
}) {
  return <Tooltip.Root {...props} />
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof Tooltip.Trigger>) {
  return <Tooltip.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof Tooltip.Popup> & { sideOffset?: number }) {
  return (
    <Tooltip.Portal>
      <Tooltip.Positioner sideOffset={sideOffset}>
        <Tooltip.Popup
          data-slot="tooltip-content"
          className={cn(
            'bg-primary text-primary-foreground z-50 w-auto rounded-md px-3 py-1.5 text-xs',
            'data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95',
            'data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            'duration-150',
            className,
          )}
          {...props}
        />
      </Tooltip.Positioner>
    </Tooltip.Portal>
  )
}

export { TooltipProvider, TooltipRoot as Tooltip, TooltipTrigger, TooltipContent }
