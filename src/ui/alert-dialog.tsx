import { AlertDialog } from '@base-ui/react/alert-dialog'
import type * as React from 'react'
import { cn } from '@/lib/utils'

function AlertDialogRoot({ ...props }: React.ComponentProps<typeof AlertDialog.Root>) {
  return <AlertDialog.Root {...props} />
}

function AlertDialogTrigger({ ...props }: React.ComponentProps<typeof AlertDialog.Trigger>) {
  return <AlertDialog.Trigger data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertDialog.Popup>) {
  return (
    <AlertDialog.Portal>
      <AlertDialog.Backdrop
        className={cn(
          // Layout
          'fixed inset-0 z-50',
          // Visual
          'bg-black/50',
          // Animation: enter
          'data-[starting-style]:fade-in-0 data-[starting-style]:animate-in',
          // Animation: exit
          'data-[ending-style]:fade-out-0 data-[ending-style]:animate-out',
          // Duration
          'duration-200',
        )}
      />
      <AlertDialog.Popup
        data-slot="alert-dialog-content"
        className={cn(
          // Layout
          'fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-6',
          // Visual
          'rounded-lg border bg-background shadow-lg',
          // Animation: enter
          'data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95 data-[starting-style]:animate-in',
          // Animation: exit
          'data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95 data-[ending-style]:animate-out',
          // Duration
          'duration-200',
          className,
        )}
        {...props}
      >
        {children}
      </AlertDialog.Popup>
    </AlertDialog.Portal>
  )
}

function AlertDialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function AlertDialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialog.Title>) {
  return (
    <AlertDialog.Title
      data-slot="alert-dialog-title"
      className={cn('font-semibold text-lg leading-none tracking-tight', className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialog.Description>) {
  return (
    <AlertDialog.Description
      data-slot="alert-dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialog.Close>) {
  return (
    <AlertDialog.Close
      data-slot="alert-dialog-action"
      className={cn(
        // Layout
        'inline-flex h-9 items-center justify-center rounded-md px-4 py-2',
        // Visual
        'bg-primary font-medium text-primary-foreground text-sm',
        // Transition
        'transition-colors',
        // Hover
        'hover:bg-primary/90',
        // Focus
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        // Disabled
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialog.Close>) {
  return (
    <AlertDialog.Close
      data-slot="alert-dialog-cancel"
      className={cn(
        // Layout
        'inline-flex h-9 items-center justify-center rounded-md border px-4 py-2',
        // Visual
        'border-input bg-background font-medium text-sm',
        // Transition
        'transition-colors',
        // Hover
        'hover:bg-accent hover:text-accent-foreground',
        // Focus
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        // Disabled
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export {
  AlertDialogRoot as AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
