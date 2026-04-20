import type { Meta, StoryObj } from '@storybook/react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/ui/navigation-menu'

const meta = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  href="/"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">ui</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Base UI and Tailwind CSS.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/docs/introduction">
                  <div className="text-sm font-medium leading-none">Introduction</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Re-usable components built using Base UI and Tailwind CSS.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/docs/installation">
                  <div className="text-sm font-medium leading-none">Installation</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    How to install dependencies and set up your project.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/docs/primitives/typography">
                  <div className="text-sm font-medium leading-none">Typography</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Styles for headings, paragraphs, lists and more.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
              {['Alert Dialog', 'Button', 'Dialog', 'Dropdown Menu', 'Hover Card', 'Popover'].map(
                (component) => (
                  <li key={component}>
                    <NavigationMenuLink href="#">
                      <div className="text-sm font-medium leading-none">{component}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        A reusable {component.toLowerCase()} component.
                      </p>
                    </NavigationMenuLink>
                  </li>
                ),
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/blog" className={navigationMenuTriggerStyle()}>
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
