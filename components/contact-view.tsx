"use client"

import { useLanguage } from "@/lib/language-context"
import { ServiceSidebar } from "@/components/service-sidebar"
import { BookingForm } from "@/components/booking-form"
import { siteConfig } from "@/lib/site-data"
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react"

export function ContactView() {
  const { lang } = useLanguage()
  const isBn = lang === "bn"

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-[rgb(251,146,60)] font-semibold mb-3 block">
              {isBn ? "যোগাযোগ করুন" : "Get in Touch"}
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
              {isBn ? "যোগাযোগ ও ঠিকানা" : "Contact & Location"}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              {isBn
                ? "আমরা পূর্ব বর্ধমানের সর্বত্র সেবাদানে প্রস্তুত। সরাসরি কল করুন, হোয়াটসঅ্যাপে বার্তা পাঠান অথবা আমাদের বাদশাহী রোড শর্মা পাড়ার অফিসে আসুন।"
                : "We are readily available across Purba Burdwan. Call, message on WhatsApp, or visit our office on Badsahi Road Sharma Para."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid + Sidebar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 space-y-12">
              {/* Contact Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-[rgb(251,146,60)] mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">
                    {isBn ? "ফোন নম্বর" : "Phone Number"}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {isBn ? "তাত্ক্ষণিক বুকিংয়ের জন্য সরাসরি কল করুন" : "Call directly for instant bookings"}
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneInternational}`}
                    className="text-lg font-semibold text-foreground hover:text-[rgb(251,146,60)] transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-[#25D366] mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">
                    {isBn ? "হোয়াটসঅ্যাপ চ্যাট" : "WhatsApp Chat"}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {isBn ? "আমাদের বর্ধমান ডিজাইনারের সাথে চ্যাট করুন" : "Chat with our Burdwan designer"}
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20AS%20Designer,%20I%20would%20like%20to%20discuss%20an%20interior%20design%20project.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-[#25D366] hover:underline"
                  >
                    +91 {siteConfig.phone}
                  </a>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-[rgb(251,146,60)] mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">
                    {isBn ? "অফিসের ঠিকানা" : "Location"}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {isBn ? "অফিস ও স্টুডিও ঠিকানা" : "Office & Studio Address"}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {isBn ? siteConfig.locationBn : siteConfig.location}
                  </p>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-[rgb(251,146,60)] mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">
                    {isBn ? "সময়সূচী" : "Office Hours"}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {isBn ? "সপ্তাহে ৬ দিন খোলা" : "Available Mon to Sat"}
                  </p>
                  <p className="text-xs text-foreground leading-relaxed">
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
              </div>

              {/* Booking Form */}
              <div>
                <BookingForm
                  serviceTitle="General Contact Request"
                  serviceTitleBn="সাধারণ যোগাযোগ ও পরামর্শ"
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
