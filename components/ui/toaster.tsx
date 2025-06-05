"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-zinc-900 border-2 border-purple-500/20 shadow-lg shadow-purple-500/10">
            <div className="grid gap-1">
              {title && <ToastTitle className="text-white">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-zinc-300">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-zinc-400 hover:text-white" />
          </Toast>
        )
      })}
      <ToastViewport className="fixed top-0 right-0 z-[100] flex flex-col gap-2 w-96 max-w-[100vw] p-4 sm:top-auto sm:bottom-0" />
    </ToastProvider>
  )
}
