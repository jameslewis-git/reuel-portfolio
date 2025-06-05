"use client"

import { useState } from "react"

export function useResume() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const downloadResume = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "James_Lewis_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    downloadResume,
  }
} 