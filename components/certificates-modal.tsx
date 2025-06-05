"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ZoomIn, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  pdf?: string
}

interface CertificatesModalProps {
  isOpen: boolean
  onClose: () => void
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Oscillation Runner-Up 2025",
    issuer: "IEEE",
    date: "April 2025",
    image: "/certificates/1744601764181.jpg",
  },
  {
    id: 2,
    title: "TechBlitz 2025 LLM Integrated Application Development",
    issuer: "Hackathon",
    date: "March 2025",
    image: "/certificates/1744601839786.jpg"
  },
  {
    id: 3,
    title: "Automated Machine Learning for Beginners (Google & Apple)",
    issuer: "Udemy",
    date: "February 2024",
    image: "/certificates/udemy1.png"
  },
  {
    id: 4,
    title: "Mastering C Language - C Programming For Beginners 2024",
    issuer: "Udemy",
    date: "February 2024",
    image: "/certificates/udemy2.png"
  },
  {
    id: 5,
    title: "C For Beginners",
    issuer: "Great Learning",
    date: "February 2024",
    image: "/certificates/greatlearning.png"
  },
  {
    id: 6,
    title: " Programming Fundamentals using Python - Part 2",
    issuer: "Infosys Springboard",
    date: "April 2025",
    image: "/certificates/infosys.png"
  },
  {
    id: 7,
    title: "IIT Techfest 2025 - Cloud Computing",
    issuer: "IIT Techfest",
    date: "December 2024",
    image: "/certificates/techfest.png"
  },
  {
    id: 8,
    title: "Cloud Verse 2.0",
    issuer: "Craw Cyber Security",
    date: "December 2024",
    image: "/certificates/IMG_20250504_002052.jpg"
  },
  {
    id: 9,
    title: "Generative AI Internship",
    issuer: "VCET",
    date: "June 2024",
    image: "/certificates/interngenai.png"
  },
  {
    id: 10,
    title: "Organizer TechBlitz 2025 - Technical Team",
    issuer: "VCET",
    date: "March 2025",
    image: "/certificates/Techblitz Tech.jpg"
  },
  {
    id: 11,
    title: "Programming using Java",
    issuer: "Infosys Springboard",
    date: "August 2024",
    image: "/certificates/infosys2.png"
  },
  {
    id: 12,
    title: "Python Complete Course For Python Beginners",
    issuer: "Udemy",
    date: "June 2024",
    image: "/certificates/udemy3.png"
  },
  {
    id: 13,
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Forage - Tata",
    date: "July 2024",
    image: "/certificates/forage.png"
  },
].sort((a, b) => {
  // Convert dates to timestamps for comparison
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateB - dateA; // Sort in descending order (latest first)
});

export function CertificatesModal({ isOpen, onClose }: CertificatesModalProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setSelectedCertificate(null)
    setIsZoomed(false)
    onClose()
  }

  const handleBack = () => {
    setSelectedCertificate(null)
    setIsZoomed(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 z-50 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-5xl mx-auto bg-zinc-900 rounded-xl shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  {selectedCertificate && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                      onClick={handleBack}
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                  )}
                  <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    {selectedCertificate ? selectedCertificate.title : "Certificates & Achievements"}
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  onClick={handleClose}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-grow overflow-y-auto p-6">
                {selectedCertificate ? (
                  // Certificate Detail View
                  <div className="space-y-6 max-w-4xl mx-auto">
                    {/* Back button for mobile */}
                    <div className="block sm:hidden mb-4">
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white"
                        onClick={handleBack}
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to All Certificates
                      </Button>
                    </div>

                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-800/50">
                      <div 
                        className={`relative h-full transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                        onClick={() => setIsZoomed(!isZoomed)}
                      >
                        <Image
                          src={selectedCertificate.image}
                          alt={selectedCertificate.title}
                          fill
                          className="object-contain"
                          quality={95}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-zinc-400">
                          {selectedCertificate.issuer} • {selectedCertificate.date}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                          onClick={() => setIsZoomed(!isZoomed)}
                        >
                          <ZoomIn className="h-5 w-5" />
                        </Button>
                        {selectedCertificate.pdf && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                            onClick={() => window.open(selectedCertificate.pdf, '_blank')}
                          >
                            <Download className="h-5 w-5" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Grid View
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="group cursor-pointer"
                        onClick={() => setSelectedCertificate(cert)}
                      >
                        <div className="relative overflow-hidden rounded-lg bg-zinc-800/50 border border-zinc-700/50 transition-all duration-300 hover:border-purple-500/50">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Certificate Image */}
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={cert.image}
                              alt={cert.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>

                          {/* Certificate Info */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                            <p className="text-sm text-zinc-300">
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 