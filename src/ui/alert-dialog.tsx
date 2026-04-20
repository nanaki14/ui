'use client'

import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog'
import type * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
}

function AlertDialogOverlay({ className, ...props }: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
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

function AlertDialogContent({
  className,
  size = 'default',
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: 'default' | 'sm'
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          // Layout
          'fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4',
          // Visual
          'rounded-xl bg-popover p-4 text-popover-foreground outline-none ring-1 ring-foreground/10',
          // Size variants
          'data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm',
          // Group
          'group/alert-dialog-content',
          // Animation
          'duration-150 ease-out-quad data-closed:animate-out data-open:animate-in',
          // Animation: enter
          'data-open:fade-in-0 data-open:zoom-in-95 data-open:blur-in',
          // Animation: exit
          'data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:blur-out',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        // Layout
        'grid grid-rows-[auto_1fr] gap-1.5',
        // Alignment
        'place-items-center text-center',
        // Layout: with media
        'has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4',
        // Responsive: default size
        'sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left',
        // Responsive: default size with media
        'sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        // Layout
        '-mx-4 -mb-4 flex flex-col-reverse gap-2 p-4',
        // Visual
        'rounded-b-xl border-t bg-muted/50',
        // Size variant: sm
        'group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2',
        // Responsive
        'sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        // Layout
        'inline-flex size-10 items-center justify-center',
        // Visual
        'rounded-md bg-muted',
        // Spacing
        'mb-2',
        // Responsive: default size
        'sm:group-data-[size=default]/alert-dialog-content:row-span-2',
        // Icon size
        "*:[svg:not([class*='size-'])]:size-6",
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        // Typography
        'cn-font-heading font-medium text-base',
        // Layout: with media (default size)
        'sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        // Typography
        'text-balance text-muted-foreground text-sm md:text-pretty',
        // Link styles
        '*:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogAction({ className, ...props }: React.ComponentProps<typeof Button>) {
  return <Button data-slot="alert-dialog-action" className={cn(className)} {...props} />
}

function AlertDialogCancel({
  className,
  variant = 'outline',
  size = 'default',
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, 'variant' | 'size'>) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      className={cn(className)}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
