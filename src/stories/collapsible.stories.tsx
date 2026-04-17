import type { Meta, StoryObj } from '@storybook/react'
import { ChevronsUpDownIcon } from 'lucide-react'
import { Button } from '@/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/ui/collapsible'

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon">
            <ChevronsUpDownIcon className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
