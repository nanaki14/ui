import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Label } from '@/ui/label'
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

export const ThreeThumbs: Story = {
  render: () => (
    <Slider defaultValue={[20, 50, 80]} max={100} step={1} className="w-[300px]" />
  ),
}

export const Steps: Story = {
  render: () => (
    <Slider defaultValue={[60]} max={100} step={10} className="w-[300px]" />
  ),
}

export const CustomRange: Story = {
  render: () => (
    <Slider defaultValue={[18]} min={0} max={40} step={1} className="w-[300px]" />
  ),
}

export const Disabled: Story = {
  render: () => <Slider defaultValue={[40]} max={100} disabled className="w-[300px]" />,
}

export const Vertical: Story = {
  render: () => (
    <div className="h-48">
      <Slider orientation="vertical" defaultValue={[40]} max={100} step={1} />
    </div>
  ),
}

export const VerticalRange: Story = {
  render: () => (
    <div className="h-48">
      <Slider orientation="vertical" defaultValue={[20, 80]} max={100} step={1} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-[300px] gap-2">
      <Label htmlFor="volume">Volume</Label>
      <Slider id="volume" defaultValue={[60]} max={100} step={1} />
    </div>
  ),
}

export const WithValue: Story = {
  render: function WithValueStory() {
    const [value, setValue] = useState<number[]>([50])
    return (
      <div className="grid w-[300px] gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="brightness">Brightness</Label>
          <span className="text-muted-foreground text-sm tabular-nums">{value[0]}%</span>
        </div>
        <Slider
          id="brightness"
          value={value}
          onValueChange={(next) => setValue(Array.isArray(next) ? [...next] : [next])}
          max={100}
          step={1}
        />
      </div>
    )
  },
}

export const PriceRange: Story = {
  render: function PriceRangeStory() {
    const [value, setValue] = useState<number[]>([200, 800])
    return (
      <div className="grid w-[320px] gap-2">
        <div className="flex items-center justify-between">
          <Label>Price range</Label>
          <span className="text-muted-foreground text-sm tabular-nums">
            ${value[0]} – ${value[1]}
          </span>
        </div>
        <Slider
          value={value}
          onValueChange={(next) => setValue(Array.isArray(next) ? [...next] : [next])}
          min={0}
          max={1000}
          step={10}
        />
      </div>
    )
  },
}
