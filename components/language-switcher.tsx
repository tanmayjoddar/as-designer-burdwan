"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, toggle } = useLanguage()

  return (
    <button
      onClick={toggle}
      className={cn(
        "relative flex items-center h-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/15 group",
        className
      )}
      aria-label={lang === "en" ? "Switch to Bengali" : "Switch to English"}
    >
      <span
        className={cn(
          "absolute inset-y-0 w-1/2 rounded-full bg-white/20 transition-transform duration-300 ease-out",
          lang === "bn" ? "translate-x-full" : "translate-x-0"
        )}
      />
      <span
        className={cn(
          "relative z-10 flex-1 text-center text-xs font-medium px-3 py-1 transition-colors duration-300",
          lang === "en" ? "text-white" : "text-white/50"
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "relative z-10 flex-1 text-center text-xs font-medium px-3 py-1 transition-colors duration-300",
          lang === "bn" ? "text-white" : "text-white/50"
        )}
      >
        বাং
      </span>
    </button>
  )
}
