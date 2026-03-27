import { Tabs } from '@base-ui/react/tabs'
import { cn } from '@/lib/utils'

function TabsRoot({
  className,
  ...props
}: React.ComponentProps<typeof Tabs.Root>) {
  return (
    <Tabs.Root
      data-slot='tabs'
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof Tabs.List>) {
  return (
    <Tabs.List
      data-slot='tabs-list'
      className={cn(
        // Layout
        'inline-flex h-9 w-fit items-center justify-center rounded-lg p-1',
        // Visual
        'bg-muted text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Tabs.Tab>) {
  return (
    <Tabs.Tab
      data-slot='tabs-trigger'
      className={cn(
        // Layout
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1',
        // Visual
        'text-sm font-medium',
        // Transition
        'transition-all',
        // Selected state
        'data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm',
        // Focus
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        // Disabled
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof Tabs.Panel>) {
  return (
    <Tabs.Panel
      data-slot='tabs-content'
      className={cn(
        // Layout
        'mt-2',
        // Animation: enter
        'data-[starting-style]:animate-in data-[starting-style]:fade-in-0',
        // Animation: exit
        'data-[ending-style]:animate-out data-[ending-style]:fade-out-0',
        // Duration
        'duration-150',
        // Focus
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  )
}

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent }
