"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems = [
    { q: t("faq.q1.q"), a: t("faq.q1.a") },
    { q: t("faq.q2.q"), a: t("faq.q2.a") },
    { q: t("faq.q3.q"), a: t("faq.q3.a") },
    { q: t("faq.q4.q"), a: t("faq.q4.a") },
    { q: t("faq.q5.q"), a: t("faq.q5.a") },
    { q: t("faq.q6.q"), a: t("faq.q6.a") },
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            {t("faq.label")}
          </p>
          <h2 className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-4 text-balance">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground text-base">
            {t("faq.desc")}
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl overflow-hidden bg-card/50 transition-colors"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 sm:p-7 flex items-center justify-between gap-6 text-left group cursor-pointer"
              >
                <span className="text-base sm:text-lg font-medium text-foreground transition-colors group-hover:text-[rgb(251,146,60)]">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    openIndex === index
                      ? "bg-[rgb(251,146,60)] text-white rotate-45"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <Plus className="w-4 h-4" strokeWidth={2} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out px-6 sm:px-7 ${
                  openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
