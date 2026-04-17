import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { DatePicker } from '@/ui/date-picker'

const meta = {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()
    return <DatePicker value={date} onChange={setDate} />
  },
}

export const WithValue: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <DatePicker value={date} onChange={setDate} />
  },
}

export const Disabled: Story = {
  render: () => <DatePicker disabled />,
}
