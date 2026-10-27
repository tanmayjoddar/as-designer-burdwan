import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesIndexView } from "@/components/services-index-view"

export const metadata: Metadata = {
  title: "Our Services — AS Designer Burdwan",
  description:
    "Complete Interior Design Services across Purba Burdwan: False Ceiling, Bedroom Design, Modular Kitchen, Living Room, Office Design, and more.",
}

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ServicesIndexView />
      <Footer />
    </div>
  )
}
