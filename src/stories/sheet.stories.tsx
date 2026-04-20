import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui/sheet'

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline" type="button">
            Open
          </Button>
        }
      />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button type="submit">Save changes</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open right</Button>} />
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Right sheet</SheetTitle>
          <SheetDescription>This sheet slides in from the right.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open left</Button>} />
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left sheet</SheetTitle>
          <SheetDescription>This sheet slides in from the left.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open top</Button>} />
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top sheet</SheetTitle>
          <SheetDescription>This sheet slides in from the top.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open bottom</Button>} />
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom sheet</SheetTitle>
          <SheetDescription>This sheet slides in from the bottom.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open</Button>} />
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>No close button</SheetTitle>
          <SheetDescription>Close via the action below or by pressing Escape.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline">Cancel</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const ScrollableContent: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open long content</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Terms of service</SheetTitle>
          <SheetDescription>Scroll through the full policy.</SheetDescription>
        </SheetHeader>
        <div className="flex-1 space-y-3 overflow-y-auto px-4 text-sm">
          {Array.from({ length: 30 }, (_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: story content
            <p key={i}>
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
        <SheetFooter>
          <SheetClose render={<Button>Close</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
