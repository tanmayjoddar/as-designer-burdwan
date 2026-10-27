"use client"

import { useState, useRef, useEffect } from "react"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  ThumbsUp,
  MapPin,
  MessageSquare,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { googleReviewsData, siteConfig } from "@/lib/site-data"

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  )
}

export function ReviewsCarousel() {
  const { lang } = useLanguage()
  const isBn = lang === "bn"

  const [activeTag, setActiveTag] = useState<string>("all")
  const [likes, setLikes] = useState<Record<string, number>>({})
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const filteredReviews = activeTag === "all"
    ? googleReviewsData
    : googleReviewsData.filter((r) => r.tags.includes(activeTag))

  const handleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const checkScroll = () => {
    if (!carouselRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener("scroll", checkScroll)
  }, [filteredReviews])

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return
    const cardWidth = 340
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  const filters = [
    { key: "all", label: isBn ? "সমস্ত রিভিউ (১৭)" : "All Reviews (17)" },
    { key: "behaviour", label: isBn ? "ভালো ব্যবহার (২)" : "Behaviour (2)" },
    { key: "workmanship", label: isBn ? "কাজের মান (৯)" : "Workmanship (9)" },
    { key: "budget", label: isBn ? "সাশ্রয়ী বাজেট (২)" : "Budget (2)" },
  ]

  const bengaliDigits = (num: string | number) => {
    if (!isBn) return num
    return String(num)
      .replace(/0/g, "০")
      .replace(/1/g, "১")
      .replace(/2/g, "২")
      .replace(/3/g, "৩")
      .replace(/4/g, "৪")
      .replace(/5/g, "৫")
      .replace(/6/g, "৬")
      .replace(/7/g, "৭")
      .replace(/8/g, "৮")
      .replace(/9/g, "৯")
  }

  return (
    <section id="reviews" className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/30 to-background border-t border-border">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs uppercase tracking-widest text-[rgb(251,146,60)] font-semibold mb-3">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>{isBn ? "গুগল রিভিউ ও রেটিং" : "Verified Google Reviews"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight">
              {isBn ? "গ্রাহকদের সন্তুষ্টি ও মতামত" : "Client Reviews & Ratings"}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              {isBn
                ? "পূর্ব বর্ধমান জুড়ে আমাদের ক্লায়েন্টদের গুগল ম্যাপসে দেওয়া আসল মতামত ও ৪.৮ স্টার রেটিং।"
                : "Real feedback and 4.8-star ratings from verified homeowners and office clients on Google Maps."}
            </p>
          </div>

          {/* Navigation Arrows for Carousel */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? "bg-card hover:bg-secondary text-foreground hover:scale-105 shadow-sm"
                  : "bg-muted/30 text-muted-foreground/40 cursor-not-allowed opacity-50"
              }`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? "bg-card hover:bg-secondary text-foreground hover:scale-105 shadow-sm"
                  : "bg-muted/30 text-muted-foreground/40 cursor-not-allowed opacity-50"
              }`}
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Summary Score Card & Filters */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Score box */}
            <div className="lg:col-span-4 flex items-center gap-5 border-b lg:border-b-0 lg:border-r border-border pb-6 lg:pb-0 lg:pr-8">
              <div className="flex flex-col items-center justify-center bg-secondary/80 rounded-2xl p-4 w-28 h-28 border border-border">
                <span className="text-4xl font-bold tracking-tight text-foreground font-mono">
                  {bengaliDigits(siteConfig.rating.score)}
                </span>
                <div className="flex items-center gap-0.5 mt-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-muted-foreground mt-1">out of 5.0</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <GoogleIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Google Rating
                  </span>
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {bengaliDigits(siteConfig.rating.totalReviews)} {isBn ? "টি গুগল রিভিউ" : "Google Reviews"}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {isBn ? "১০০% ভেরিফাইড স্থানীয় ক্লায়েন্ট" : "100% verified local clients in Burdwan"}
                </p>
                <a
                  href={siteConfig.googleReviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[rgb(251,146,60)] hover:underline mt-2.5"
                >
                  <span>{isBn ? "গুগলে রিভিউ লিখুন" : "Write a review"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Rating breakdown bars */}
            <div className="lg:col-span-5 space-y-1.5 border-b lg:border-b-0 lg:border-r border-border pb-6 lg:pb-0 lg:pr-8">
              {[
                { stars: 5, count: 15, pct: "88%" },
                { stars: 4, count: 2, pct: "12%" },
                { stars: 3, count: 0, pct: "0%" },
                { stars: 2, count: 0, pct: "0%" },
                { stars: 1, count: 0, pct: "0%" },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-3 font-mono text-muted-foreground text-right">{bengaliDigits(row.stars)}</span>
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400 -ml-1" />
                  <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-500"
                      style={{ width: row.pct }}
                    />
                  </div>
                  <span className="w-7 text-right font-mono text-muted-foreground/70 text-[11px]">
                    {bengaliDigits(row.count)}
                  </span>
                </div>
              ))}
            </div>

            {/* Write review & map badge */}
            <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[rgb(251,146,60)] hover:bg-[rgb(234,130,47)] text-white text-xs font-semibold transition-all shadow-md group cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                <span>{isBn ? "গুগলে রিভিউ দিন" : "Write a Google Review"}</span>
              </a>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border bg-secondary/80 hover:bg-secondary text-xs font-medium text-foreground transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
                <span>{isBn ? "গুগল ম্যাপে লোকেশন দেখুন" : "View on Google Maps"}</span>
              </a>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="pt-6 mt-6 border-t border-border flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mr-2 flex-shrink-0">
              {isBn ? "ফিল্টার:" : "Filter:"}
            </span>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveTag(f.key)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  activeTag === f.key
                    ? "bg-foreground text-background border-foreground font-semibold shadow-sm"
                    : "bg-secondary/60 hover:bg-secondary border-border text-muted-foreground hover:text-foreground font-medium"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Unique Ultra-Smooth Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent -mx-2 px-2"
          style={{ scrollbarWidth: "thin" }}
        >
          {filteredReviews.map((rev) => {
            const currentLikes = (rev.likes || 0) + (likes[rev.id] || 0)
            const displayText = isBn && rev.textBn ? rev.textBn : rev.text

            return (
              <article
                key={rev.id}
                className="w-[300px] sm:w-[350px] md:w-[380px] flex-shrink-0 snap-start bg-card border border-border hover:border-[rgb(251,146,60)]/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full bg-gradient-to-tr ${rev.color || "from-amber-500 to-orange-600"} text-white flex items-center justify-center font-bold text-sm shadow-md flex-shrink-0`}
                      >
                        {rev.avatarInitial || rev.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-[rgb(251,146,60)] transition-colors leading-snug">
                          {rev.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                          {rev.localGuide && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                              <Star className="w-2.5 h-2.5 fill-current" />
                              Local Guide
                            </span>
                          )}
                          <span className="text-[11px] text-muted-foreground">
                            {rev.reviewsCount || "Reviewer"}
                            {rev.photosCount ? ` · ${rev.photosCount}` : ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    <GoogleIcon className="w-4 h-4 flex-shrink-0 opacity-80" />
                  </div>

                  {/* Stars + Time Ago */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground/80">
                      {isBn ? rev.timeAgoBn : rev.timeAgo}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-foreground/85 leading-relaxed italic line-clamp-4">
                    “{displayText}”
                  </p>
                </div>

                {/* Footer of Card: Like + Verified Badge */}
                <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
                  <button
                    onClick={() => handleLike(rev.id)}
                    className="inline-flex items-center gap-1.5 hover:text-[rgb(251,146,60)] transition-colors cursor-pointer"
                    title="Like this review"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{bengaliDigits(currentLikes)} {isBn ? "পছন্দ" : "Helpful"}</span>
                  </button>

                  <div className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{isBn ? "যাচাইকৃত গুগল রিভিউ" : "Verified Google Review"}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
