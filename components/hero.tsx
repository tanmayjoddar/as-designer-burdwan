"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false
            return
          }

          const rect = sectionRef.current.getBoundingClientRect()
          const totalDistance = rect.height - window.innerHeight

          if (totalDistance <= 0) {
            ticking = false
            return
          }

          const currentDistance = -rect.top
          const progress = Math.max(0, Math.min(1, currentDistance / totalDistance))
          setScrollProgress(progress)

          if (contentRef.current) {
            const isMobile = window.innerWidth < 768
            const translateY = progress * (isMobile ? 120 : 200)
            const rotationX = progress * (isMobile ? 35 : 45)
            const scale = 1 - progress * (isMobile ? 0.18 : 0.28)
            contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[135vh] sm:h-[155vh] md:h-[180vh] bg-[#181512]"
    >
      <div className="sticky top-0 h-screen h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#181512]">
        {/* Background Room */}
        <div className="absolute inset-0 z-0 bg-[#181512]">
          <img
            src="/images/hously-background.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 3D Animated Text (between background and foreground island) */}
        <div
          ref={contentRef}
          className="container mx-auto px-4 sm:px-8 md:px-12 relative z-10"
          style={{
            willChange: "transform",
            transform: "translateY(0px)",
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="mb-24 sm:mb-40 md:mb-56 lg:mb-64 text-center">
            <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.3em] uppercase text-white/75 mb-2 sm:mb-3 font-medium">
              {t("hero.label")}
            </p>

            <h1
              ref={titleRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.15] sm:leading-[1.05] lg:leading-[0.9] text-white"
            >
              <span>{t("hero.title1")}</span>
              <br />
              <span className="text-orange-200">{t("hero.title2")}</span>
            </h1>
          </div>
        </div>

        {/* Foreground Kitchen Island Counter */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <img
            src="/images/hously-foreground.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Subtle Scroll Down Prompt (fades out naturally as user scrolls) */}
        <div
          className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-opacity duration-300 flex flex-col items-center gap-1.5"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 3.5),
          }}
        >
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">
            Scroll
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
