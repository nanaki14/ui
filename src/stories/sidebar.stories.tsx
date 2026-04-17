import type { Meta, StoryObj } from '@storybook/react'
import { HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/ui/sidebar'

const items = [
  { title: 'Home', icon: HomeIcon },
  { title: 'Inbox', icon: InboxIcon },
  { title: 'Search', icon: SearchIcon },
  { title: 'Settings', icon: SettingsIcon },
]

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

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
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <span className="px-2 py-1 text-xs text-muted-foreground">v1.0.0</span>
        </SidebarFooter>
      </Sidebar>
      <main className="flex flex-1 flex-col p-4">
        <SidebarTrigger />
        <p className="mt-4 text-sm text-muted-foreground">Main content area</p>
      </main>
    </SidebarProvider>
  ),
}
