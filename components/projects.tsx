"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const projectConfig = [
  {
    id: 1,
    titleKey: "projects.p1.title",
    catKey: "projects.p1.cat",
    year: "2025",
    image: "/images/asdesigner/modular-kitchen-burdwan.jpg",
    link: "/services/modular-kitchen",
  },
  {
    id: 2,
    titleKey: "projects.p2.title",
    catKey: "projects.p2.cat",
    year: "2025",
    image: "/images/falseSelling/image.png",
    link: "/services/false-ceiling",
  },
  {
    id: 3,
    titleKey: "projects.p3.title",
    catKey: "projects.p3.cat",
    year: "2025",
    image: "/images/asdesigner/IMG-20261027-WA0036.jpg",
    link: "/services/bedroom-design",
  },
  {
    id: 4,
    titleKey: "projects.p4.title",
    catKey: "projects.p4.cat",
    year: "2024",
    image: "/images/asdesigner/IMG-20261027-WA0033.jpg",
    link: "/services/living-room",
  },
  {
    id: 5,
    titleKey: "projects.p5.title",
    catKey: "projects.p5.cat",
    year: "2024",
    image: "/images/asdesigner/IMG-20261027-WA0027.jpg",
    link: "/services/living-room",
  },
  {
    id: 6,
    titleKey: "projects.p6.title",
    catKey: "projects.p6.cat",
    year: "2024",
    image: "/images/asdesigner/IMG-20261027-WA0030.jpg",
    link: "/services/false-ceiling",
  },
]

export function Projects() {
  const { t, lang } = useLanguage()
  const isBn = lang === "bn"
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projectConfig[index].id))
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              {t("projects.label")}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              {t("projects.title")}
            </h2>
          </div>
          <Link
            href="/our-projects"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[rgb(251,146,60)] font-medium transition-colors group"
          >
            <span>{t("projects.viewAll")}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projectConfig.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={project.link} className="block">
                <div
                  ref={(el) => {
                    imageRefs.current[index] = el
                  }}
                  className="relative overflow-hidden aspect-[4/3] rounded-2xl mb-6 bg-muted shadow-md"
                >
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div
                    className="absolute inset-0 bg-primary origin-top"
                    style={{
                      transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                      transition: "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-1.5 group-hover:text-[rgb(251,146,60)] transition-colors">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(project.catKey)}
                    </p>
                  </div>
                  <span className="text-muted-foreground/60 text-xs font-mono">
                    {isBn ? project.year.replace(/2/g, "২").replace(/0/g, "০").replace(/4/g, "৪").replace(/5/g, "৫") : project.year}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
