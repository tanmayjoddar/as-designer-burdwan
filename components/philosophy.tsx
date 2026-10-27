"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { HighlightedText } from "./highlighted-text"
import { OwnerPhoto } from "./owner-photo"
import { useLanguage } from "@/lib/language-context"
import { siteConfig } from "@/lib/site-data"

export function Philosophy() {
  const { t } = useLanguage()
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const features = [
    {
      title: t("about.f1.title"),
      desc: t("about.f1.desc"),
    },
    {
      title: t("about.f2.title"),
      desc: t("about.f2.desc"),
    },
    {
      title: t("about.f3.title"),
      desc: t("about.f3.desc"),
    },
    {
      title: t("about.f4.title"),
      desc: t("about.f4.desc"),
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.25 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column with Owner Photo & Quick CTAs */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              {t("about.label")}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.15] tracking-tight mb-6 text-balance">
              {t("about.title1")}
              <br />
              <HighlightedText>{t("about.title2")}</HighlightedText>
            </h2>

            {/* Protected Owner Photo of Samarjit Sharma */}
            <div className="my-8 max-w-sm">
              <OwnerPhoto className="aspect-[3/4]" />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4 text-[rgb(251,146,60)]" />
                <span>{t("about.call")} {siteConfig.phoneDisplay}</span>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[rgb(251,146,60)] transition-colors px-4 py-3"
              >
                <span>{t("about.readStory")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Mission & Features */}
          <div className="space-y-8 lg:pt-8">
            {/* Samarjit Sharma's direct message card */}
            <div className="p-7 rounded-2xl bg-secondary/50 border border-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider uppercase text-[rgb(251,146,60)]">
                  {t("about.founderMsg")}
                </span>
                <span className="text-xs text-muted-foreground font-mono">Burdwan-713101</span>
              </div>
              <h3 className="text-xl font-medium text-foreground">
                {t("about.greeting")}
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-normal">
                {t("about.founderText")}
              </p>
            </div>

            {features.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex gap-5">
                  <span className="text-muted-foreground/60 text-sm font-mono mt-1">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
