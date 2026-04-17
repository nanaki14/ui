import { Dialog } from '@base-ui/react/dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { XIcon } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'

const sheetVariants = cva(
  [
    // Base layout
    'bg-background fixed z-50 flex flex-col gap-4 shadow-lg',
    // Transition
    'transition-all duration-300',
    // Animation: enter
    'data-[starting-style]:animate-in data-[starting-style]:fade-in-0',
    // Animation: exit
    'data-[ending-style]:animate-out data-[ending-style]:fade-out-0',
  ],
  {
    variants: {
      side: {
        top: [
          'inset-x-0 top-0 border-b',
          'data-[starting-style]:slide-in-from-top',
          'data-[ending-style]:slide-out-to-top',
        ],
        bottom: [
          'inset-x-0 bottom-0 border-t',
          'data-[starting-style]:slide-in-from-bottom',
          'data-[ending-style]:slide-out-to-bottom',
        ],
        left: [
          'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          'data-[starting-style]:slide-in-from-left',
          'data-[ending-style]:slide-out-to-left',
        ],
        right: [
          'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          'data-[starting-style]:slide-in-from-right',
          'data-[ending-style]:slide-out-to-right',
        ],
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

function Sheet({ ...props }: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root {...props} />
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close data-slot="sheet-close" {...props} />
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof Dialog.Popup> & VariantProps<typeof sheetVariants>) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
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
          'duration-300',
        )}
      />
      <Dialog.Popup
        data-slot="sheet-content"
        className={cn(sheetVariants({ side }), 'p-6', className)}
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
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            // Disabled
            'disabled:pointer-events-none',
          )}
        >
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      </Dialog.Popup>
    </Dialog.Portal>
  )
}

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      data-slot="sheet-title"
      className={cn('font-semibold text-lg leading-none tracking-tight', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
}
