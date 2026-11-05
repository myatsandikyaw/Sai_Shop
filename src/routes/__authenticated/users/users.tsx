import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__authenticated/users/users')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/users"!</div>
}