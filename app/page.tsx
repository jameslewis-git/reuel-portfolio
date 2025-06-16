"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Download, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { ContactButton } from "@/components/contact-button"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { useResume } from "@/hooks/use-resume"
import { ResumeModal } from "@/components/resume-modal"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CertificateDisplay } from "@/components/certificate-display"

export default function Portfolio() {
  const { isModalOpen, openModal, closeModal, downloadResume } = useResume()

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Cloud Expert - Architecture - CloudOps (GCP, AWS, and Azure)</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Reuel Donald Lobo
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Cloud Architecture Expert | Leading CloudOps, Security Operations & Risk Management | Driving Innovation in Multi-Cloud Environments
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <ContactButton 
                className="bg-zinc-800 hover:bg-zinc-700 text-white"
              />
            </div>
            <div className="flex gap-4 pt-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://github.com/reuel-git" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://www.linkedin.com/in/reuel-lobo-738691163/" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="tel:+918310142706">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                      >
                        <Phone className="h-5 w-5" />
                        <span className="sr-only">Phone</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Phone</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute inset-x-0 bottom-4 mx-auto flex flex-col items-center justify-center gap-4 w-full cursor-pointer group"
          onClick={() => {
            const aboutSection = document.getElementById('about')
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          {/* Text with gradient and glow */}
          <motion.div
            className="relative"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 tracking-wider relative z-10">
              SCROLL DOWN
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-lg -z-10" />
          </motion.div>

          {/* Animated scroll indicator */}
          <div className="relative">
            {/* Outer glow rings */}
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/30 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main circle container */}
            <div className="relative w-14 h-14 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 flex items-center justify-center overflow-hidden group-hover:border-purple-500/50 transition-all duration-500 shadow-lg shadow-purple-500/20">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated dots */}
              <div className="relative w-1 h-8">
                {[0, 0.15, 0.3].map((delay, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-1 h-1 rounded-full ${index % 2 === 0 ? 'bg-purple-500' : 'bg-pink-500'}`}
                    animate={{
                      y: [0, 24, 0],
                      opacity: [0, 1, 0],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay,
                    }}
                  />
                ))}
              </div>

              {/* Subtle rotating gradient border */}
              <motion.div
                className="absolute inset-0 rounded-full border border-gradient-to-r from-purple-500/20 to-pink-500/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <Image
                  src="/images/profile1.png"
                  alt="Reuel Donald Lobo"
                  width={800}
                  height={1000}
                  quality={100}
                  priority
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                I'm Reuel Donald Lobo, a Cloud Expert specializing in Architecture and CloudOps at NIVEUS SOLUTIONS PVT LTD (Part of NTT Data). I lead CloudOps, Security Operations, Risk, and Compliance globally for customers, driving innovation in multi-cloud environments.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                With expertise in GCP, AWS, and Azure, I'm responsible for risk governance, security architecture, and operations across projects. I specialize in multi-cloud security posture management and customer onboarding, while driving cloud service development and governance models.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                My achievements include saving $40 million annually for BFSI, healthcare, banking, and automotive industry customers through FinOps practices, automating workflows to save 200+ man-hours monthly, and remediating 6,000+ vulnerabilities to enhance cloud security posture.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Reuel Donald Lobo</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Position</div>
                    <div className="font-medium">Cloud Expert - Architecture</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Bangalore, Karnataka, India</div>
                  </div>
                </div>

                {/* Download Resume Button */}
                <div className="mt-8">
                  <Button 
                    className="w-full relative group overflow-hidden bg-zinc-800/50 hover:bg-zinc-800/70 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300"
                    onClick={openModal}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                    <div className="relative flex items-center justify-between px-4 py-2">
                      <div className="flex items-center gap-2 transform group-hover:translate-x-1 transition-all duration-500 ease-out">
                        <Download className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-500" />
                        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-300 group-hover:to-pink-300">
                          View Resume
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-pink-400/0 transform translate-x-5 group-hover:translate-x-2 group-hover:text-pink-400 transition-all duration-500 ease-out" />
                    </div>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Cloud Architecture" level={95} />
            <SkillBadge name="Cloud Security" level={90} />
            <SkillBadge name="FinOps" level={100} />
            <SkillBadge name="Cloud Automation" level={95} />
            <SkillBadge name="Kubernetes" level={100} />
            <SkillBadge name="Docker" level={95} />
            <SkillBadge name="Cloud Cost Optimization" level={90} />
            <SkillBadge name="Microservices" level={85} />
            <SkillBadge name="CI/CD  (GitHub Actions, GitLab CI/CD, Azure DevOps)" level={90} />
            <SkillBadge name="Multi-Cloud Strategy (AWS, Azure, GCP)" level={85} />
            <SkillBadge name="Cloud Governance" level={80} />
            <SkillBadge name="Cloud Strategy & Roadmapping" level={95} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Experience & Education" subtitle="My professional journey" />

          <div className="mt-16">
            {/* Current Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 transition-all duration-300 hover:border-purple-500/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Current Role</h3>
                      <p className="text-zinc-400">Cloud Architect at Niveus Solutions (Part of NTT Data) </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Details */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Certifications
                      </h4>
                      <div className="space-y-2">
                        <p className="text-zinc-300">Google Cloud Certifications</p>
                        <p className="text-zinc-400">Cloud Digital Leader | Associate Cloud Engineer</p>
                        <p className="text-zinc-400">Issued by Google Cloud</p>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        Achievements & Activities
                      </h4>
                      <ul className="space-y-2 text-zinc-300">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>$40M annually for enterprise clients through FinOps practices</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                          <span>Remediated 6,000+ vulnerabilities to improve cloud security posture</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Automated workflows saving 200+ man-hours monthly</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                          <span>Recipient of the "Standout Super Star" Award at Niveus Solutions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Certified Google Cloud Digital Leader & Associate Cloud Engineer</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                          <span>Speaker and mentor on Cloud Security and Automation practices</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Current Focus */}
                  <div className="mt-8 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Current Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-zinc-300">Multi-Cloud Security Architecture</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-zinc-300">FinOps & Cloud Cost Optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                        <span className="text-zinc-300">Cloud Automation & DevSecOps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                        <span className="text-zinc-300">Scaling Cloud Governance Models</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Educational Timeline */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Cloud Chapters
              </h2>
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Professional Certifications" subtitle="My Cloud Certifications" />
          <div className="mt-16">
            <CertificateDisplay />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
               title="Automated SA Key Rotation Module"
               description="Automated Service Account key rotation for enhanced security and compliance in Google Cloud environments. Reduced manual overhead and mitigated credential leakage risks."
               tags={["GCP", "Security", "Automation", "IAM", "Python", "Cloud Functions"]}
            />
            <ProjectCard
               title="Google Cloud Identity Suspension Module"
               description="Developed a module to automatically suspend inactive or risky Google Cloud Identity users based on policy rules, improving access control and reducing insider threat surfaces."
               tags={["GCP", "Cloud Identity", "Security", "IAM", "Python", "Automation"]}
            />
            <ProjectCard
              title="Alert Management Middleware"
              description="Created a centralized middleware to route, filter, and enrich alerts across multi-cloud monitoring tools. Enabled better observability and faster incident response for SRE teams."
              tags={["GCP", "Monitoring", "SRE", "Middleware", "Node.js", "Pub/Sub", "Cloud Functions"]}
            />
            <ProjectCard
               title="FinOps Dashboard on Looker"
               description="Built an interactive FinOps dashboard using Looker to provide insights into cloud spending, budget trends, and optimization opportunities for enterprise financial governance."
               tags={["Looker", "FinOps", "GCP", "BigQuery", "Data Studio", "Cloud Billing"]}             
            />
            <ProjectCard
              title="GCP Service Account Compliance Dashboard"
              description="Developed a compliance dashboard to audit GCP service accounts for key rotation, least privilege, and policy violations. Enabled visibility into security gaps at scale."
              tags={["GCP", "Compliance", "Security", "BigQuery", "Looker", "Monitoring"]}
            />
            <ProjectCard
             title="Threat Notification Module – Google Cloud SCC"
             description="Designed a threat notification system that integrates with Google Cloud Security Command Center to alert teams about high-severity findings in real-time via Slack and email."
             tags={["GCP", "Security", "SCC", "Threat Detection", "Slack API", "Pub/Sub"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">reueldonald@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/reuel-lobo-738691163</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">+91 8310142706</div>
                  </div>
                </div>
              </div>

              {/* Current Status */}
<div className="mt-8 space-y-4">
  <h4 className="text-xl font-bold mb-6">Current Status</h4>
  <div className="grid grid-cols-1 gap-4">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
      <span className="text-zinc-300">Open to Cloud Architecture consulting and strategic roles</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
      <span className="text-zinc-300">Delivering enterprise cloud solutions at Niveus Solutions (NTT Data)</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
      <span className="text-zinc-300">Building cloud automation, FinOps, and security modules</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
      <span className="text-zinc-300">Open to collaboration on cloud-native or security-focused projects</span>
    </div>
  </div>
</div>

            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Reuel</span>
              <span className="text-white"> Donald Lobo</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">© {new Date().getFullYear()} Reuel Donald Lobo. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <Link href="mailto:reueldonald@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/reuel-lobo-738691163/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="tel:+918310142706">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </div>
            <Link 
              href="https://jameslewisportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative cursor-pointer"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-1000 -z-10"></div>
                <motion.span 
                  className="text-base font-semibold relative block"
                  animate={{ 
                    y: [0, -3, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400/80 to-pink-400/80 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                    Designed by James Lewis
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-400/0 via-pink-400/50 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              </motion.div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
