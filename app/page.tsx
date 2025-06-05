"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Download } from "lucide-react"

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
                <span className="relative z-10">Software Engineer & FullStack Web Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                James Lewis
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              AI & Data Science Trailblazer | Full-Stack Innovator Building Smart UIs & Bold Solutions | Coding the
              Future with Passion
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
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
              <Link href="https://github.com/jameslewis-git" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/-jameslewis/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:jamesslewiss95@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <Image
                  src="/images/profile1.png"
                  alt="James Lewis"
                  width={800}
                  height={800}
                  quality={100}
                  priority
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
                I'm James Lewis, a driven B.E. student in AI and Data Science at Vidyavardhini's College of Engineering and Technology, Mumbai. I'm passionate about turning ideas into reality through coding and AI innovation. My focus is on creating smart, impactful solutions that push the boundaries of technology.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                I thrive on solving complex problems, from building machine learning models to crafting intuitive software. With a strong foundation in coding, I'm always exploring new ways to innovate and make a difference through tech.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                Eager to join cutting-edge AI and engineering teams, I'm seeking internships or entry-level roles to contribute my skills and learn from the best. 
                Let's connect to build the future of tech together!
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">James Lewis</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">jamesslewiss95@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Mumbai, India</div>
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
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={70} />
            <SkillBadge name="TypeScript" level={95} />
            <SkillBadge name="React" level={95} />
            <SkillBadge name="Next.js" level={90} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="Python" level={85} />
            <SkillBadge name="PostgreSQL" level={70} />
            <SkillBadge name="Github" level={65} />
            <SkillBadge name="MangoDB" level={60} />
            <SkillBadge name="Git" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="EduInsight - Your Gateway to Free Engineering Courses"
              description="A full-stack course aggregation platform built with Next.js, Supabase, and TypeScript."
              tags={["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Recharts"]}
              image="/images/projects/eduinsight.png"
              demoUrl="https://eduinsight-project.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/EduInsight--Your.Gateway.to.Free.Engineering.Courses.git"
            />
            <ProjectCard
              title="Quantum Habits - Daily habit checklist"
              description="A terminal-themed habit tracking app built with Next.js, TypeScript, and Framer Motion."
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "dnd-kit"]}
              image="/images/projects/checklist.png"
              demoUrl="https://dailyhabitchecklist.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/EduInsight--Your.Gateway.to.Free.Engineering.Courses.git"
            />
            <ProjectCard
              title="Random Activity Generator"
              description="An interactive app with dynamic card animations and a modern UI, built for the Code Circuit Hackathon."
              tags={["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Netlify"]}
              image="/images/projects/randomactivity.png"
              demoUrl="https://activitygeneratorcodecircuit.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/Random-activity-generator.git"
            />
            <ProjectCard
              title="NutriAI - Smart Nutrition and Diet Planning"
              description="A full-stack AI-powered nutrition and diet planning app built with Next.js, MongoDB, and Google Gemini API."
              tags={["React", "TypeScript", "MongoDB", "Google Gemini AI", "Tailwind CSS"]}
              image="/images/projects/nutriai.png"
              demoUrl="https://nutriproject.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/NutriAI.git"
            />
            <ProjectCard
              title="James Lewis - Digital Contact Card 👋"
              description="A personal web hub showcasing my Full Stack Web Development and AI & Data Science expertise."
              tags={["React", "TypeScript", "Tailwind CSS", "Next.js", "UI/UX"]}
              image="/images/projects/contactcard.png"
              demoUrl="https://james-contactcard.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/James-ContactCard.git"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/images/projects/portfolio.png"
              demoUrl="https://jameslewisportfolio.netlify.app/"
              repoUrl="https://github.com/jameslewis-git/portfolio.git"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
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
                    <div className="font-medium">jamesslewiss95@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/-jameslewis</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/jameslewis-git</div>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-bold mb-6">Current Status</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-zinc-300">Available for freelance work and full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-zinc-300">Working on personal projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                    <span className="text-zinc-300">Actively seeking internship opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                    <span className="text-zinc-300">Open to collaboration</span>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">James</span>
              <span className="text-white"> Lewis</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">© {new Date().getFullYear()} James Lewis. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/jameslewis-git" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/-jameslewis/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:jamesslewiss95@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
