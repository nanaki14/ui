import { ContextMenu } from '@base-ui/react/context-menu'
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'

function ContextMenuRoot({ ...props }: React.ComponentProps<typeof ContextMenu.Root>) {
  return <ContextMenu.Root {...props} />
}

function ContextMenuTrigger({ ...props }: React.ComponentProps<typeof ContextMenu.Trigger>) {
  return <ContextMenu.Trigger data-slot="context-menu-trigger" {...props} />
}

function ContextMenuGroup({ ...props }: React.ComponentProps<typeof ContextMenu.Group>) {
  return <ContextMenu.Group data-slot="context-menu-group" {...props} />
}

function ContextMenuRadioGroup({ ...props }: React.ComponentProps<typeof ContextMenu.RadioGroup>) {
  return <ContextMenu.RadioGroup data-slot="context-menu-radio-group" {...props} />
}

function ContextMenuSub({ ...props }: React.ComponentProps<typeof ContextMenu.SubmenuRoot>) {
  return <ContextMenu.SubmenuRoot {...props} />
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenu.SubmenuTrigger> & { inset?: boolean }) {
  return (
    <ContextMenu.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        // Layout
        'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5',
        // Visual
        'text-sm outline-none',
        // Focus & open state
        'focus:bg-accent focus:text-accent-foreground',
        'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        // Inset & icon
        'data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </ContextMenu.SubmenuTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenu.Popup>) {
  return (
    <ContextMenu.Portal>
      <ContextMenu.Positioner>
        <ContextMenu.Popup
          data-slot="context-menu-sub-content"
          className={cn(
            // Layout
            'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1',
            // Visual
            'bg-popover text-popover-foreground shadow-lg',
            // Animation: enter
            'data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95 data-[starting-style]:animate-in',
            // Animation: exit
            'data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95 data-[ending-style]:animate-out',
            // Duration
            'duration-100',
            className,
          )}
          {...props}
        />
      </ContextMenu.Positioner>
    </ContextMenu.Portal>
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenu.Popup>) {
  return (
    <ContextMenu.Portal>
      <ContextMenu.Positioner>
        <ContextMenu.Popup
          data-slot="context-menu-content"
          className={cn(
            // Layout
            'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1',
            // Visual
            'bg-popover text-popover-foreground shadow-md',
            // Animation: enter
            'data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95 data-[starting-style]:animate-in',
            // Animation: exit
            'data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95 data-[ending-style]:animate-out',
            // Duration
            'duration-100',
            className,
          )}
          {...props}
        />
      </ContextMenu.Positioner>
    </ContextMenu.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenu.Item> & { inset?: boolean }) {
  return (
    <ContextMenu.Item
      data-slot="context-menu-item"
      data-inset={inset}
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5',
        // Visual
        'text-sm outline-none',
        // Transition
        'transition-colors',
        // Focus state
        'focus:bg-accent focus:text-accent-foreground',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        // Inset & icon
        'data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenu.CheckboxItem>) {
  return (
    <ContextMenu.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8',
        // Visual
        'text-sm outline-none',
        // Transition
        'transition-colors',
        // Focus state
        'focus:bg-accent focus:text-accent-foreground',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenu.CheckboxItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenu.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenu.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenu.RadioItem>) {
  return (
    <ContextMenu.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8',
        // Visual
        'text-sm outline-none',
        // Transition
        'transition-colors',
        // Focus state
        'focus:bg-accent focus:text-accent-foreground',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenu.RadioItemIndicator>
          <span className="size-2 rounded-full bg-current" />
        </ContextMenu.RadioItemIndicator>
      </span>
      {children}
    </ContextMenu.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenu.GroupLabel> & { inset?: boolean }) {
  return (
    <ContextMenu.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn('px-2 py-1.5 font-semibold text-xs data-[inset]:pl-8', className)}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenu.Separator>) {
  return (
    <ContextMenu.Separator
      data-slot="context-menu-separator"
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn('ml-auto text-muted-foreground text-xs tracking-widest', className)}
      {...props}
    />
  )
}

export {
  ContextMenuRoot as ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
