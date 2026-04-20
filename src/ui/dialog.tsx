'use client'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { XIcon } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({ className, ...props }: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        // Layout
        'fixed inset-0 isolate z-50',
        // Visual
        'bg-black/10 supports-backdrop-filter:backdrop-blur-xs',
        // Animation
        'duration-150 ease-out-quad data-closed:animate-out data-open:animate-in',
        // Animation: enter
        'data-open:fade-in-0',
        // Animation: exit
        'data-closed:fade-out-0',
        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          // Layout
          'fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4',
          // Visual
          'rounded-xl bg-popover p-4 text-popover-foreground text-sm outline-none ring-1 ring-foreground/10',
          // Responsive
          'sm:max-w-sm',
          // Animation
          'duration-150 ease-out-quad data-closed:animate-out data-open:animate-in',
          // Animation: enter
          'data-open:fade-in-0 data-open:zoom-in-95 data-open:blur-in',
          // Animation: exit
          'data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:blur-out',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button variant="ghost" className="absolute top-2 right-2" size="icon-sm">
                <XIcon />
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        // Layout
        'flex flex-col gap-2',
        className,
      )}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        // Layout
        '-mx-4 -mb-4 flex flex-col-reverse gap-2 p-4',
        // Visual
        'rounded-b-xl border-t bg-muted/50',
        // Responsive
        'sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline">Close</Button>} />
      )}
    </div>
  )
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        // Typography
        'cn-font-heading font-medium text-base leading-none',
        className,
      )}
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        // Typography
        'text-muted-foreground text-sm',
        // Link styles
        '*:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
