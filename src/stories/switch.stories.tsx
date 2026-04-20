import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '@/ui/label'
import { Switch } from '@/ui/switch'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const SmallChecked: Story = {
  args: {
    size: 'sm',
    defaultChecked: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

export const WithLabelChecked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="wifi" defaultChecked />
      <Label htmlFor="wifi">Wi-Fi</Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const Invalid: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="terms" aria-invalid="true" />
      <Label htmlFor="terms">Accept terms</Label>
    </div>
  ),
}

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch id="sm" size="sm" defaultChecked />
        <Label htmlFor="sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="default" defaultChecked />
        <Label htmlFor="default">Default</Label>
      </div>
    </div>
  ),
}
