import * as React from 'react'
import { PreviewCard } from '@base-ui/react/preview-card'
import { cn } from '@/lib/utils'

function HoverCard({ ...props }: React.ComponentProps<typeof PreviewCard.Root>) {
  return <PreviewCard.Root {...props} />
}

function HoverCardTrigger({ ...props }: React.ComponentProps<typeof PreviewCard.Trigger>) {
  return <PreviewCard.Trigger data-slot="hover-card-trigger" {...props} />
}

function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PreviewCard.Popup> & {
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}) {
  return (
    <PreviewCard.Portal>
      <PreviewCard.Positioner align={align} sideOffset={sideOffset}>
        <PreviewCard.Popup
          data-slot="hover-card-content"
          className={cn(
            // Layout
            'z-50 w-64 rounded-md border p-4',
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
      </PreviewCard.Positioner>
    </PreviewCard.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
