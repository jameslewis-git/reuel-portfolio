"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function ContactButton({ 
  variant = "default", 
  size = "default", 
  className
}: ContactButtonProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth',
        // Add a slight offset to account for any fixed headers
        // and give some breathing room
        left: 0
      })
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={scrollToContact}
    >
      <Mail className="mr-2 h-4 w-4" />
      Contact Me
    </Button>
  )
} 