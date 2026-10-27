"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  LayoutGrid,
  Bed,
  UtensilsCrossed,
  Sofa,
  Briefcase,
  Layers,
  Bath,
  SunMedium,
  Coffee,
  Store,
  ArrowRight,
} from "lucide-react"
import { HighlightedText } from "./highlighted-text"
import { useLanguage } from "@/lib/language-context"
import { servicesData } from "@/lib/site-data"

const iconMap: Record<string, any> = {
  "false-ceiling": LayoutGrid,
  "bedroom-design": Bed,
  "modular-kitchen": UtensilsCrossed,
  "living-room": Sofa,
  "office-design": Briefcase,
  "wallpaper-design": Layers,
  "bathroom-design": Bath,
  "balcony-design": SunMedium,
  "restaurant-design": Coffee,
  "shop-design": Store,
}

export function Expertise() {
  const { t, lang } = useLanguage()
  const isBn = lang === "bn"
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const bengaliDigits = ["০১", "০২", "০৩", "০৪", "০৫", "০৬", "০৭", "০৮", "০৯", "১০"]

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
      { threshold: 0.15 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            {t("services.label")}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6 text-balance">
            <HighlightedText>{t("services.title1")}</HighlightedText>
            <br />
            {t("services.title2")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.id] || Layers
            const isLivingRoom = service.id === "living-room"
            const displayTitle = isBn && service.titleBn ? service.titleBn : service.title
            const displayDesc = isBn && service.shortDescBn ? service.shortDescBn : service.shortDesc

            return (
              <div
                key={service.id}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`group relative bg-card/60 hover:bg-card border border-border hover:border-[rgb(251,146,60)]/40 rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 flex flex-col justify-between ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${(index % 6) * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:bg-[rgb(251,146,60)] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    {isLivingRoom ? (
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[rgb(251,146,60)]/15 text-[rgb(251,146,60)] border border-[rgb(251,146,60)]/30">
                        {isBn ? "৪০% পর্যন্ত ছাড়" : "Up to 40% Off"}
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground/60 font-mono">
                        {isBn ? bengaliDigits[index] || index + 1 : `0${index + 1}`}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-medium mb-3 group-hover:text-[rgb(251,146,60)] transition-colors">
                    {displayTitle}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {displayDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-foreground hover:text-[rgb(251,146,60)] transition-colors"
                  >
                    <span>{t("services.viewDetails")}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border bg-card hover:bg-secondary text-sm font-medium transition-all shadow-sm"
          >
            <span>{t("services.exploreAll")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
