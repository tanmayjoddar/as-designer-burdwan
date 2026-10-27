"use client"

import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"
import { siteConfig } from "@/lib/site-data"
import { useLanguage } from "@/lib/language-context"

function AestheticWhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function FloatingContact() {
  const { lang } = useLanguage()
  const isBn = lang === "bn"
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Arrives smoothly after scrolling down past the initial screen (250px)
      setScrolled(window.scrollY > 250)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    const checkMenu = () => {
      setMenuOpen(document.body.getAttribute("data-mobile-menu") === "open")
    }
    window.addEventListener("menu-state-change", checkMenu)
    checkMenu()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("menu-state-change", checkMenu)
    }
  }, [])

  // Hide completely when mobile menu drawer is open so it NEVER overlaps drawer buttons
  if (menuOpen) return null

  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Samarjit%20Sharma!%20I%20visited%20AS%20Designer%20website%20and%20want%20to%20consult%20regarding%20interior%20design%20in%20Burdwan.`

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Consultation Card */}
      {expanded && (
        <div className="bg-primary/95 text-primary-foreground backdrop-blur-2xl border border-white/15 shadow-2xl rounded-3xl p-5 w-80 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[rgb(251,146,60)] block">
                {isBn ? "সরাসরি পরামর্শ" : "Direct Consultation"}
              </span>
              <h5 className="text-base font-medium text-white">
                {isBn ? "সমরজিৎ শর্মা" : "Samarjit Sharma"}
              </h5>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-white/75 leading-relaxed mb-4">
            {isBn
              ? "বাদশাহী রোড শর্মা পাড়া, বর্ধমান-৭১৩১০১। সাইট ভিজিট ও মাপজোখের জন্য সরাসরি যোগাযোগ।"
              : "Badsahi Road Sharma Para, Burdwan-713101. Direct contact for site measurements and quotes."}
          </p>

          <div className="flex flex-col gap-2.5">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-foreground hover:bg-[rgb(251,146,60)] hover:text-white py-3 px-5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md group"
            >
              <span className="w-6 h-6 rounded-full bg-foreground/10 group-hover:bg-white/20 flex items-center justify-center text-[rgb(251,146,60)] group-hover:text-white transition-colors">
                <AestheticWhatsAppIcon className="w-3.5 h-3.5" />
              </span>
              <span>{isBn ? "হোয়াটসঅ্যাপে কথা বলুন" : "Chat on WhatsApp"}</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2.5 px-5 rounded-full text-xs font-medium transition-all border border-white/15"
            >
              <Phone className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
              <span>{isBn ? "কল করুন +৯১ ৯৮৭৪৩০৬০৩৪" : "Call +91 9874306034"}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Buttons: Initially only WA icon image -> After scroll, Samarjit Online pill arrives */}
      <div className="flex items-center gap-2">
        {scrolled ? (
          /* Arrives after scroll: Full aesthetic pill with Samarjit Online */
          <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-3 duration-500">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 bg-primary/95 hover:bg-primary text-white backdrop-blur-xl py-2 pl-2.5 pr-4 rounded-full shadow-2xl border border-white/15 hover:border-[rgb(251,146,60)]/40 transition-all duration-300 hover:scale-[1.02]"
              aria-label="Chat with Samarjit Sharma on WhatsApp"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[rgb(251,146,60)]/20 text-[rgb(251,146,60)] flex items-center justify-center transition-colors">
                <AestheticWhatsAppIcon className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-medium text-white/95 tracking-wide">
                  {isBn ? "হোয়াটসঅ্যাপে সমরজিৎ" : "WhatsApp Samarjit"}
                </span>
                <span className="text-[9px] text-[rgb(251,146,60)] tracking-wider uppercase font-medium">
                  {isBn ? "অনলাইন • বর্ধমান" : "Online · Burdwan"}
                </span>
              </div>
            </a>

            <button
              onClick={() => setExpanded(!expanded)}
              className="w-10 h-10 rounded-full bg-primary/90 hover:bg-primary text-white shadow-xl flex items-center justify-center hover:scale-105 transition-all border border-white/20 cursor-pointer"
              aria-label="Quick contact menu"
            >
              <Phone className="w-4 h-4 text-[rgb(251,146,60)]" />
            </button>
          </div>
        ) : (
          /* Initially at top: ONLY the clean circular WhatsApp icon button */
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-white backdrop-blur-xl border border-white/20 hover:border-[rgb(251,146,60)]/50 shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group cursor-pointer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <span className="text-[rgb(251,146,60)] group-hover:scale-110 transition-transform">
              <AestheticWhatsAppIcon className="w-5 h-5" />
            </span>
          </a>
        )}
      </div>
    </div>
  )
}
