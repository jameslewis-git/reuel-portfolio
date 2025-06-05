"use client"

import { Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ResumeButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  onView: () => void
  onDownload: () => void
}

export function ResumeButton({ 
  variant = "default", 
  size = "default", 
  className,
  onView, 
  onDownload 
}: ResumeButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          Resume
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-zinc-800/90 backdrop-blur-sm border-zinc-700">
        <DropdownMenuItem
          onClick={onView}
          className="flex items-center gap-2 text-zinc-300 focus:text-white focus:bg-zinc-700"
        >
          <Eye className="h-4 w-4" />
          <span>Quick View</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onDownload}
          className="flex items-center gap-2 text-zinc-300 focus:text-white focus:bg-zinc-700"
        >
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 