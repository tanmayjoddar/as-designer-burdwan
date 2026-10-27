"use client"

import { useState } from "react"
import { Send, Phone, CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/lib/site-data"
import { useLanguage } from "@/lib/language-context"

interface BookingFormProps {
  serviceTitle?: string
  serviceTitleBn?: string
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function BookingForm({ serviceTitle, serviceTitleBn }: BookingFormProps) {
  const { lang } = useLanguage()
  const isBn = lang === "bn"

  const effectiveTitle = isBn && serviceTitleBn ? serviceTitleBn : serviceTitle

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState(
    effectiveTitle
      ? isBn
        ? `বুকিং অনুসন্ধান: ${effectiveTitle}`
        : `Booking Inquiry: ${effectiveTitle}`
      : ""
  )
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    const fullMessage = [
      "Hello AS Designer! 👋",
      "",
      "📌 *New Booking & Consultation Inquiry*",
      `👤 *Name:* ${name.trim()}`,
      `📧 *Email:* ${email.trim() || "Not provided"}`,
      `🏷️ *Subject / Service:* ${subject.trim() || effectiveTitle || "General Interior Consultation"}`,
      `💬 *Message / Requirements:* ${message.trim() || "I would like to discuss my room design and get a quotation for Purba Burdwan."}`,
      "",
      "📍 *Location:* Purba Burdwan, West Bengal",
      "Please let me know your availability for a site visit.",
    ].join("\n")

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`
    window.open(url, "_blank")
    setSubmitted(true)
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs uppercase tracking-widest text-[rgb(251,146,60)] font-medium">
          {isBn ? "তাৎক্ষণিক প্রাক্কলন ও বুকিং" : "Instant Quotation & Booking"}
        </span>
        <h3 className="text-2xl font-medium tracking-tight mt-1">
          {isBn
            ? "বুকিংয়ের জন্য ফর্মটি পূরণ করে হোয়াটসঅ্যাপ করুন"
            : "Book a Consultation via WhatsApp"}
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          {isBn
            ? "সাইট ভিজিট, নিখুঁত মাপজোখ এবং আধুনিক ৩D ডিজাইনের জন্য আমাদের পূর্ব বর্ধমান টিমের সাথে সরাসরি যোগাযোগ করুন।"
            : "Connect directly with our Purba Burdwan team for quick measurements, pricing, and 3D design consultations."}
        </p>
      </div>

      {submitted ? (
        <div className="py-8 text-center bg-secondary/50 rounded-xl p-6 border border-border">
          <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
          <h4 className="text-lg font-medium">
            {isBn ? "হোয়াটসঅ্যাপ খোলা হয়েছে!" : "WhatsApp Opened!"}
          </h4>
          <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
            {isBn
              ? "আপনার বুকিংয়ের বিবরণ তৈরি করা হয়েছে। ডিজাইনারের সাথে সরাসরি কথা বলতে হোয়াটসঅ্যাপে বার্তাটি পাঠান।"
              : "Your booking details have been prepared. Continue in WhatsApp to chat with our designer directly."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs underline text-muted-foreground hover:text-foreground cursor-pointer"
            >
              {isBn ? "আরেকটি ফর্ম পূরণ করুন" : "Fill another inquiry"}
            </button>
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="text-xs font-medium text-[rgb(251,146,60)] hover:underline inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> {isBn ? "কল করুন" : "Call"} {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
              {isBn ? "আপনার নাম" : "Your name"} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isBn ? "যেমন: রাজ শর্মা" : "e.g. Raj Sharma"}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
              {isBn ? "আপনার ইমেল (ঐচ্ছিক)" : "Your email"}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
              {isBn ? "বিষয়" : "Subject"}
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={
                effectiveTitle
                  ? isBn
                    ? `${effectiveTitle} অনুসন্ধান`
                    : `Inquiry for ${effectiveTitle}`
                  : isBn
                  ? "ইন্টেরিয়র ডিজাইন অনুসন্ধান"
                  : "Interior Design Inquiry"
              }
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
              {isBn ? "আপনার বার্তা (ঐচ্ছিক)" : "Your message (optional)"}
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                isBn
                  ? "আপনার ঘরের মাপ, বাজেট বা পছন্দের ইন্টেরিয়র স্টাইল সম্পর্কে জানান..."
                  : "Tell us about your room size, budget, or preferred styling..."
              }
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-foreground text-background hover:bg-foreground/90 px-6 py-3.5 rounded-full font-medium text-sm transition-all shadow-md cursor-pointer group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[rgb(251,146,60)] transition-transform group-hover:scale-110" />
              <span>{isBn ? "হোয়াটসঅ্যাপে বুকিং করুন" : "Book via WhatsApp"}</span>
            </button>

            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="inline-flex items-center justify-center gap-2 border border-border bg-secondary/80 hover:bg-secondary px-6 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[rgb(251,146,60)]" />
              <span>{isBn ? "এখনই কল করুন" : "Call Now"}</span>
            </a>
          </div>
        </form>
      )}
    </div>
  )
}
