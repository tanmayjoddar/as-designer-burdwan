"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ServiceSidebar } from "@/components/service-sidebar"
import { BookingForm } from "@/components/booking-form"
import { servicesData, siteConfig } from "@/lib/site-data"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function ServicesIndexView() {
  const { lang } = useLanguage()
  const isBn = lang === "bn"

  const bengaliDigits = ["০১", "০২", "০৩", "০৪", "০৫", "০৬", "০৭", "০৮", "০৯", "১০"]

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-[rgb(251,146,60)] font-semibold mb-3 block">
              {isBn ? "পূর্ব বর্ধমানের ইন্টেরিয়র বিশেষজ্ঞ" : "Purba Burdwan Interior Experts"}
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
              {isBn ? "আমাদের কাজ" : "Our Services"}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              {isBn ? siteConfig.aboutShortBn : siteConfig.aboutShort}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid + Sidebar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Services List Column */}
            <div className="lg:col-span-8 space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {servicesData.map((service, index) => {
                  const isLivingRoom = service.id === "living-room"
                  const displayTitle = isBn && service.titleBn ? service.titleBn : service.title
                  const displayDesc = isBn && service.shortDescBn ? service.shortDescBn : service.shortDesc
                  const displayPoints = isBn && service.pointsBn ? service.pointsBn : service.points || []

                  return (
                    <article
                      key={service.id}
                      className="group bg-card border border-border hover:border-[rgb(251,146,60)]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
                    >
                      <div>
                        <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                          <img
                            src={service.image}
                            alt={displayTitle}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {isLivingRoom && (
                            <div className="absolute top-3 left-3 bg-[rgb(251,146,60)] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                              {isBn ? "৪০% পর্যন্ত ছাড়" : "Up to 40% Off"}
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <span className="text-xs text-muted-foreground/60 font-mono block mb-1">
                            {isBn ? `কাজ ${bengaliDigits[index] || index + 1}` : `Service 0${index + 1}`}
                          </span>
                          <h2 className="text-xl font-medium mb-3 group-hover:text-[rgb(251,146,60)] transition-colors">
                            <Link href={`/services/${service.slug}`}>{displayTitle}</Link>
                          </h2>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                            {displayDesc}
                          </p>

                          {displayPoints.length > 0 && (
                            <ul className="space-y-1.5 text-xs text-muted-foreground mb-4">
                              {displayPoints.slice(0, 2).map((pt, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[rgb(251,146,60)] flex-shrink-0 mt-0.5" />
                                  <span className="line-clamp-1">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-2 border-t border-border/50">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-[rgb(251,146,60)] transition-colors"
                        >
                          <span>{isBn ? "বিস্তারিত বিবরণ ও মূল্য দেখুন" : "View Full Details & Pricing"}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>

              {/* Consultation banner */}
              <div className="mt-12">
                <BookingForm
                  serviceTitle="All Services Consultation"
                  serviceTitleBn="ইন্টেরিয়র কাজ ও পরামর্শ"
                />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <ServiceSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
