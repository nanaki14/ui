import * as React from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { XIcon } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const sheetVariants = cva(
  [
    'bg-background fixed z-50 flex flex-col gap-4 shadow-lg',
    'transition-all duration-300',
    'data-[ending-style]:animate-out data-[ending-style]:fade-out-0',
    'data-[starting-style]:animate-in data-[starting-style]:fade-in-0',
  ],
  {
    variants: {
      side: {
        top: [
          'inset-x-0 top-0 border-b',
          'data-[ending-style]:slide-out-to-top',
          'data-[starting-style]:slide-in-from-top',
        ],
        bottom: [
          'inset-x-0 bottom-0 border-t',
          'data-[ending-style]:slide-out-to-bottom',
          'data-[starting-style]:slide-in-from-bottom',
        ],
        left: [
          'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          'data-[ending-style]:slide-out-to-left',
          'data-[starting-style]:slide-in-from-left',
        ],
        right: [
          'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          'data-[ending-style]:slide-out-to-right',
          'data-[starting-style]:slide-in-from-right',
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
          'fixed inset-0 z-50 bg-black/50',
          'data-[ending-style]:animate-out data-[ending-style]:fade-out-0',
          'data-[starting-style]:animate-in data-[starting-style]:fade-in-0',
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
            'absolute top-4 right-4 rounded-sm opacity-70 transition-opacity',
            'hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none',
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
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
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
