import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailView } from "@/components/service-detail-view"
import { servicesData, siteConfig } from "@/lib/site-data"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found" }

  return {
    title: `${service.title} in Burdwan — ${siteConfig.name}`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} in Burdwan — ${siteConfig.name}`,
      description: service.shortDesc,
      images: [service.image],
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const serviceIndex = servicesData.findIndex((s) => s.slug === slug)
  if (serviceIndex === -1) notFound()

  const service = servicesData[serviceIndex]
  const prevService = serviceIndex > 0 ? servicesData[serviceIndex - 1] : null
  const nextService = serviceIndex < servicesData.length - 1 ? servicesData[serviceIndex + 1] : null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ServiceDetailView
        service={service}
        prevService={prevService}
        nextService={nextService}
      />
      <Footer />
    </div>
  )
}
