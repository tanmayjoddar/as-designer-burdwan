import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsView } from "@/components/projects-view"

export const metadata: Metadata = {
  title: "Our Projects — AS Designer Burdwan",
  description:
    "Explore our completed interior design projects in Purba Burdwan: false ceilings, modular kitchens, bedrooms, and living spaces.",
}

export default function OurProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ProjectsView />
      <Footer />
    </div>
  )
}
