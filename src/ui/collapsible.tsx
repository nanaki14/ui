import { Collapsible } from '@base-ui/react/collapsible'
import { cn } from '@/lib/utils'

function CollapsibleRoot({
  className,
  ...props
}: React.ComponentProps<typeof Collapsible.Root>) {
  return (
    <Collapsible.Root
      data-slot='collapsible'
      className={cn('', className)}
      {...props}
    />
  )
}

function CollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Collapsible.Trigger>) {
  return (
    <Collapsible.Trigger
      data-slot='collapsible-trigger'
      className={cn('', className)}
      {...props}
    />
  )
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof Collapsible.Panel>) {
  return (
    <Collapsible.Panel
      data-slot='collapsible-content'
      className={cn(
        'data-[ending-style]:animate-accordion-up data-[starting-style]:animate-accordion-down overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}

export { CollapsibleRoot as Collapsible, CollapsibleTrigger, CollapsibleContent }
