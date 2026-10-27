"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import {
  Star,
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
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const toBnDigits = useCallback((num: string | number) => {
    if (!isBn) return String(num)
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
  }, [isBn])

  const filteredReviews = activeTag === "all"
    ? googleReviewsData
    : googleReviewsData.filter((r) => r.tags.includes(activeTag))

  const handleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  // Smooth continuous auto-sliding animation
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      const el = carouselRef.current
      if (!el) return

      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll <= 0) return

      // Advance by one card width (approx 440-520px depending on screen)
      const scrollStep = el.clientWidth > 768 ? 480 : 340
      
      if (el.scrollLeft >= maxScroll - 30) {
        // Rewind smoothly back to first review
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollBy({ left: scrollStep, behavior: "smooth" })
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused, filteredReviews])

  const filters = [
    { key: "all", label: isBn ? `সমস্ত রিভিউ (${toBnDigits(17)})` : "All Reviews (17)" },
    { key: "behaviour", label: isBn ? `ভালো ব্যবহার (${toBnDigits(2)})` : "Behaviour (2)" },
    { key: "workmanship", label: isBn ? `কাজের মান (${toBnDigits(9)})` : "Workmanship (9)" },
    { key: "budget", label: isBn ? `সাশ্রয়ী বাজেট (${toBnDigits(2)})` : "Budget (2)" },
  ]

  return (
    <section id="reviews" className="py-24 md:py-32 bg-gradient-to-b from-background via-secondary/20 to-background border-t border-border scroll-mt-24">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-xs uppercase tracking-widest text-[rgb(251,146,60)] font-semibold mb-3">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>{isBn ? `গুগল রেটিং ${toBnDigits("৪.৮")} ★ (${toBnDigits(17)} রিভিউ)` : "Verified Google Reviews • 4.8 ★"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight">
              {isBn ? "গ্রাহকদের সন্তুষ্টি ও মতামত" : "Client Reviews & Ratings"}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-2.5 max-w-2xl leading-relaxed">
              {isBn
                ? `পূর্ব বর্ধমান জুড়ে আমাদের ক্লায়েন্টদের গুগল ম্যাপসে দেওয়া আসল মতামত ও ${toBnDigits("৪.৮")} স্টার রেটিং।`
                : "Real feedback and 4.8-star ratings from verified homeowners and office clients in Burdwan."}
            </p>
          </div>
        </div>

        {/* Big Premium Google Score Card */}
        <div className="bg-card border border-border rounded-3xl p-7 sm:p-10 shadow-sm mb-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Score box */}
            <div className="lg:col-span-4 flex items-center gap-6 border-b lg:border-b-0 lg:border-r border-border pb-7 lg:pb-0 lg:pr-8">
              <div className="flex flex-col items-center justify-center bg-secondary/80 rounded-3xl p-5 w-32 h-32 sm:w-36 sm:h-36 border border-border flex-shrink-0 shadow-inner">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                  {toBnDigits("4.8")}
                </span>
                <div className="flex items-center gap-1 mt-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {isBn ? `৫.০ এর মধ্যে` : "out of 5.0"}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <GoogleIcon className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Google Maps Rating
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  {toBnDigits(17)} {isBn ? "টি গুগল রিভিউ" : "Google Reviews"}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {isBn ? "১০০% যাচাইকৃত স্থানীয় ক্লায়েন্ট (পূর্ব বর্ধমান)" : "100% verified local Burdwan clients"}
                </p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[rgb(251,146,60)] hover:underline mt-3"
                >
                  <span>{isBn ? "গুগলে সকল রিভিউ দেখুন" : "View all on Google Maps"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Rating breakdown bars */}
            <div className="lg:col-span-5 space-y-2 border-b lg:border-b-0 lg:border-r border-border pb-7 lg:pb-0 lg:pr-8">
              {[
                { stars: 5, count: 15, pct: "88%" },
                { stars: 4, count: 2, pct: "12%" },
                { stars: 3, count: 0, pct: "0%" },
                { stars: 2, count: 0, pct: "0%" },
                { stars: 1, count: 0, pct: "0%" },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-4 font-semibold text-foreground text-right">{toBnDigits(row.stars)}</span>
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 -ml-1" />
                  <div className="flex-1 h-2.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-500"
                      style={{ width: row.pct }}
                    />
                  </div>
                  <span className="w-8 text-right font-medium text-muted-foreground text-xs">
                    {toBnDigits(row.count)}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[rgb(251,146,60)] hover:bg-[rgb(234,130,47)] text-white text-xs sm:text-sm font-semibold transition-all shadow-md group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>{isBn ? "গুগলে রিভিউ লিখুন" : "Write a Google Review"}</span>
              </a>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-secondary/80 hover:bg-secondary text-xs sm:text-sm font-medium text-foreground transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[rgb(251,146,60)]" />
                <span>{isBn ? "গুগল ম্যাপে লোকেশন" : "View on Google Maps"}</span>
              </a>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="pt-6 mt-6 border-t border-border flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mr-2 flex-shrink-0">
              {isBn ? "ফিল্টার:" : "Filter:"}
            </span>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveTag(f.key)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  activeTag === f.key
                    ? "bg-foreground text-background border-foreground font-semibold shadow-md"
                    : "bg-secondary/60 hover:bg-secondary border-border text-muted-foreground hover:text-foreground font-medium"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Big Prominent Auto-Animated Carousel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent -mx-3 px-3"
          style={{ scrollbarWidth: "thin" }}
        >
          {filteredReviews.map((rev) => {
            const currentLikes = (rev.likes || 0) + (likes[rev.id] || 0)
            const displayText = isBn && rev.textBn ? rev.textBn : rev.text

            return (
              <article
                key={rev.id}
                className="w-[330px] sm:w-[440px] md:w-[490px] lg:w-[520px] min-h-[300px] flex-shrink-0 snap-start bg-card border border-border hover:border-[rgb(251,146,60)]/50 rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group relative"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr ${rev.color || "from-amber-500 to-orange-600"} text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg flex-shrink-0`}
                      >
                        {rev.avatarInitial || rev.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-[rgb(251,146,60)] transition-colors leading-snug">
                          {rev.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          {rev.localGuide && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                              <Star className="w-3 h-3 fill-current" />
                              Local Guide
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {rev.reviewsCount ? rev.reviewsCount.replace(/(\d+)/g, (m) => toBnDigits(m)) : (isBn ? "রিভিউয়ার" : "Reviewer")}
                            {rev.photosCount ? ` · ${rev.photosCount.replace(/(\d+)/g, (m) => toBnDigits(m))}` : ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    <GoogleIcon className="w-5 h-5 flex-shrink-0 opacity-80" />
                  </div>

                  {/* Stars + Time Ago */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {isBn ? rev.timeAgoBn : rev.timeAgo}
                    </span>
                  </div>

                  {/* Review Text - Big, Clear & Readable */}
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed italic">
                    “{displayText}”
                  </p>
                </div>

                {/* Footer of Card: Like + Verified Badge */}
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                  <button
                    onClick={() => handleLike(rev.id)}
                    className="inline-flex items-center gap-1.5 hover:text-[rgb(251,146,60)] transition-colors cursor-pointer"
                    title="Like this review"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{toBnDigits(currentLikes)} {isBn ? "পছন্দ" : "Helpful"}</span>
                  </button>

                  <div className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{isBn ? "যাচাইকৃত গুগল রিভিউ" : "Verified Google Review"}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Clean Auto-sliding Status & Info Under Carousel */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card hover:bg-secondary text-xs text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-xs"
            title={isPaused ? "Play auto-sliding" : "Pause auto-sliding"}
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isPaused ? "bg-amber-400" : "bg-emerald-400"}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isPaused ? "bg-amber-500" : "bg-emerald-500"}`} />
            </span>
            <span className="text-[11px] font-medium">
              {isPaused ? (isBn ? "স্বয়ংক্রিয় স্লাইড বন্ধ (চালু করতে ক্লিক করুন)" : "Auto-sliding Paused (Click to Play)") : (isBn ? "স্বয়ংক্রিয় স্লাইড চালু আছে" : "Auto-sliding Active")}
            </span>
          </button>

          <span className="text-xs text-muted-foreground text-center sm:text-right">
            {isBn
              ? `পূর্ব বর্ধমানে বিশ্বস্ত ইন্টেরিয়র সার্ভিস • কল: ${siteConfig.phoneDisplayBn}`
              : `Purba Burdwan Trusted Interior Service • Call: ${siteConfig.phoneDisplay}`}
          </span>
        </div>
      </div>
    </section>
  )
}
