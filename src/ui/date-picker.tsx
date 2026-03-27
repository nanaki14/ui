import * as React from 'react'
import { Popover } from '@base-ui/react/popover'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/ui/calendar'
import { cn } from '@/lib/utils'

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  formatStr?: string
}

function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  className,
  disabled,
  formatStr = 'PPP',
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        disabled={disabled}
        data-slot="date-picker-trigger"
        className={cn(
          'inline-flex h-9 w-[240px] items-center justify-start gap-2 rounded-md border border-input bg-background px-3 py-2',
          'text-sm font-normal shadow-xs outline-none transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          'disabled:pointer-events-none disabled:opacity-50',
          !value && 'text-muted-foreground',
          className,
        )}
      >
        <CalendarIcon className="size-4 shrink-0" />
        <span className="truncate">
          {value ? format(value, formatStr) : placeholder}
        </span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={4}>
          <Popover.Popup
            data-slot="date-picker-popup"
            className={cn(
              'z-50 rounded-md border bg-popover p-0 text-popover-foreground shadow-md outline-none',
              'data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[starting-style]:zoom-in-95',
              'data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95',
            )}
          >
            <Calendar
              mode="single"
              selected={value}
              onSelect={(date) => {
                onChange?.(date)
                setOpen(false)
              }}
              autoFocus
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export { DatePicker }
export type { DatePickerProps }
