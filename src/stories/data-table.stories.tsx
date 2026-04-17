import type { Meta, StoryObj } from '@storybook/react'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/ui/data-table'

type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const columns: ColumnDef<Payment>[] = [
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'amount', header: 'Amount', cell: ({ row }) => `$${row.getValue('amount')}` },
]

const data: Payment[] = [
  { id: '1', amount: 316, status: 'success', email: 'ken99@yahoo.com' },
  { id: '2', amount: 242, status: 'success', email: 'abe45@gmail.com' },
  { id: '3', amount: 837, status: 'processing', email: 'monserrat44@gmail.com' },
  { id: '4', amount: 874, status: 'success', email: 'silas22@gmail.com' },
  { id: '5', amount: 721, status: 'failed', email: 'carmella@hotmail.com' },
]

const meta = {
  title: 'UI/DataTable',
  component: DataTable,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <DataTable columns={columns} data={data} />,
}

export const WithFilter: Story = {
  render: () => <DataTable columns={columns} data={data} filterColumn="email" />,
}

export const WithPagination: Story = {
  render: () => (
    <DataTable columns={columns} data={data} pagination pageSize={3} />
  ),
}
