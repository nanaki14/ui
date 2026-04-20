import type { Meta, StoryObj } from '@storybook/react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts'
import type { ChartConfig } from '@/ui/chart'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/ui/chart'

const chartData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

const chartConfig: ChartConfig = {
  desktop: { label: 'Desktop', color: 'hsl(var(--chart-1))' },
  mobile: { label: 'Mobile', color: 'hsl(var(--chart-2))' },
}

const meta = {
  title: 'UI/Chart',
  component: ChartContainer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const BarChartStory: Story = {
  name: 'Bar Chart',
  render: () => (
    <ChartContainer config={chartConfig} className="h-[300px] w-[500px]">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

export const LineChartStory: Story = {
  name: 'Line Chart',
  render: () => (
    <ChartContainer config={chartConfig} className="h-[300px] w-[500px]">
      <LineChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        <Line dataKey="mobile" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
}
