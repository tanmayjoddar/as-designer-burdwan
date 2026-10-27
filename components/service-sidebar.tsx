"use client"

import Link from "next/link"
import { MapPin, Clock, Phone, ArrowRight, Tag, Layers } from "lucide-react"
import { siteConfig, servicesData } from "@/lib/site-data"
import { useLanguage } from "@/lib/language-context"

export function ServiceSidebar() {
  const { lang } = useLanguage()
  const isBn = lang === "bn"

  return (
    <aside className="space-y-8">
      {/* About This Site Widget */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-[rgb(251,146,60)] mb-3">
          {isBn ? "আমাদের সম্পর্কে" : "About This Site"}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {isBn ? siteConfig.aboutShortBn : siteConfig.aboutShort}
        </p>
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {isBn ? "পূর্ব বর্ধমান হেডকোয়ার্টার" : "Purba Burdwan HQ"}
          </span>
          <a
            href={`tel:${siteConfig.phoneInternational}`}
            className="font-medium text-foreground hover:text-[rgb(251,146,60)] transition-colors inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3" /> {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Our Services Widget */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-[rgb(251,146,60)]" />
          <span>{isBn ? "আমাদের কাজ" : "Our Services"}</span>
        </h3>
        <ul className="space-y-2 text-sm">
          {servicesData.map((s) => (
            <li key={s.id}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between py-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  {isBn && s.titleBn ? s.titleBn : s.title}
                </span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[rgb(251,146,60)]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Find Us Widget */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[rgb(251,146,60)]" />
          <span>{isBn ? "আমাদের ঠিকানা" : "Find Us"}</span>
        </h3>
        <div className="space-y-3 text-sm">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-0.5">
              {isBn ? "ঠিকানা" : "Address"}
            </span>
            <p className="font-medium text-foreground">
              {isBn ? siteConfig.locationBn : siteConfig.location}
            </p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-0.5">
              {isBn ? "সময়সূচী" : "Hours"}
            </span>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {isBn ? (
                <>
                  {siteConfig.hoursDetailedBn.weekdays}
                  <br />
                  {siteConfig.hoursDetailedBn.weekends}
                </>
              ) : (
                <>
                  {siteConfig.hoursDetailed.weekdays}
                  <br />
                  {siteConfig.hoursDetailed.weekends}
                </>
              )}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20AS%20Designer,%20I%20would%20like%20to%20visit%20your%20office%20in%20Burdwan.`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-secondary/80 hover:bg-secondary py-2.5 rounded-xl text-xs font-medium text-foreground transition-colors"
            >
              {isBn ? "হোয়াটসঅ্যাপে লোকেশন পান" : "Get Directions / WhatsApp Location"}
            </a>
          </div>
        </div>
      </div>

      {/* Tags Widget */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-3 flex items-center gap-2">
          <Tag className="w-4 h-4 text-[rgb(251,146,60)]" />
          <span>{isBn ? "ট্যাগসমূহ" : "Tags"}</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {(isBn && siteConfig.tagsBn ? siteConfig.tagsBn : siteConfig.tags).map((tag) => (
            <Link
              key={tag}
              href="/services"
              className="text-xs bg-secondary/70 hover:bg-secondary text-foreground/80 px-3 py-1.5 rounded-full border border-border transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
