import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactView } from "@/components/contact-view"

export const metadata: Metadata = {
  title: "Contact Us & Location — AS Designer Burdwan",
  description:
    "Contact AS Designer in Burdwan, West Bengal. Call +919874306034 or visit Badsahi Road Sharma Para for interior design consultations.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ContactView />
      <Footer />
    </div>
  )
}
