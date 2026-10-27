import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Expertise } from "@/components/expertise"
import { Projects } from "@/components/projects"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero section untouched as requested */}
      <Hero />
      <Philosophy />
      <Expertise />
      <Projects />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}
