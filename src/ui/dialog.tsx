import * as React from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function DialogRoot({ ...props }: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root {...props} />
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogClose({ ...props }: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close data-slot="dialog-close" {...props} />
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Popup>) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        className={cn(
          // Layout
          'fixed inset-0 z-50',
          // Visual
          'bg-black/50',
          // Animation: enter
          'data-[starting-style]:animate-in data-[starting-style]:fade-in-0',
          // Animation: exit
          'data-[ending-style]:animate-out data-[ending-style]:fade-out-0',
          // Duration
          'duration-200',
        )}
      />
      <Dialog.Popup
        data-slot="dialog-content"
        className={cn(
          // Layout
          'fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-6',
          // Visual
          'bg-background rounded-lg border shadow-lg',
          // Animation: enter
          'data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95',
          // Animation: exit
          'data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95',
          // Duration
          'duration-200',
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close
          aria-label="Close"
          className={cn(
            // Layout
            'absolute top-4 right-4 rounded-sm',
            // Visual
            'opacity-70',
            // Transition
            'transition-opacity',
            // Hover & focus
            'hover:opacity-100',
            'focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none',
            // State & disabled
            'data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
            'disabled:pointer-events-none',
          )}
        >
          <XIcon className="size-4" />
        </Dialog.Close>
      </Dialog.Popup>
    </Dialog.Portal>
  )
}

function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      data-slot="dialog-title"
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  DialogRoot as Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
}
