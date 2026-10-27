import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutView } from "@/components/about-view"
import { FloatingContact } from "@/components/floating-contact"

export const metadata: Metadata = {
  title: "About Us — Samarjit Sharma & AS Designer Burdwan",
  description:
    "Meet Samarjit Sharma, Founder of AS Designer Burdwan. 4+ years of professional interior design experience at Badsahi Road Sharma Para.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <AboutView />
      <FloatingContact />
      <Footer />
    </div>
  )
}
