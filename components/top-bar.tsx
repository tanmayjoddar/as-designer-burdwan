"use client"

import { Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground/80 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Tagline & Socials */}
        <div className="flex items-center gap-4">
          <span className="font-medium tracking-wide text-primary-foreground hidden lg:inline">
            {siteConfig.subtitle}
          </span>
          <div className="flex items-center gap-3 border-l border-white/15 pl-4">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[rgb(251,146,60)] transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-[rgb(251,146,60)] transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[rgb(251,146,60)] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[rgb(251,146,60)] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-[rgb(251,146,60)] transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Phone, Location, Hours */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phoneInternational}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
          <span className="hidden xl:flex items-center gap-1.5 text-primary-foreground/70">
            <MapPin className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
            <span>{siteConfig.location}</span>
          </span>
          <span className="flex items-center gap-1.5 text-primary-foreground/70">
            <Clock className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
            <span>{siteConfig.hoursWeekday}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
