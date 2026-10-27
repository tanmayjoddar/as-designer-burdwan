"use client"

import { Phone } from "lucide-react"
import { HighlightedText } from "./highlighted-text"
import { ScheduleCall } from "./schedule-call"
import { useLanguage } from "@/lib/language-context"
import { siteConfig } from "@/lib/site-data"

export function CallToAction() {
  const { t, lang } = useLanguage()
  const isBn = lang === "bn"

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">
            {t("cta.label")}
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight mb-8 text-balance">
            {t("cta.title1")}
            <br />
            <HighlightedText>{t("cta.title2")}</HighlightedText>
          </h2>

          <p className="text-primary-foreground/75 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto font-light">
            {t("cta.desc")}
          </p>

          <p className="text-[rgb(251,146,60)] font-medium text-lg mb-10">
            {t("cta.callNow")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[rgb(251,146,60)] hover:bg-[rgb(234,130,47)] text-white px-8 py-4 text-sm font-medium tracking-wide rounded-full transition-all duration-300 shadow-lg shadow-[rgb(251,146,60)]/20"
            >
              <Phone className="w-4 h-4" />
              <span>{t("cta.btnCall")}</span>
            </a>
            <ScheduleCall />
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-xs text-primary-foreground/60 flex flex-wrap justify-center items-center gap-6">
            <span>{isBn ? siteConfig.locationBn : siteConfig.location}</span>
            <span>•</span>
            <span>{isBn ? "সময়সূচী: সকাল ৮:০০ - বিকাল ৫:০০ (সোম থেকে শনি)" : "Hours: Mon - Sat: 8:00am - 5:00pm"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
