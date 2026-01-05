import { createFileRoute } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '../components/ui/button'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="space-x-5 space-y-5 p-5">
      <Button>
        Click me
        <ArrowRightIcon />
      </Button>
      <Button className="text-blue-400">
        Click me
        <ArrowRightIcon />
      </Button>
      <Button variant="outline">
        Click me
        <ArrowRightIcon />
      </Button>
      <Button variant="ghost">
        Click me
        <ArrowRightIcon />
      </Button>
      <Button variant="link">
        Click me
        <ArrowRightIcon />
      </Button>
      <Button variant="destructive">
        Click me
        <ArrowRightIcon />
      </Button>
    </div>
  )
}
