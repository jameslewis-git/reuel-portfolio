"use client"

import { motion } from "framer-motion"
import { FileText, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  pdf?: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2022 - 2025",
    image: "/certificates/ACEpic.png",
    pdf: "https://www.credential.net/9da8cc68-239a-4648-b1f9-88f11a1f2322#acc.mcgqkJDI"
  },
  {
    id: 2,
    title: "Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "2022 - 2025",
    image: "/certificates/CDLpic.png",
    pdf: "https://www.credential.net/45c862cd-908c-4920-8c71-7633f194b4ce#acc.DThN8ue4"
  }
];

export function CertificateDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {certificates.map((cert) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-6 bg-zinc-900/90 backdrop-blur-sm rounded-xl border border-zinc-800 group-hover:border-purple-500/50 transition-colors duration-500">
            <div className="mb-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800/50">
              <Image
                src={cert.image}
                alt={`${cert.title} Certificate`}
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {cert.title}
                </h3>
                <p className="text-zinc-400">{cert.issuer}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-zinc-500 text-sm">{cert.date}</p>
              {cert.pdf && (
                <Button 
                  className="bg-zinc-800 hover:bg-zinc-700 group"
                  onClick={() => window.open(cert.pdf, '_blank')}
                >
                  <ArrowUpRight className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
                  View Certificate
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 