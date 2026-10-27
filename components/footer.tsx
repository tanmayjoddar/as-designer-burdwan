"use client"

import Link from "next/link"
import { MapPin, Phone, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { siteConfig, servicesData } from "@/lib/site-data"

export function Footer() {
  const { t, lang } = useLanguage()
  const isBn = lang === "bn"

  return (
    <footer className="bg-primary text-primary-foreground/90 pt-16 md:pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <span className="font-semibold tracking-[0.2em] text-xl text-white uppercase font-sans">
                AS DESIGNER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[rgb(251,146,60)]" />
            </Link>
            <p className="text-xs text-[rgb(251,146,60)] font-medium uppercase tracking-wider mb-3">
              {t("footer.subtitle")}
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              {t("footer.about")}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3.5 mt-6">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[rgb(251,146,60)] hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[rgb(251,146,60)] hover:text-white transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[rgb(251,146,60)] hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[rgb(251,146,60)] hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[rgb(251,146,60)] hover:text-white transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[rgb(251,146,60)] transition-colors line-clamp-1"
                  >
                    {isBn && service.titleBn ? service.titleBn : service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs text-[rgb(251,146,60)] hover:underline font-medium inline-block pt-1"
                >
                  {t("footer.viewAllServices")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Pages */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              {t("footer.pages")}
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75">
              <li>
                <Link href="/" className="hover:text-[rgb(251,146,60)] transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[rgb(251,146,60)] transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/our-projects" className="hover:text-[rgb(251,146,60)] transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[rgb(251,146,60)] transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[rgb(251,146,60)] transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Find Us & Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              {t("footer.findUs")}
            </h4>
            <div className="space-y-3.5 text-sm text-primary-foreground/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[rgb(251,146,60)] flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {isBn ? siteConfig.locationBn : siteConfig.location}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[rgb(251,146,60)] flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneInternational}`}
                  className="text-xs hover:text-white transition-colors font-medium"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[rgb(251,146,60)] flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p>{t("footer.hours")}</p>
                  <p className="text-white/50 text-[11px] mt-0.5">{t("footer.hoursSun")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags bar */}
        <div className="pt-8 pb-8 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs text-white/50 uppercase tracking-widest mr-2 font-medium">
            {isBn ? "ট্যাগসমূহ:" : "Tags:"}
          </span>
          {(isBn && siteConfig.tagsBn ? siteConfig.tagsBn : siteConfig.tags).map((tag) => (
            <Link
              key={tag}
              href="/services"
              className="text-xs bg-white/5 hover:bg-white/15 text-white/80 px-3 py-1 rounded-full border border-white/10 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60 text-center md:text-left">
          <p>© 2026 {siteConfig.name}. {t("footer.rights")}</p>
          <p className="text-white/40">
            {isBn ? "বর্ধমান, পশ্চিমবঙ্গ • ৭১৩১০১" : "Burdwan, West Bengal · 713101"}
          </p>
        </div>
      </div>
    </footer>
  )
}
