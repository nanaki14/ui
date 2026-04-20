import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function NavigationMenu({
  align = 'start',
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props & Pick<NavigationMenuPrimitive.Positioner.Props, 'align'>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        // Layout
        'relative flex max-w-max flex-1 items-center justify-center',
        // Group
        'group/navigation-menu',
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        // Layout
        'group flex flex-1 list-none items-center justify-center gap-0',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva([
  // Layout
  'inline-flex h-9 w-max items-center justify-center',
  // Visual
  'rounded-lg px-2.5 py-1.5 text-sm font-medium outline-none',
  // Transition
  'transition-all',
  // Hover / Focus
  'hover:bg-muted focus:bg-muted',
  // Focus visible
  'focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1',
  // Disabled
  'disabled:pointer-events-none disabled:opacity-50',
  // Open state
  'data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted',
  'data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted',
  // Group
  'group/navigation-menu-trigger',
])

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-px ml-1 size-3 transition duration-200 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180 ease-out-quad"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({ className, ...props }: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        // Layout
        'h-full w-auto p-1',
        // Transition
        'transition-[opacity,transform,translate] duration-200 ease-out-quad',
        // Starting / ending styles
        'data-starting-style:opacity-0 data-ending-style:opacity-0 data-starting-style:blur-xs data-ending-style:blur-xs',
        'data-starting-style:data-[activation-direction=left]:-translate-x-1/2',
        'data-starting-style:data-[activation-direction=right]:translate-x-1/2',
        'data-ending-style:data-[activation-direction=left]:translate-x-1/2',
        'data-ending-style:data-[activation-direction=right]:-translate-x-1/2',
        // No-viewport mode: visual
        'group-data-[viewport=false]/navigation-menu:rounded-lg',
        'group-data-[viewport=false]/navigation-menu:bg-popover',
        'group-data-[viewport=false]/navigation-menu:text-popover-foreground',
        'group-data-[viewport=false]/navigation-menu:shadow',
        'group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10',
        // No-viewport mode: animation
        'group-data-[viewport=false]/navigation-menu:duration-300',
        'group-data-[viewport=false]/navigation-menu:data-open:animate-in',
        'group-data-[viewport=false]/navigation-menu:data-open:fade-in-0',
        'group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95',
        'group-data-[viewport=false]/navigation-menu:data-closed:animate-out',
        'group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0',
        'group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95',
        // Link focus override
        '**:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuPositioner({
  className,
  side = 'bottom',
  sideOffset = 8,
  align = 'start',
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          // Layout
          'isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)',
          // Transition
          'transition-[top,left,right,bottom] duration-200 ease-out-quad',
          // Instant override
          'data-instant:transition-none',
          // Before pseudo: offset hit area
          'data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0',
          className,
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup
          className={cn(
            // Layout
            'relative h-(--popup-height) w-(--popup-width) xs:w-(--popup-width)',
            // Visual
            'rounded-lg bg-popover text-popover-foreground shadow outline-none ring-1 ring-foreground/10',
            // Transform origin
            'origin-(--transform-origin)',
            // Transition
            'transition-[opacity,transform,width,height,scale,translate,filter] duration-200 ease-out-quad',
            // Starting / ending styles
            'data-starting-style:scale-90 data-ending-style:scale-90',
            'data-starting-style:opacity-0 data-ending-style:opacity-0',
            'data-ending-style:duration-150 data-[ending-style]:easing-[ease]',
          )}
        >
          <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuLink({ className, ...props }: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        // Layout
        'flex items-center gap-2',
        // Visual
        'rounded-lg p-2 text-sm outline-none',
        // In content: override border radius
        'in-data-[slot=navigation-menu-content]:rounded-md',
        // Transition
        'transition-all',
        // Hover / Focus
        'hover:bg-muted focus:bg-muted',
        // Focus visible
        'focus-visible:outline-1 focus-visible:ring-3 focus-visible:ring-ring/50',
        // Active state
        'data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted',
        // Icon
        "[&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        // Layout
        'top-full z-1 flex h-1.5 items-end justify-center overflow-hidden',
        // Animation
        'data-[state=visible]:animate-in data-[state=visible]:fade-in',
        'data-[state=hidden]:animate-out data-[state=hidden]:fade-out',
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Icon>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
