import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@/ui/slider'

const meta = {
  title: 'UI/Slider',
  component: Slider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-[300px]" />,
}

export const Range: Story = {
  render: () => <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[300px]" />,
}

export const Disabled: Story = {
  render: () => <Slider defaultValue={[40]} max={100} disabled className="w-[300px]" />,
}
