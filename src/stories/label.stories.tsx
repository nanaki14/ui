import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}
