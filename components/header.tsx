"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { siteConfig } from "@/lib/site-data"
import { Phone, X } from "lucide-react"

const NAV_ITEMS = [
  { key: "nav.home", href: "/" },
  { key: "nav.services", href: "/services" },
  { key: "nav.projects", href: "/our-projects" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
] as const

export function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isHome = pathname === "/"
  // On inner pages or after scrolling on home, always use the dark capsule pill
  const isFloatingDark = !isHome || scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.setAttribute("data-mobile-menu", "open")
      window.dispatchEvent(new Event("menu-state-change"))
    } else {
      document.body.style.overflow = ""
      document.body.removeAttribute("data-mobile-menu")
      window.dispatchEvent(new Event("menu-state-change"))
    }
    return () => {
      document.body.style.overflow = ""
      document.body.removeAttribute("data-mobile-menu")
      window.dispatchEvent(new Event("menu-state-change"))
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed z-50 transition-all duration-500 ease-out inset-x-0 flex justify-center pointer-events-none",
          mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100",
          isFloatingDark ? "top-3 md:top-4 px-3 sm:px-6" : "top-0 px-0"
        )}
      >
        <nav
          className={cn(
            "transition-all duration-500 ease-out flex items-center justify-between pointer-events-auto",
            isFloatingDark
              ? "w-full max-w-5xl rounded-full bg-primary/95 backdrop-blur-2xl py-2.5 sm:py-3 px-5 sm:px-8 shadow-2xl shadow-black/25 border border-white/20"
              : "w-full bg-transparent py-5 sm:py-6 px-6 sm:px-10 lg:px-14 border-none shadow-none"
          )}
        >
          {/* Logo / Brand Name - Clean unified architectural wordmark without any icon badge */}
          <Link href="/" className="group flex items-center gap-2 relative z-50 py-1">
            <span className="font-semibold tracking-[0.22em] text-base sm:text-lg text-white uppercase transition-colors group-hover:text-[rgb(251,146,60)] font-sans">
              AS DESIGNER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(251,146,60)] transition-transform group-hover:scale-125" />
          </Link>

          {/* Desktop Nav Items - Clean unified links without nested floating pill */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors text-white/80 hover:text-[rgb(251,146,60)]"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <LanguageSwitcher />
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full text-white/85 hover:text-white transition-colors"
              title="Call AS Designer"
            >
              <Phone className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 bg-[rgb(251,146,60)] text-white hover:bg-[rgb(234,130,47)] shadow-sm hover:shadow-md"
            >
              {t("nav.getInTouch")}
            </Link>
          </div>

          {/* Mobile Header Actions (when drawer is closed) */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs border border-white/20"
              aria-label="Call AS Designer"
            >
              <Phone className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
            </a>
            <LanguageSwitcher />
            <button
              className="relative z-50 w-9 h-9 flex items-center justify-center text-white rounded-full bg-white/10 border border-white/15 cursor-pointer"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <div className="w-4 h-3.5 relative flex flex-col justify-between">
                <span className="w-full h-[1.5px] bg-current rounded-full" />
                <span className="w-full h-[1.5px] bg-current rounded-full" />
                <span className="w-full h-[1.5px] bg-current rounded-full" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu - High z-index overlay (z-[100]) completely isolated from header island */}
      <div
        className={cn(
          "fixed inset-0 z-[100] lg:hidden transition-all duration-300",
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMobileMenu}
        />

        {/* Drawer Sheet */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-primary/98 backdrop-blur-2xl text-white",
            "transition-transform duration-300 ease-out",
            "flex flex-col px-6 py-6 overflow-y-auto",
            "shadow-[-20px_0_60px_rgba(0,0,0,0.6)] border-l border-white/15",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Top Bar inside Drawer: Brand + Language Switcher + Close Button */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-[0.2em] text-lg text-white uppercase font-sans">
                AS DESIGNER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[rgb(251,146,60)]" />
            </div>

            <div className="flex items-center gap-2.5">
              <LanguageSwitcher />
              <button
                onClick={closeMobileMenu}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border border-white/15"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="pt-3 pb-4">
            <span className="text-[11px] text-[rgb(251,146,60)] tracking-wider uppercase font-medium block">
              {siteConfig.subtitle}
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-1 my-2">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.href}
                className={cn(
                  "transition-all duration-300 ease-out",
                  mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                )}
                style={{ transitionDelay: mobileMenuOpen ? `${60 + i * 40}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 py-3 text-lg font-light tracking-wide text-white/90 hover:text-[rgb(251,146,60)] transition-colors"
                  onClick={closeMobileMenu}
                >
                  <span className="w-4 h-[1px] bg-white/30" />
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Location & Hours Info */}
          <div className="mt-auto pt-6 border-t border-white/10 text-xs text-white/70 space-y-2.5">
            <div>
              <span className="text-white/40 uppercase tracking-widest block text-[10px]">Purba Burdwan HQ</span>
              <p className="text-white/90 mt-0.5">{siteConfig.location}</p>
            </div>
            <div>
              <span className="text-white/40 uppercase tracking-widest block text-[10px]">Hours</span>
              <p className="text-white/80 mt-0.5">{siteConfig.hoursWeekday}</p>
            </div>
          </div>

          {/* CTA Buttons in Drawer */}
          <div className="pt-6 flex flex-col gap-2.5">
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="inline-flex items-center justify-center gap-2 w-full text-xs font-medium px-5 py-3 rounded-full bg-white text-foreground hover:bg-[rgb(251,146,60)] hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
              <span>Call +91 9874306034</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full text-xs font-semibold px-5 py-3 rounded-full bg-[rgb(251,146,60)] text-white hover:bg-[rgb(234,130,47)] transition-all shadow-sm"
              onClick={closeMobileMenu}
            >
              {t("nav.getInTouch")}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
