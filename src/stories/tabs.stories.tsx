import type { Meta, StoryObj } from '@storybook/react'
import { BellIcon, CreditCardIcon, SettingsIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const Simple: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 text-muted-foreground">
        High-level dashboard summary.
      </TabsContent>
      <TabsContent value="analytics" className="p-4 text-muted-foreground">
        Charts and breakdowns of key metrics.
      </TabsContent>
      <TabsContent value="reports" className="p-4 text-muted-foreground">
        Downloadable reports and exports.
      </TabsContent>
    </Tabs>
  ),
}

export const Line: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="line" className="w-full justify-start border-b">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 text-muted-foreground">
        High-level dashboard summary.
      </TabsContent>
      <TabsContent value="analytics" className="p-4 text-muted-foreground">
        Charts and breakdowns of key metrics.
      </TabsContent>
      <TabsContent value="reports" className="p-4 text-muted-foreground">
        Downloadable reports and exports.
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="profile" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">
          <UserIcon />
          Profile
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCardIcon />
          Billing
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <BellIcon />
          Alerts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="p-4 text-muted-foreground">
        Manage your personal details.
      </TabsContent>
      <TabsContent value="billing" className="p-4 text-muted-foreground">
        Update payment methods and invoices.
      </TabsContent>
      <TabsContent value="notifications" className="p-4 text-muted-foreground">
        Control how we reach out to you.
      </TabsContent>
    </Tabs>
  ),
}

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="advanced" disabled>
          Advanced
        </TabsTrigger>
        <TabsTrigger value="experimental">Experimental</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="p-4 text-muted-foreground">
        Everyday settings.
      </TabsContent>
      <TabsContent value="advanced" className="p-4 text-muted-foreground">
        Power-user options.
      </TabsContent>
      <TabsContent value="experimental" className="p-4 text-muted-foreground">
        Opt into features still in development.
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs orientation="vertical" defaultValue="profile" className="w-[520px]">
      <TabsList className="w-40 shrink-0">
        <TabsTrigger value="profile">
          <UserIcon />
          Profile
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCardIcon />
          Billing
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <BellIcon />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="settings">
          <SettingsIcon />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="p-4 text-muted-foreground">
        Personal details, avatar, and bio.
      </TabsContent>
      <TabsContent value="billing" className="p-4 text-muted-foreground">
        Plans, payment methods, invoices.
      </TabsContent>
      <TabsContent value="notifications" className="p-4 text-muted-foreground">
        Email, push, and in-app alerts.
      </TabsContent>
      <TabsContent value="settings" className="p-4 text-muted-foreground">
        Security, integrations, and more.
      </TabsContent>
    </Tabs>
  ),
}

export const VerticalLine: Story = {
  render: () => (
    <Tabs orientation="vertical" defaultValue="profile" className="w-[520px]">
      <TabsList variant="line" className="w-40 shrink-0 border-r">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="p-4 text-muted-foreground">
        Personal details, avatar, and bio.
      </TabsContent>
      <TabsContent value="billing" className="p-4 text-muted-foreground">
        Plans, payment methods, invoices.
      </TabsContent>
      <TabsContent value="notifications" className="p-4 text-muted-foreground">
        Email, push, and in-app alerts.
      </TabsContent>
      <TabsContent value="settings" className="p-4 text-muted-foreground">
        Security, integrations, and more.
      </TabsContent>
    </Tabs>
  ),
}

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState('one')
    return (
      <div className="grid w-[400px] gap-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Active: {value}</span>
          <div className="flex gap-1">
            <Button size="sm" variant="outline" onClick={() => setValue('one')}>
              Go to 1
            </Button>
            <Button size="sm" variant="outline" onClick={() => setValue('two')}>
              Go to 2
            </Button>
            <Button size="sm" variant="outline" onClick={() => setValue('three')}>
              Go to 3
            </Button>
          </div>
        </div>
        <Tabs value={value} onValueChange={(v) => setValue(v as string)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="one">One</TabsTrigger>
            <TabsTrigger value="two">Two</TabsTrigger>
            <TabsTrigger value="three">Three</TabsTrigger>
          </TabsList>
          <TabsContent value="one" className="p-4 text-muted-foreground">
            Panel one.
          </TabsContent>
          <TabsContent value="two" className="p-4 text-muted-foreground">
            Panel two.
          </TabsContent>
          <TabsContent value="three" className="p-4 text-muted-foreground">
            Panel three.
          </TabsContent>
        </Tabs>
      </div>
    )
  },
}
