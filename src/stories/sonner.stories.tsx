import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Button } from '@/ui/button'
import { Toaster } from '@/ui/sonner'

const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast('Event has been created.')}>
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.success('Profile saved successfully.')}>
      Show Success
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.error('Something went wrong.')}>
      Show Error
    </Button>
  ),
}
