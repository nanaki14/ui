import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/ui/context-menu'

function DemoTrigger({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <ContextMenuTrigger className="flex h-48 w-[320px] select-none flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-6 text-center">
      <span className="font-medium text-sm">{title}</span>
      <span className="mt-2 max-w-56 text-muted-foreground text-xs leading-5">{description}</span>
    </ContextMenuTrigger>
  )
}

function DefaultMenuDemo() {
  return (
    <ContextMenu>
      <DemoTrigger
        title="Project overview"
        description="Right click to open the menu for common page actions."
      />
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function SubmenuDemo() {
  return (
    <ContextMenu>
      <DemoTrigger
        title="Assets"
        description="The submenu example mirrors nested actions in a file manager."
      />
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuLabel>File</ContextMenuLabel>
          <ContextMenuItem inset>Open</ContextMenuItem>
          <ContextMenuItem inset>Rename</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>Share</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>Email link</ContextMenuItem>
              <ContextMenuItem>Copy invite</ContextMenuItem>
              <ContextMenuItem>Export PDF</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function SelectionDemo() {
  const [showToolbar, setShowToolbar] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)
  const [panelPosition, setPanelPosition] = useState('right')

  return (
    <ContextMenu>
      <DemoTrigger
        title="Workspace layout"
        description="Checkbox and radio items stay interactive inside Storybook."
      />
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuLabel>Panels</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
            Show toolbar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
            Show sidebar
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Inspector Position</ContextMenuLabel>
          <ContextMenuRadioGroup value={panelPosition} onValueChange={setPanelPosition}>
            <ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
            <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
            <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

const meta = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <DefaultMenuDemo />,
}

export const WithSubmenu: Story = {
  render: () => <SubmenuDemo />,
}

export const WithSelectionItems: Story = {
  render: () => <SelectionDemo />,
}
