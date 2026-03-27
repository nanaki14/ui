import { Accordion } from '@base-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function AccordionRoot({
  className,
  ...props
}: React.ComponentProps<typeof Accordion.Root>) {
  return (
    <Accordion.Root
      data-slot='accordion'
      className={cn('divide-y divide-border', className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof Accordion.Item>) {
  return (
    <Accordion.Item
      data-slot='accordion-item'
      className={cn('', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Trigger>) {
  return (
    <Accordion.Header className='flex'>
      <Accordion.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-panel-open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-px transition-transform duration-200' />
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Panel>) {
  return (
    <Accordion.Panel
      data-slot='accordion-content'
      className={cn(
        'data-[ending-style]:animate-accordion-up data-[starting-style]:animate-accordion-down overflow-hidden text-sm',
        className,
      )}
      {...props}
    >
      <div className='pt-0 pb-4'>{children}</div>
    </Accordion.Panel>
  )
}

export { AccordionRoot as Accordion, AccordionItem, AccordionTrigger, AccordionContent }
