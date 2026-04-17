import type * as React from 'react'
import { cn } from '@/lib/utils'

function ScrollArea({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="scroll-area" className={cn('relative overflow-hidden', className)} {...props}>
      <div
        data-slot="scroll-area-viewport"
        className="h-full w-full overflow-auto rounded-[inherit]"
      >
        {children}
      </div>
    </div>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { orientation?: 'vertical' | 'horizontal' }) {
  return (
    <div
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      className={cn(
        'flex touch-none transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        className,
      )}
      {...props}
    >
      <div data-slot="scroll-area-thumb" className="relative flex-1 rounded-full bg-border" />
    </div>
  )
}

export { ScrollArea, ScrollBar }
