import * as React from 'react'
import { Menu } from '@base-ui/react/menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Menubar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="menubar"
      className={cn(
        // Layout
        'flex h-9 items-center gap-1 rounded-md px-1',
        // Visual
        'border bg-background shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof Menu.Root>) {
  return <Menu.Root {...props} />
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Trigger>) {
  return (
    <Menu.Trigger
      data-slot="menubar-trigger"
      className={cn(
        // Layout
        'flex cursor-default select-none items-center rounded-sm px-3 py-1',
        // Visual
        'text-sm font-medium outline-none',
        // Hover & focus
        'hover:bg-accent hover:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground',
        // Open state
        'data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  sideOffset = 8,
  alignOffset = -4,
  ...props
}: React.ComponentProps<typeof Menu.Popup> & {
  sideOffset?: number
  alignOffset?: number
}) {
  return (
    <Menu.Portal>
      <Menu.Positioner sideOffset={sideOffset} alignOffset={alignOffset} align="start">
        <Menu.Popup
          data-slot="menubar-content"
          className={cn(
            // Layout
            'z-50 min-w-48 overflow-hidden rounded-md border p-1',
            // Visual
            'bg-popover text-popover-foreground shadow-md',
            // Animation: enter
            'data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95',
            // Animation: exit
            'data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95',
            // Animation: slide direction
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            // Duration
            'duration-100',
            className,
          )}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  )
}

function MenubarItem({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof Menu.Item> & { inset?: boolean }) {
  return (
    <Menu.Item
      data-slot="menubar-item"
      data-inset={inset}
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5',
        // Visual
        'text-sm outline-none',
        // Focus state
        'focus:bg-accent focus:text-accent-foreground',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        // Icon
        '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Separator>) {
  return (
    <Menu.Separator
      data-slot="menubar-separator"
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div
      data-slot="menubar-label"
      className={cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof Menu.CheckboxItem>) {
  return (
    <Menu.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8',
        // Visual
        'text-sm outline-none',
        // Focus state
        'focus:bg-accent focus:text-accent-foreground',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <Menu.CheckboxItemIndicator>
          <CheckIcon className="size-4" />
        </Menu.CheckboxItemIndicator>
      </span>
      {children}
    </Menu.CheckboxItem>
  )
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof Menu.RadioGroup>) {
  return <Menu.RadioGroup data-slot="menubar-radio-group" {...props} />
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Menu.RadioItem>) {
  return (
    <Menu.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8',
        // Visual
        'text-sm outline-none',
        // Focus state
        'focus:bg-accent focus:text-accent-foreground',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <Menu.RadioItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </Menu.RadioItemIndicator>
      </span>
      {children}
    </Menu.RadioItem>
  )
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof Menu.SubmenuTrigger> & { inset?: boolean }) {
  return (
    <Menu.SubmenuTrigger
      data-slot="menubar-sub-trigger"
      className={cn(
        // Layout
        'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5',
        // Visual
        'text-sm outline-none',
        // Focus & open state
        'focus:bg-accent focus:text-accent-foreground',
        'data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground',
        // Icon
        '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </Menu.SubmenuTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Popup>) {
  return (
    <Menu.Portal>
      <Menu.Positioner side="right" sideOffset={8}>
        <Menu.Popup
          data-slot="menubar-sub-content"
          className={cn(
            // Layout
            'z-50 min-w-32 overflow-hidden rounded-md border p-1',
            // Visual
            'bg-popover text-popover-foreground shadow-lg',
            // Animation: enter
            'data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95',
            // Animation: exit
            'data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95',
            // Duration
            'duration-100',
            className,
          )}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  )
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof Menu.Group>) {
  return <Menu.Group data-slot="menubar-group" {...props} />
}

function MenubarSub({ ...props }: React.ComponentProps<typeof Menu.Root>) {
  return <Menu.Root {...props} />
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
  MenubarGroup,
  MenubarSub,
}
