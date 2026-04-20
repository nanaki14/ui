'use client'

import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card'

import { cn } from '@/lib/utils'

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
}

function HoverCardContent({
  className,
  side = 'bottom',
  sideOffset = 4,
  align = 'center',
  alignOffset = 4,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<PreviewCardPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(
            // Layout
            'z-50 w-64 p-2.5',
            // Visual
            'rounded-lg bg-popover text-popover-foreground text-sm shadow-md outline-hidden ring-1 ring-foreground/10',
            // Transform origin
            'origin-(--transform-origin)',
            // Animation
            'duration-100 ease-out-quad data-closed:animate-out data-open:animate-in',
            // Animation: enter
            'data-open:fade-in-0 data-open:zoom-in-95 data-open:blur-in-xs',
            // Animation: exit
            'data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:blur-out-xs',
            // Animation: slide by side
            'data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2',
            'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
            'data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2',
            className,
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
