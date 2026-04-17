import { Select } from '@base-ui/react/select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import type * as React from 'react'
import { cn } from '@/lib/utils'

function SelectRoot({ ...props }: React.ComponentProps<typeof Select.Root>) {
  return <Select.Root {...props} />
}

function SelectGroup({ ...props }: React.ComponentProps<typeof Select.Group>) {
  return <Select.Group data-slot="select-group" {...props} />
}

function SelectValue({ ...props }: React.ComponentProps<typeof Select.Value>) {
  return <Select.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Select.Trigger>) {
  return (
    <Select.Trigger
      data-slot="select-trigger"
      className={cn(
        // Layout
        'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border px-3 py-2',
        // Visual
        'border-input bg-background text-sm shadow-sm',
        // Placeholder
        'placeholder:text-muted-foreground',
        // Focus
        'focus:outline-none focus:ring-1 focus:ring-ring',
        // Disabled
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Icon
        '[&>span]:line-clamp-1',
        className,
      )}
      {...props}
    >
      {children}
      <Select.Icon>
        <ChevronDownIcon className="size-4 opacity-50" />
      </Select.Icon>
    </Select.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = 'popper',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof Select.Popup> & {
  position?: 'popper' | 'item-aligned'
  sideOffset?: number
}) {
  return (
    <Select.Portal>
      <Select.Positioner sideOffset={sideOffset}>
        <Select.Popup
          data-slot="select-content"
          className={cn(
            // Layout
            'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border',
            // Visual
            'bg-popover text-popover-foreground shadow-md',
            // Animation: enter
            'data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95 data-[starting-style]:animate-in',
            // Animation: exit
            'data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95 data-[ending-style]:animate-out',
            // Animation: slide direction
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            // Duration
            'duration-100',
            className,
          )}
          {...props}
        >
          <Select.ScrollUpArrow className="flex cursor-default items-center justify-center py-1">
            <ChevronUpIcon className="size-4" />
          </Select.ScrollUpArrow>
          <div className="p-1">{children}</div>
          <Select.ScrollDownArrow className="flex cursor-default items-center justify-center py-1">
            <ChevronDownIcon className="size-4" />
          </Select.ScrollDownArrow>
        </Select.Popup>
      </Select.Positioner>
    </Select.Portal>
  )
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof Select.GroupLabel>) {
  return (
    <Select.GroupLabel
      data-slot="select-label"
      className={cn('px-2 py-1.5 font-semibold text-xs', className)}
      {...props}
    />
  )
}

function SelectItem({ className, children, ...props }: React.ComponentProps<typeof Select.Item>) {
  return (
    <Select.Item
      data-slot="select-item"
      className={cn(
        // Layout
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-8 pl-2',
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
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <Select.ItemIndicator>
          <CheckIcon className="size-4" />
        </Select.ItemIndicator>
      </span>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof Select.Separator>) {
  return (
    <Select.Separator
      data-slot="select-separator"
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  )
}

export {
  SelectRoot as Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
