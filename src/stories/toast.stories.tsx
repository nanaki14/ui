import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/ui/button'
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast,
} from '@/ui/toast'

const meta = {
  title: 'UI/Toast',
  component: Toast,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

function ToastDemo() {
  const { toast } = useToast()
  return (
    <ToastProvider>
      <Button
        variant="outline"
        onClick={() =>
          toast({ title: 'Scheduled', description: 'Your event has been scheduled.' })
        }
      >
        Show Toast
      </Button>
      <ToastViewport />
    </ToastProvider>
  )
}

export const Default: Story = {
  render: () => <ToastDemo />,
}

export const Destructive: Story = {
  render: () => {
    function Demo() {
      const { toast } = useToast()
      return (
        <ToastProvider>
          <Button
            variant="outline"
            onClick={() =>
              toast({
                variant: 'destructive',
                title: 'Error',
                description: 'There was a problem with your request.',
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
            }
          >
            Show Error Toast
          </Button>
          <ToastViewport />
        </ToastProvider>
      )
    }
    return <Demo />
  },
}
