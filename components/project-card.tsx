"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-purple-500/50 flex flex-col">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col h-full">
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-400 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 pt-0 mt-auto">
            <div className="pt-4 border-t border-zinc-700/50">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group/button"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover/button:opacity-100 transition duration-1000 group-hover/button:duration-200" />
                <Button
                  size="sm"
                  className="relative w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 shadow-xl shadow-purple-500/20 hover:shadow-pink-500/20 transition-all duration-300"
                  onClick={scrollToContact}
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold tracking-wide">
                    Contact Me
                    <motion.div
                      animate={isHovered ? { x: [0, 4, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <motion.div
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
