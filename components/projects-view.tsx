"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ServiceSidebar } from "@/components/service-sidebar"
import { BookingForm } from "@/components/booking-form"
import { ArrowRight } from "lucide-react"

interface ProjectItem {
  id: string
  title: string
  titleBn: string
  category: string
  categoryBn: string
  image: string
  slug: string
  description: string
  descriptionBn: string
}

const allProjects: ProjectItem[] = [
  {
    id: "p0",
    title: "Modern Modular Kitchen & Breakfast Bar Arch",
    titleBn: "মডার্ন মডুলার কিচেন ও ব্রেকফাস্ট বার আর্চ ডিজাইন",
    category: "Modular Kitchen Design",
    categoryBn: "মডুলার কিচেন ডিজাইন",
    image: "/images/asdesigner/modular-kitchen-burdwan.jpg",
    slug: "modular-kitchen",
    description: "Rose-tint acrylic modular cabinets, wooden arch partition entrance, pendant breakfast counter, and integrated chimney layout in Burdwan.",
    descriptionBn: "রোজ-টিন্ট অ্যাক্রিলিক মডুলার ক্যাবিনেট, কাঠের আর্চ পার্টিশন এন্ট্রান্স, পেন্ড্যান্ট লাইট ব্রেকফাস্ট কাউন্টার এবং আধুনিক কিচেন সেটআপ।",
  },
  {
    id: "p1",
    title: "Saint-Gobain Gypsum False Ceiling & Cove Lights",
    titleBn: "সেন্ট-গোবেন জিপসাম ফলস সিলিং ও কোভ লাইটিং",
    category: "False Ceiling Design",
    categoryBn: "ফলস সিলিং ডিজাইন",
    image: "/images/falseSelling/image.png",
    slug: "false-ceiling",
    description: "Multi-layered geometric gypsum ceiling with concealed 3000K warm LED profile lighting and rustic stone wall.",
    descriptionBn: "গোপন ৩০০০K ওয়ার্ম এলইডি প্রোফাইল লাইট ও স্টোন ফিনিশ ব্যাকগ্রাউন্ড সহ মাল্টি-লেয়ার জ্যামিতিক সিলিং।",
  },
  {
    id: "p2",
    title: "Master Bedroom Arch Wardrobe & Vanity Unit",
    titleBn: "মাস্টার বেডরুম আর্চ ওয়ারড্রোব ও ভ্যানিটি ড্রেসিং",
    category: "Bedroom Design",
    categoryBn: "বেডরুম ডিজাইন",
    image: "/images/asdesigner/IMG-20261027-WA0036.jpg",
    slug: "bedroom-design",
    description: "Custom modular wardrobe with arched dual-tone shutters, overhead lofts, and integrated mirror dressing unit.",
    descriptionBn: "ডুয়াল-টোন আর্চ শাটার, ওভারহেড লফ্ট এবং ইন্টিগ্রেটেড ড্রেসিং আয়না সহ কাস্টম মডুলার ওয়ারড্রোব।",
  },
  {
    id: "p3",
    title: "Living Room TV Console & Louver Wall Paneling",
    titleBn: "লিভিং রুম টিভি কনসোল ও লুভার অ্যাকোস্টিক ওয়াল",
    category: "Living Room Design",
    categoryBn: "লিভিং রুম ডিজাইন",
    image: "/images/asdesigner/IMG-20261027-WA0033.jpg",
    slug: "living-room",
    description: "Marble-finish backlit entertainment console, timber fluted slats, display shelving, and linear ceiling profiles.",
    descriptionBn: "মার্বেল ফিনিশ ব্যাকলিট টিভি কনসোল, কাঠের লুভার প্যানেল, ডিসপ্লে শেলফ এবং আধুনিক সিলিং প্রোফাইল।",
  },
  {
    id: "p4",
    title: "Dining Hall & Tree-of-Life Backlit Feature Unit",
    titleBn: "ডাইনিং হল ও ট্রি-অফ-লাইফ ব্যাকলিট ডিসপ্লে",
    category: "Living & Dining Design",
    categoryBn: "লিভিং ও ডাইনিং ডিজাইন",
    image: "/images/asdesigner/IMG-20261027-WA0027.jpg",
    slug: "living-room",
    description: "Dining space design with crystal chandelier, custom illuminated Tree-of-Life partition, and Buddha mural wall art.",
    descriptionBn: "ক্রিস্টাল ঝাড়বাতি, আলোকিত ট্রি-অফ-লাইফ পার্টিশন এবং বুদ্ধ মোটিফ ব্যাকগ্রাউন্ড সহ আধুনিক ডাইনিং হল।",
  },
  {
    id: "p5",
    title: "Custom Mandir Unit & Geometric Wood Entrance Door",
    titleBn: "কাস্টম কাঠের মন্দির ইউনিট ও জ্যামিতিক এন্ট্রান্স ডোর",
    category: "Custom Interior Woodwork",
    categoryBn: "কাস্টম কাঠের ইন্টেরিয়র",
    image: "/images/asdesigner/IMG-20261027-WA0030.jpg",
    slug: "false-ceiling",
    description: "Backlit Om jali prayer mandir with floating storage drawers, vertical linear wall LEDs, and teak veneer doors.",
    descriptionBn: "ব্যাকলিট ওম জালি ডেকোরেশন, ফ্লোটিং ড্রয়ার, উল্লম্ব এলইডি স্ট্রিপ এবং সেগুন ফিনিশ এন্ট্রান্স ডোর।",
  },
  {
    id: "p6",
    title: "Multi-Tier CNC Jali Gypsum False Ceiling",
    titleBn: "মাল্টি-টিয়ার সিএনসি জালি জিপসাম ফলস সিলিং",
    category: "False Ceiling Design",
    categoryBn: "ফলস সিলিং ডিজাইন",
    image: "/images/falseSelling/4be29d7a-a486-425d-bf21-b56fa5bc6b16.jpg",
    slug: "false-ceiling",
    description: "Layered false ceiling with laser-cut CNC jali panels, dark wooden cross rafters, and dual-tone ambient LED coves.",
    descriptionBn: "লেজার-কাট সিএনসি জালি প্যানেল, কাঠের নকশা এবং ডুয়াল-টোন অ্যাম্বিয়েন্ট এলইডি কোভ সমন্বিত ফলস সিলিং।",
  },
]

export function ProjectsView() {
  const { lang } = useLanguage()
  const isBn = lang === "bn"

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-[rgb(251,146,60)] font-semibold mb-3 block">
              {isBn ? "সাম্প্রতিক কাজ • পূর্ব বর্ধমান" : "Recent Work in Burdwan"}
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
              {isBn ? "আমাদের প্রজেক্ট" : "Our Projects"}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              {isBn
                ? "পূর্ব বর্ধমান জুড়ে এএস ডিজাইনার দ্বারা নির্মিত বাড়ি, বেডরুম, রান্নাঘর ও বাণিজ্যিক ইন্টেরিয়রের নির্বাচিত বাস্তব প্রজেক্টের এক ঝলক।"
                : "A curated collection of homes, bedrooms, kitchens, and commercial interiors transformed by AS Designer across Purba Burdwan."}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery + Sidebar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {allProjects.map((p) => {
                  const displayTitle = isBn ? p.titleBn : p.title
                  const displayCategory = isBn ? p.categoryBn : p.category
                  const displayDesc = isBn ? p.descriptionBn : p.description

                  return (
                    <article
                      key={p.id}
                      className="group bg-card border border-border hover:border-[rgb(251,146,60)]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
                    >
                      <div>
                        <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                          <img
                            src={p.image}
                            alt={displayTitle}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full">
                            {displayCategory}
                          </div>
                        </div>

                        <div className="p-6">
                          <h2 className="text-xl font-medium mb-2 group-hover:text-[rgb(251,146,60)] transition-colors leading-snug">
                            <Link href={`/services/${p.slug}`}>{displayTitle}</Link>
                          </h2>
                          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                            {displayDesc}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-2 border-t border-border/50">
                        <Link
                          href={`/services/${p.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-[rgb(251,146,60)] transition-colors"
                        >
                          <span>{isBn ? "কাজের বিবরণ ও মূল্য দেখুন" : "View Service & Pricing"}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>

              {/* Consultation form */}
              <div className="pt-6">
                <BookingForm
                  serviceTitle="Project Portfolio Consultation"
                  serviceTitleBn="প্রজেক্ট পোর্টফোলিও সংক্রান্ত পরামর্শ"
                />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <ServiceSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
