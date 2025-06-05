"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectThumbnailProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export function ProjectThumbnail({ src, alt, width = 600, height = 400 }: ProjectThumbnailProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-zinc-800 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-700 animate-shimmer" />
        </div>
      )}

      {/* Project image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          onLoadingComplete={() => setIsLoading(false)}
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </div>
  )
} 