"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  
    {
      title: "Cloud Expert – Architecture & CloudOps",
      company: "Niveus Solutions Pvt Ltd (Part of NTT Data)",
      period: "Oct 2024 – Present",
      description:
        "Leading CloudOps, Security Operations, Risk, and Compliance globally. Managing risk governance and security architecture across projects. Driving cloud service development and delivering milestones. Saved $40M annually via FinOps; automated workflows saving 200+ man-hours monthly.",
    },
    {
      title: "Cloud Lead – Cloud Security & Compliance",
      company: "Niveus Solutions Pvt Ltd",
      period: "June 2022 – Oct 2024",
      description:
        "Headed cloud security operations and risk governance. Conducted security audits for BFSI, healthcare, and automotive clients. Remediated 6,000+ vulnerabilities and implemented CSPM frameworks to harden cloud security posture.",
    },
    {
      title: "Linux/Cloud Support Engineer",
      company: "Webscale Networks Pvt Ltd",
      period: "Oct 2021 – June 2022",
      description:
        "Managed patching and vulnerability remediation for Linux servers on AWS & GCP. Automated patch strategies and improved system uptime. Provided cloud infrastructure support and implemented monitoring solutions across hybrid environments.",
    },
    {
      title: "Specialist Technical Support (SME)",
      company: "GlowTouch Technologies",
      period: "Jan 2021 – Nov 2021",
      description:
        "Led support improvement projects and reviewed internal KB articles. Ensured SLA adherence and worked on process enhancements to improve customer experience and internal operations.",
    },
    {
      title: "Technical Support Administrator",
      company: "GlowTouch Technologies",
      period: "Nov 2019 – Dec 2020",
      description:
        "Handled technical issues related to CMS platforms like WordPress and Magento. Oversaw website migrations, DNS troubleshooting, and VPS hosting support as part of the Product Specialist team.",
    },
    {
      title: "Content Editor",
      company: "STATS Perform",
      period: "Mar 2018 – Nov 2019",
      description:
        "Curated sports data for XML feeds and maintained fixture accuracy across multiple competitions. Conducted web-based research and ensured up-to-date venue and scheduling information.",
    },
    {
      title: "Bachelor of Commerce (B.Com)",
      company: "Mangalore University",
      period: "2015 – 2018",
      description:
        "Built foundational business knowledge that supports FinOps, governance, and cost optimization in cloud roles. Developed early analytical skills essential for cloud architecture and compliance.",
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
