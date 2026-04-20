import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Calendar } from '@/ui/calendar'

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <Calendar mode="single" selected={date} onSelect={setDate} />
  },
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<{ from?: Date; to?: Date }>({})
    return <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
  },
}
