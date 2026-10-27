"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ServiceSidebar } from "@/components/service-sidebar"
import { BookingForm } from "@/components/booking-form"
import { OwnerPhoto } from "@/components/owner-photo"
import { siteConfig, servicesData } from "@/lib/site-data"
import { Phone, CheckCircle2, Award, ShieldCheck, Users } from "lucide-react"

export function AboutView() {
  const { lang } = useLanguage()
  const isBn = lang === "bn"

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-[rgb(251,146,60)] font-semibold mb-3 block">
              {isBn ? "এএস ডিজাইনার বর্ধমান সম্পর্কে" : "About AS Designer Burdwan"}
            </span>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-balance">
              {isBn ? "‘এএস ডিজাইনার বর্ধমান’" : "‘AS DESIGNER BURDWAN’"}
            </h1>
            <p className="text-xl md:text-2xl text-[rgb(251,146,60)] font-light mb-6">
              {isBn ? "সেরা মানের ইন্টেরিয়র ডিজাইন সমাধান" : siteConfig.subtitle}
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              {isBn ? siteConfig.aboutShortBn : siteConfig.aboutShort}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 space-y-12">
              {/* Owner Profile Section: Samarjit Sharma */}
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Protected Photo Column */}
                  <div className="md:col-span-5">
                    <OwnerPhoto className="aspect-[3/4] w-full" />
                  </div>

                  {/* Owner Bio Column */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-[rgb(251,146,60)]/15 text-[rgb(251,146,60)] text-xs font-semibold uppercase tracking-wider">
                      {isBn ? "আমার সম্পর্কে কিছু তথ্য" : "Some Information About Me"}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                      {isBn ? "নমস্কার বন্ধুরা, আমি সমরজিৎ শর্মা।" : "Hi friends, I am Samarjit Sharma."}
                    </h2>

                    <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {isBn ? (
                        <>
                          <p>
                            আমি <strong className="text-foreground">বাদশাহী রোড শর্মা পাড়া, বর্ধমান-৭১৩১০১</strong>-এর বাসিন্দা। বিগত <strong className="text-foreground">৪ বছর</strong> ধরে আমি নিষ্ঠার সাথে ইন্টেরিয়র ডিজাইনিং পেশায় যুক্ত।
                          </p>
                          <p>
                            পূর্ব বর্ধমান জুড়ে আমি বহু আবাসিক বাড়ি, ফ্ল্যাট ও বাণিজ্যিক অফিসের ইন্টেরিয়র কাজ সম্পন্ন করেছি। বাড়ি, অফিস, রুম কিংবা ফলস সিলিং ডিজাইনের জন্য স্ক্রিনের নিচে ডানদিকের ফোন কল অথবা হোয়াটসঅ্যাপের মাধ্যমে সরাসরি আমার সাথে যোগাযোগ করতে পারেন।
                          </p>
                          <p className="text-foreground font-medium pt-1">
                            আপনার মনে কোনো প্রশ্ন থাকলে বা সাইট ভিজিটের জন্য নিচের ফর্মটি পূরণ করে সরাসরি বার্তা পাঠান!
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            I am based in <strong className="text-foreground">Badsahi Road Sharma Para, Burdwan (713101)</strong>.
                            Over the <strong className="text-foreground">past 4+ years</strong>, I have specialized in residential and commercial interior design.
                          </p>
                          <p>
                            I have successfully completed numerous interior projects across Purba Burdwan.
                            Whether you need interior design for your <strong className="text-foreground">Home, Office, Bedroom, or False Ceiling</strong>,
                            feel free to contact me directly via phone call or WhatsApp at the bottom right.
                          </p>
                          <p className="text-foreground font-medium pt-1">
                            Have questions or need an on-site consultation? Fill out the form below to book an appointment!
                          </p>
                        </>
                      )}
                    </div>

                    <div className="pt-3 flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Samarjit%20Sharma!%20I%20would%20like%20to%20consult%20regarding%20interior%20design%20in%20Burdwan.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 bg-foreground text-background hover:bg-foreground/90 px-6 py-3 rounded-full text-xs font-medium tracking-wide transition-all shadow-md group"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[rgb(251,146,60)] transition-transform group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span>{isBn ? "সরাসরি সমরজিতের সাথে চ্যাট করুন" : "WhatsApp Samarjit Directly"}</span>
                      </a>
                      <a
                        href={`tel:${siteConfig.phoneInternational}`}
                        className="inline-flex items-center gap-2 bg-secondary/80 hover:bg-secondary text-foreground px-6 py-3 rounded-full text-xs font-medium tracking-wide transition-all border border-border"
                      >
                        <Phone className="w-3.5 h-3.5 text-[rgb(251,146,60)]" />
                        <span>{isBn ? "কল করুন +৯১ ৯৮৭৪৩০৬০৩৪" : "Call +91 9874306034"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Turnkey Company Overview */}
              <div className="space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed">
                <h3 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight">
                  {isBn
                    ? "টার্নকি বাণিজ্যিক ও আবাসিক ইন্টেরিয়র সমাধান"
                    : "Turnkey Commercial & Residential Interior Solutions"}
                </h3>
                {isBn ? (
                  <>
                    <p>
                      ‘এএস ডিজাইনার’ একটি বিশ্বস্ত টার্নকি ইন্টেরিয়র ফার্ম — যা ঘরবাড়ি ও কর্মস্থলের জন্য মানানসই ফার্নিচার ও আধুনিক ইন্টেরিয়র নকশায় অভিজ্ঞ। আমরা এমন ঘর তৈরি করি যেখানে আভিজাত্য, স্থায়িত্ব এবং ব্যবহারিক স্বাচ্ছন্দ্যের অপূর্ব সমন্বয় ঘটে।
                    </p>
                    <p>
                      টার্নকি ইন্টেরিয়র প্রজেক্টের নির্ভরযোগ্য অংশীদার হিসেবে আমরা মেটেরিয়াল নির্বাচন, নিখুঁত কাঠমিস্ত্রির কাজ, ফলস সিলিং ও ব্রান্ডেড হার্ডওয়্যার ইনস্টলেশন এক ছাদের নিচে পরিচালনা করি।
                    </p>
                    <p>
                      পরিকল্পনা থেকে সমাপ্তি — প্রতিটি ধাপে বাজেট ও সময়ের মধ্যে আধুনিক ইন্টেরিয়র বাস্তবায়নে আমরা বদ্ধপরিকর। আপনার স্বপ্নের ঘর সাজাতে আজই আমাদের সাথে যোগাযোগ করুন।
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      ‘AS DESIGNER’ is a trusted turnkey interior design firm specializing in residential upgrades and customized office interior solutions. We create balanced spaces that seamlessly combine ergonomic, functional, and aesthetic elements for comfortable living and productive work environments.
                    </p>
                    <p>
                      As a single-source partner for turnkey interior projects, we take pride in offering premium design, skilled craftsmanship, durable materials, and precision installation.
                    </p>
                    <p>
                      From initial concept to final handover, we work closely with homeowners and office managers to meet tight deadlines, respect budget limits, and satisfy discerning tastes. Let our expertise transform your space.
                    </p>
                  </>
                )}
              </div>

              {/* Services We Provide Grid */}
              <div className="bg-secondary/40 border border-border rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-medium tracking-tight mb-5 text-foreground">
                  {isBn ? "আমরা যেসব কাজ করে থাকি:" : "Services We Provide:"}
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/70 hover:border-[rgb(251,146,60)]/50 transition-colors group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[rgb(251,146,60)] flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground group-hover:text-[rgb(251,146,60)] transition-colors">
                        {isBn && s.titleBn ? s.titleBn : s.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pillars */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Award className="w-8 h-8 text-[rgb(251,146,60)] mb-3" />
                  <h4 className="text-base font-medium mb-1">
                    {isBn ? "৪+ বছরের অভিজ্ঞতা" : "4+ Years Experience"}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isBn
                      ? "বর্ধমান জুড়ে আবাসিক ও বাণিজ্যিক প্রজেক্টে সফল কাজের সুদীর্ঘ অভিজ্ঞতা।"
                      : "Proven track record across residential and commercial properties in Burdwan."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <ShieldCheck className="w-8 h-8 text-[rgb(251,146,60)] mb-3" />
                  <h4 className="text-base font-medium mb-1">
                    {isBn ? "সাধ্যের মধ্যে সঠিক মূল্য" : "Affordable Price"}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isBn
                      ? "কোনো গোপন খরচ বা অতিরিক্ত চার্জ ছাড়াই সেরা উপাদানে সাশ্রয়ী প্যাকেজ।"
                      : "High quality materials without inflated markups or hidden fees."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Users className="w-8 h-8 text-[rgb(251,146,60)] mb-3" />
                  <h4 className="text-base font-medium mb-1">
                    {isBn ? "সরাসরি তত্ত্বাবধান" : "Direct Coordination"}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isBn
                      ? "প্রতিটি কাজে প্রতিষ্ঠাতা সমরজিৎ শর্মার সাথে সরাসরি যোগাযোগ ও নিখুঁত নজরদারি।"
                      : "Direct access to Samarjit Sharma for personalized attention on every project."}
                  </p>
                </div>
              </div>

              {/* Appointment Booking Form */}
              <div className="pt-2">
                <BookingForm
                  serviceTitle="Appointment with Samarjit Sharma"
                  serviceTitleBn="সমরজিৎ শর্মার সাথে অ্যাপয়েন্টমেন্ট বুকিং"
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
