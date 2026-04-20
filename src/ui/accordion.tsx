import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        // Layout
        'flex w-full flex-col',
        className,
      )}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        // Border
        'not-last:border-b',
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          // Layout
          'group/accordion-trigger relative flex flex-1 items-start justify-between py-2.5 text-left',
          // Visual
          'rounded-lg border border-transparent font-medium text-sm',
          // Transition
          'transition-all',
          // Hover
          'hover:underline',
          // Focus
          'outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring',
          // Disabled
          'aria-disabled:pointer-events-none aria-disabled:opacity-50',
          // Icon slot
          '**:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 transition-transform ease-out-quad group-aria-expanded/accordion-trigger:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        // Layout
        'overflow-hidden',
        // Typography
        'text-sm',
        // Animation
        'ease-out-quad data-closed:animate-accordion-up data-open:animate-accordion-down',
      )}
      {...props}
    >
      <div
        className={cn(
          // Layout
          'h-(--accordion-panel-height) pt-0 pb-2.5',
          // Animation
          'data-ending-style:h-0 data-starting-style:h-0',
          // Typography
          '[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
