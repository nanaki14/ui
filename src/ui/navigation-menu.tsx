import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

interface NavigationMenuContextValue {
  value: string
  setValue: (value: string) => void
}

const NavigationMenuContext = React.createContext<NavigationMenuContextValue>({
  value: '',
  setValue: () => {},
})

function NavigationMenu({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const [value, setValue] = React.useState('')

  return (
    <NavigationMenuContext.Provider value={{ value, setValue }}>
      <nav
        data-slot="navigation-menu"
        className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
        onMouseLeave={() => setValue('')}
        {...props}
      >
        {children}
        <NavigationMenuViewport />
      </nav>
    </NavigationMenuContext.Provider>
  )
}

function NavigationMenuList({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      data-slot="navigation-menu-list"
      className={cn('group flex flex-1 list-none items-center justify-center gap-1', className)}
      {...props}
    />
  )
}

function NavigationMenuItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li data-slot="navigation-menu-item" className={cn('relative', className)} {...props} />
}

const navigationMenuTriggerStyle = cva(
  cn(
    // Layout
    'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2',
    // Visual
    'bg-background font-medium text-sm',
    // Transition
    'transition-colors',
    // Hover & focus
    'hover:bg-accent hover:text-accent-foreground',
    'focus:bg-accent focus:text-accent-foreground focus:outline-none',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-50',
    // Active state
    'data-[active]:bg-accent/50',
  ),
)

interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string
}

function NavigationMenuTrigger({
  className,
  children,
  value: valueProp,
  ...props
}: NavigationMenuTriggerProps) {
  const { value, setValue } = React.useContext(NavigationMenuContext)
  const generatedId = React.useId()
  const id = valueProp ?? generatedId
  const isOpen = value === id

  return (
    <button
      data-slot="navigation-menu-trigger"
      data-active={isOpen ? '' : undefined}
      className={cn(navigationMenuTriggerStyle(), 'gap-1', className)}
      onClick={() => setValue(isOpen ? '' : id)}
      onMouseEnter={() => setValue(id)}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          // Layout
          'relative top-px size-3',
          // Transition
          'transition-transform duration-200',
          // Open state
          isOpen && 'rotate-180',
        )}
        aria-hidden="true"
      />
    </button>
  )
}

interface NavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
}

function NavigationMenuContent({
  className,
  children,
  value: valueProp,
  ...props
}: NavigationMenuContentProps) {
  const { value } = React.useContext(NavigationMenuContext)
  const isOpen = valueProp ? value === valueProp : value !== ''

  if (!isOpen) return null

  return (
    <div
      data-slot="navigation-menu-content"
      className={cn(
        // Layout
        'absolute top-0 left-0 w-full md:absolute md:w-auto',
        // Animation: directional slide
        'data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-end]:animate-in',
        'data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-start]:animate-in',
        'data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-end]:animate-out',
        'data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-start]:animate-out',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      data-slot="navigation-menu-link"
      className={cn(
        // Layout
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline',
        // Transition
        'outline-none transition-colors',
        // Hover & focus
        'hover:bg-accent hover:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="navigation-menu-indicator"
      className={cn(
        // Layout
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        // Animation: enter
        'data-[state=visible]:fade-in data-[state=visible]:animate-in',
        // Animation: exit
        'data-[state=hidden]:fade-out data-[state=hidden]:animate-out',
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </div>
  )
}

function NavigationMenuViewport({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { value } = React.useContext(NavigationMenuContext)

  return (
    <div className="absolute top-full left-0 isolate z-50 flex justify-center">
      <div
        data-slot="navigation-menu-viewport"
        data-state={value ? 'open' : 'closed'}
        className={cn(
          // Layout
          'relative mt-1.5 w-full origin-top-center overflow-hidden rounded-md',
          // Visual
          'border bg-popover text-popover-foreground shadow',
          // Animation: enter
          'data-[state=open]:zoom-in-90 data-[state=open]:animate-in',
          // Animation: exit
          'data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
          className,
        )}
        {...props}
      />
    </div>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
