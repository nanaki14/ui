import * as React from 'react'
import { Popover } from '@base-ui/react/popover'
import { cn } from '@/lib/utils'

function PopoverRoot({ ...props }: React.ComponentProps<typeof Popover.Root>) {
  return <Popover.Root {...props} />
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof Popover.Trigger>) {
  return <Popover.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverClose({ ...props }: React.ComponentProps<typeof Popover.Close>) {
  return <Popover.Close data-slot="popover-close" {...props} />
}

function PopoverPortal({ ...props }: React.ComponentProps<typeof Popover.Portal>) {
  return <Popover.Portal {...props} />
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof Popover.Popup> & {
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}) {
  return (
    <Popover.Portal>
      <Popover.Positioner align={align} sideOffset={sideOffset}>
        <Popover.Popup
          data-slot="popover-content"
          className={cn(
            // Layout
            'z-50 w-72 rounded-md border p-4',
            // Visual
            'bg-popover text-popover-foreground shadow-md outline-none',
            // Animation: enter
            'data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95',
            // Animation: exit
            'data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95',
            // Animation: slide direction
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            // Duration
            'duration-200',
            className,
          )}
          {...props}
        />
      </Popover.Positioner>
    </Popover.Portal>
  )
}

export {
  PopoverRoot as Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
}
