'use client'

import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu'
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import type * as React from 'react'

import { cn } from '@/lib/utils'

function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuPortal({ ...props }: ContextMenuPrimitive.Portal.Props) {
  return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
}

function ContextMenuTrigger({ className, ...props }: ContextMenuPrimitive.Trigger.Props) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn('select-none', className)}
      {...props}
    />
  )
}

function ContextMenuContent({
  align = 'start',
  alignOffset = 4,
  side = 'right',
  sideOffset = 0,
  className,
  ...props
}: ContextMenuPrimitive.Popup.Props &
  Pick<ContextMenuPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-content"
          className={cn(
            // Layout
            'z-50 max-h-(--available-height) min-w-36 overflow-y-auto overflow-x-hidden p-1',
            // Visual
            'rounded-lg bg-popover text-popover-foreground shadow-md outline-none ring-1 ring-foreground/10',
            // Transform origin
            'origin-(--transform-origin)',
            // Animation
            'duration-100 ease-out-quad data-closed:animate-out data-open:animate-in data-closed:overflow-hidden',
            // Animation: enter
            'data-open:fade-in-0 data-open:zoom-in-95 data-open:blur-in-sm',
            // Animation: exit
            'data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:blur-out-sm',
            // Animation: slide by side
            'data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2',
            'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
            'data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2',
            className,
          )}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuGroup({ ...props }: ContextMenuPrimitive.Group.Props) {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        // Layout
        'px-1.5 py-1',
        // Visual
        'font-medium text-muted-foreground text-xs',
        // Inset
        'data-inset:pl-7',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: ContextMenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center gap-1.5 rounded-md px-1.5 py-1',
        // Visual
        'text-sm outline-hidden',
        // Focus
        'focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground',
        // Disabled
        'data-disabled:pointer-events-none data-disabled:opacity-50',
        // Inset
        'data-inset:pl-7',
        // Variant: destructive
        'data-[variant=destructive]:text-destructive data-[variant=destructive]:*:[svg]:text-destructive',
        'data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive',
        'dark:data-[variant=destructive]:focus:bg-destructive/20',
        // Icon
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        // Group
        'group/context-menu-item',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuSub({ ...props }: ContextMenuPrimitive.SubmenuRoot.Props) {
  return <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        // Layout
        'flex cursor-default select-none items-center gap-1.5 rounded-md px-1.5 py-1',
        // Visual
        'text-sm outline-hidden',
        // Focus
        'focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground',
        // Open state
        'data-open:bg-accent data-open:text-accent-foreground',
        'data-popup-open:bg-accent data-popup-open:text-accent-foreground',
        // Inset
        'data-inset:pl-7',
        // Icon
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="cn-rtl-flip ml-auto" />
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

function ContextMenuSubContent({
  className,
  align = 'start',
  alignOffset = -3,
  side = 'right',
  sideOffset = 0,
  ...props
}: React.ComponentProps<typeof ContextMenuContent>) {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      className={cn(
        // Size override
        'w-auto min-w-[96px]',
        // Shadow override
        'shadow-lg',
        className,
      )}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: ContextMenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5',
        // Visual
        'text-sm outline-hidden',
        // Focus
        'focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground',
        // Disabled
        'data-disabled:pointer-events-none data-disabled:opacity-50',
        // Inset
        'data-inset:pl-7',
        // Icon
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="context-menu-checkbox-item-indicator"
      >
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioGroup({ ...props }: ContextMenuPrimitive.RadioGroup.Props) {
  return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />
}

function ContextMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: ContextMenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={cn(
        // Layout
        'relative flex cursor-default select-none items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5',
        // Visual
        'text-sm outline-hidden',
        // Focus
        'focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground',
        // Disabled
        'data-disabled:pointer-events-none data-disabled:opacity-50',
        // Inset
        'data-inset:pl-7',
        // Icon
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex items-center justify-center">
        <ContextMenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuSeparator({ className, ...props }: ContextMenuPrimitive.Separator.Props) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        'ml-auto text-muted-foreground text-xs tracking-widest group-focus/context-menu-item:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
