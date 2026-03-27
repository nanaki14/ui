import * as React from 'react'
import { toast as sonnerToast } from 'sonner'
import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

// ── Primitive building blocks ────────────────────────────────────────────────

function ToastProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function ToastViewport({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      data-slot="toast-viewport"
      className={cn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4',
        'sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        className,
      )}
      {...props}
    />
  )
}

interface ToastProps extends React.HTMLAttributes<HTMLLIElement> {
  variant?: 'default' | 'destructive'
}

function Toast({ className, variant = 'default', ...props }: ToastProps) {
  return (
    <li
      data-slot="toast"
      data-variant={variant}
      className={cn(
        'group pointer-events-auto relative flex w-full items-center justify-between gap-4',
        'overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all',
        variant === 'default' && 'border-border bg-background text-foreground',
        variant === 'destructive' &&
          'border-destructive bg-destructive text-destructive-foreground',
        className,
      )}
      {...props}
    />
  )
}

function ToastAction({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      data-slot="toast-action"
      className={cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium',
        'transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'group-[.destructive]:border-destructive-foreground/30 group-[.destructive]:hover:border-destructive/30',
        'group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground',
        'group-[.destructive]:focus:ring-destructive',
        className,
      )}
      {...props}
    />
  )
}

function ToastClose({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      data-slot="toast-close"
      className={cn(
        'absolute right-1 top-1 rounded-md p-1 opacity-0 transition-opacity',
        'text-foreground/50 hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2',
        'group-hover:opacity-100',
        'group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50',
        'group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
        className,
      )}
      aria-label="Close"
      {...props}
    >
      <XIcon className="size-4" />
    </button>
  )
}

function ToastTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="toast-title"
      className={cn('text-sm font-semibold', className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="toast-description"
      className={cn('text-sm opacity-90', className)}
      {...props}
    />
  )
}

// ── useToast hook (wraps sonner) ─────────────────────────────────────────────

interface ToastCallOptions {
  description?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  duration?: number
}

function useToast() {
  const call = (
    fn: typeof sonnerToast | typeof sonnerToast.success,
    message: string,
    options?: ToastCallOptions,
  ) =>
    fn(message, {
      description: options?.description,
      duration: options?.duration,
      action: options?.action
        ? { label: options.action.label, onClick: options.action.onClick }
        : undefined,
    })

  return {
    toast: (message: string, options?: ToastCallOptions) =>
      call(sonnerToast, message, options),
    success: (message: string, options?: ToastCallOptions) =>
      call(sonnerToast.success, message, options),
    error: (message: string, options?: ToastCallOptions) =>
      call(sonnerToast.error, message, options),
    warning: (message: string, options?: ToastCallOptions) =>
      call(sonnerToast.warning, message, options),
    info: (message: string, options?: ToastCallOptions) =>
      call(sonnerToast.info, message, options),
    dismiss: (id?: string | number) => sonnerToast.dismiss(id),
  }
}

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast,
}
export type { ToastProps, ToastCallOptions }
