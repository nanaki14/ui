import type { Meta, StoryObj } from '@storybook/react'
import {
  BellIcon,
  CalendarIcon,
  ChevronDownIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  LifeBuoyIcon,
  LogOutIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/ui/sidebar'

const navItems = [
  { title: 'Home', icon: HomeIcon, href: '#', active: true },
  { title: 'Inbox', icon: InboxIcon, href: '#', badge: '12' },
  { title: 'Calendar', icon: CalendarIcon, href: '#' },
  { title: 'Search', icon: SearchIcon, href: '#' },
  { title: 'Settings', icon: SettingsIcon, href: '#' },
]

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarInset>
      <header className="flex h-12 items-center gap-2 border-b px-3">
        <SidebarTrigger />
        <span className="text-sm font-medium">Dashboard</span>
      </header>
      <main className="flex flex-1 flex-col p-4">{children}</main>
    </SidebarInset>
  )
}

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <span className="px-2 py-1 font-semibold text-sm">My App</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.active}
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <span className="px-2 py-1 text-xs text-muted-foreground">v1.0.0</span>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <Shell>
        <p className="text-sm text-muted-foreground">Main content area.</p>
      </Shell>
    </SidebarProvider>
  ),
}

export const WithSearch: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarInput placeholder="Search…" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <Shell>Search input in the header.</Shell>
    </SidebarProvider>
  ),
}

export const CollapsibleIcon: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <span className="px-2 py-1 font-semibold text-sm group-data-[collapsible=icon]:hidden">
            My App
          </span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={item.active}
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <Shell>Press the trigger to collapse into icon-only mode.</Shell>
    </SidebarProvider>
  ),
}

export const Floating: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="floating">
        <SidebarHeader>
          <span className="px-2 py-1 font-semibold text-sm">Floating</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.active}
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <Shell>Floating variant with rounded, elevated surface.</Shell>
    </SidebarProvider>
  ),
}

export const Inset: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <span className="px-2 py-1 font-semibold text-sm">Inset</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.active}
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <Shell>Inset variant with the main content as an inset card.</Shell>
    </SidebarProvider>
  ),
}

export const RightSide: Story = {
  render: () => (
    <SidebarProvider>
      <Shell>Sidebar on the right side.</Shell>
      <Sidebar side="right">
        <SidebarHeader>
          <span className="px-2 py-1 font-semibold text-sm">Right sidebar</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  ),
}

export const WithGroupAction: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction title="Add project">
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {['Design system', 'Marketing site', 'Mobile app'].map((title) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton
                      render={
                        <a href="#">
                          <span>{title}</span>
                        </a>
                      }
                    />
                    <SidebarMenuAction showOnHover>
                      <SettingsIcon />
                    </SidebarMenuAction>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    render={
                      <a href="#">
                        <UserIcon />
                        <span>Profile</span>
                      </a>
                    }
                  />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    render={
                      <a href="#">
                        <BellIcon />
                        <span>Notifications</span>
                      </a>
                    }
                  />
                  <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <Shell>Group action, per-item action, and badges.</Shell>
    </SidebarProvider>
  ),
}

export const WithSubMenu: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    render={
                      <a href="#">
                        <HomeIcon />
                        <span>Overview</span>
                      </a>
                    }
                  />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    render={
                      <button type="button">
                        <InboxIcon />
                        <span>Projects</span>
                        <ChevronDownIcon className="ml-auto" />
                      </button>
                    }
                  />
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton isActive render={<a href="#">Design system</a>} />
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton render={<a href="#">Marketing site</a>} />
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton render={<a href="#">Mobile app</a>} />
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <Shell>Nested sub-menu under a parent item.</Shell>
    </SidebarProvider>
  ),
}

export const LoadingSkeleton: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Loading…</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Array.from({ length: 6 }, (_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: story skeleton list
                  <SidebarMenuItem key={i}>
                    <SidebarMenuSkeleton showIcon />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <Shell>Skeleton menu items while loading.</Shell>
    </SidebarProvider>
  ),
}

export const CollapsibleNone: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar collapsible="none">
        <SidebarHeader>
          <span className="px-2 py-1 font-semibold text-sm">Always open</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <Shell>Non-collapsible sidebar — the trigger has no effect.</Shell>
    </SidebarProvider>
  ),
}

export const MenuButtonSizes: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Small</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.slice(0, 3).map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      size="sm"
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Default</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.slice(0, 3).map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Large</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.slice(0, 3).map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      size="lg"
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span className="flex flex-col leading-tight">
                            <span className="font-medium">{item.title}</span>
                            <span className="text-muted-foreground text-xs">Subtitle</span>
                          </span>
                        </a>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <Shell>Compare small, default, and large menu button sizes.</Shell>
    </SidebarProvider>
  ),
}

export const OutlineMenuButton: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Quick actions</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant="outline"
                    render={
                      <button type="button">
                        <PlusIcon />
                        <span>New project</span>
                      </button>
                    }
                  />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant="outline"
                    render={
                      <button type="button">
                        <SearchIcon />
                        <span>Find…</span>
                      </button>
                    }
                  />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <Shell>Outline variant for prominent actions.</Shell>
    </SidebarProvider>
  ),
}

export const Complete: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                tooltip="Acme Inc."
                render={
                  <button type="button">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <FolderIcon className="size-4" />
                    </div>
                    <span className="flex flex-col leading-tight">
                      <span className="font-semibold">Acme Inc.</span>
                      <span className="text-muted-foreground text-xs">Enterprise</span>
                    </span>
                  </button>
                }
              />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={item.active}
                      render={
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      }
                    />
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction title="Add project">
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {['Design system', 'Marketing site', 'Mobile app'].map((title) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton
                      tooltip={title}
                      render={
                        <a href="#">
                          <FolderIcon />
                          <span>{title}</span>
                        </a>
                      }
                    />
                    <SidebarMenuAction showOnHover>
                      <SettingsIcon />
                    </SidebarMenuAction>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip="Support"
                    render={
                      <a href="#">
                        <LifeBuoyIcon />
                        <span>Support</span>
                      </a>
                    }
                  />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                tooltip="Pedro Duarte"
                render={
                  <button type="button">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-muted">
                      <UserIcon className="size-4" />
                    </div>
                    <span className="flex flex-col leading-tight">
                      <span className="font-medium">Pedro Duarte</span>
                      <span className="text-muted-foreground text-xs">m@example.com</span>
                    </span>
                    <LogOutIcon className="ml-auto size-4" />
                  </button>
                }
              />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <Shell>
        <p className="text-sm text-muted-foreground">
          Realistic example combining header brand, active state, badges, group action, per-item
          action, and a user footer. Try toggling — it collapses to icon-only.
        </p>
      </Shell>
    </SidebarProvider>
  ),
}
