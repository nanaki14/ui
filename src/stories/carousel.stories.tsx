import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from '@/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/ui/carousel'

const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="px-10">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={i}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="font-semibold text-4xl">{i + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
