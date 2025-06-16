"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Cloud Expert - Architecture - CloudOps",
    company: "NIVEUS SOLUTIONS PVT LTD (Part of NTT Data)",
    period: "Oct 2024 - Present",
    description:
      "Leading CloudOps, Security Operations, Risk, and Compliance globally. Managing risk governance, security architecture, and operations across projects. Driving cloud service development, governance models, and milestone delivery. Achieved $40M annual savings through FinOps and automated workflows saving 200+ man-hours monthly.",
  },
  {
    title: "Technical Leadership & Architecture",
    company: "NIVEUS SOLUTIONS PVT LTD",
    period: "2024 - Present",
    description:
      "Providing technical design and leadership for new solutions using microservices and cloud platforms. Managing infrastructure deployment, performing network discoveries, and assisting in cloud migration strategies. Participating in pre-sales activities and coaching teams on cloud best practices.",
  },
  {
    title: "Cloud Security & Operations",
    company: "NIVEUS SOLUTIONS PVT LTD",
    period: "2024 - Present",
    description:
      "Successfully remediated 6,000+ vulnerabilities, enhancing cloud security posture. Implementing SecOps practices and managing multi-cloud security posture. Leading customer onboarding and cloud service development initiatives.",
  },
  {
    title: "B.E. in AI & Data Science",
    company: "Vidyavardhini's College of Engineering and Technology",
    period: "2023 - Present",
    description:
      "Currently pursuing Bachelor's in AI & Data Science. Active in tech clubs, building projects, and learning new technologies.",
  },
  {
    title: "Technical Team Member - NSDC",
    company: "NSDC - National Student Data Corps ",
    period: "2023 - Present",
    description:
      "Responsible for building and maintaining the events for the organization. Also, responsible for the technical side of the events.",
  },
  {
    title: "Technical Team Member - PAT",
    company: "PAT - Placements and Training Cell",
    period: "2024 - Present",
    description:
      "Responsible for the technical side of the events.",
  },
  {
    title: "Full Stack Development",
    company: "Self-Learning & Projects",
    period: "2023 - Present",
    description:
      "Mastered modern web technologies including React, Next.js, and Node.js. Built multiple full-stack projects and participated in hackathons.",
  },
  {
    title: "Higher Secondary Education",
    company: "Junior College",
    period: "2021 - 2023",
    description: "Completed HSC with focus on Science and Mathematics. Developed strong foundation in programming and problem-solving.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
