import { Dialog } from '@base-ui/react/dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        // Layout
        'flex h-full w-full flex-col overflow-hidden rounded-md',
        // Visual
        'bg-popover text-popover-foreground',
        className,
      )}
      {...props}
    />
  )
}

function CommandDialog({
  children,
  open,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof Dialog.Root> & {
  children?: React.ReactNode
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            // Layout
            'fixed inset-0 z-50',
            // Visual
            'bg-black/50',
            // Animation
            'transition-opacity duration-150',
            'data-[ending-style]:opacity-0 data-[starting-style]:opacity-0',
          )}
        />
        <Dialog.Popup
          className={cn(
            // Layout
            'fixed top-[20%] left-1/2 z-50 w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border',
            // Visual
            'shadow-lg',
            // Animation: enter
            'data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95 data-[starting-style]:animate-in',
            // Animation: exit
            'data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95 data-[ending-style]:animate-out',
            // Duration
            'duration-200',
          )}
        >
          <Command
            className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5"
            {...props}
          >
            {children}
          </Command>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex items-center border-b px-3"
      // eslint-disable-next-line react/no-unknown-property
      cmdk-input-wrapper=""
    >
      <SearchIcon className="mr-2 size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          // Layout
          'flex h-10 w-full rounded-md py-3',
          // Visual
          'bg-transparent text-sm placeholder:text-muted-foreground',
          // Focus
          'outline-none',
          // Disabled
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn('max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden', className)}
      {...props}
    />
  )
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        // Layout
        'overflow-hidden p-1',
        // Visual
        'text-foreground',
        // Group heading
        '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs',
        className,
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5',
        // Visual
        'text-sm outline-none',
        // Selected state
        'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
        // Disabled state
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        // Icon
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  )
}

function CommandShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn('ml-auto text-muted-foreground text-xs tracking-widest', className)}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
