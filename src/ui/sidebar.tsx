import * as React from 'react'
import { PanelLeftIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type SidebarPlacement = 'left' | 'right'

interface SidebarContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  placement: SidebarPlacement
}

const SidebarContext = React.createContext<SidebarContextValue>({
  open: true,
  setOpen: () => {},
  placement: 'left',
})

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placement?: SidebarPlacement
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  placement = 'left',
  className,
  children,
  ...props
}: SidebarProviderProps) {
  const [openState, setOpenState] = React.useState(defaultOpen)
  const open = openProp !== undefined ? openProp : openState

  const setOpen = React.useCallback(
    (value: boolean) => {
      setOpenState(value)
      onOpenChange?.(value)
    },
    [onOpenChange],
  )

  return (
    <SidebarContext.Provider value={{ open, setOpen, placement }}>
      <div
        data-slot="sidebar-provider"
        data-state={open ? 'open' : 'closed'}
        className={cn(
          'group/sidebar-provider flex min-h-svh w-full',
          placement === 'right' && 'flex-row-reverse',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  placement?: SidebarPlacement
  collapsible?: boolean
}

function Sidebar({
  className,
  children,
  collapsible = true,
  ...props
}: SidebarProps) {
  const { open, placement } = useSidebar()

  return (
    <aside
      data-slot="sidebar"
      data-state={open ? 'open' : 'closed'}
      data-placement={placement}
      className={cn(
        'relative flex h-svh flex-col border-border bg-sidebar transition-[width] duration-300 ease-in-out',
        placement === 'right' ? 'border-l' : 'border-r',
        collapsible
          ? open
            ? 'w-64'
            : 'w-0 overflow-hidden'
          : 'w-64',
        className,
      )}
      {...props}
    >
      <div className="flex h-full w-64 flex-col">{children}</div>
    </aside>
  )
}

function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn('flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn('flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-4', className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn('flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-group"
      className={cn('flex w-full flex-col gap-1', className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-group-label"
      className={cn(
        'px-2 py-1 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="sidebar-group-content"
      className={cn('flex w-full flex-col gap-0.5', className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      data-slot="sidebar-menu"
      className={cn('flex w-full list-none flex-col gap-0.5', className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  )
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  tooltip?: string
}

function SidebarMenuButton({
  className,
  isActive,
  children,
  ...props
}: SidebarMenuButtonProps) {
  return (
    <button
      data-slot="sidebar-menu-button"
      data-active={isActive ? '' : undefined}
      className={cn(
        'flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-md px-2 py-1.5 text-left text-sm outline-none transition-colors',
        'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        'focus-visible:ring-2 focus-visible:ring-sidebar-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-[active]:bg-sidebar-accent data-[active]:font-medium data-[active]:text-sidebar-accent-foreground',
        '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function SidebarTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = useSidebar()

  return (
    <button
      data-slot="sidebar-trigger"
      data-state={open ? 'open' : 'closed'}
      onClick={() => setOpen(!open)}
      className={cn(
        'inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      aria-label={open ? 'Close sidebar' : 'Open sidebar'}
      {...props}
    >
      <PanelLeftIcon className="size-4" />
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
}

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
}
