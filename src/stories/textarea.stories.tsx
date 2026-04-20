import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/ui/textarea'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Type your message here.' },
}

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
}

export const WithValue: Story = {
  args: { defaultValue: 'This is some text content.' },
}
