"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { BookingForm } from "@/components/booking-form"
import { CommentSection } from "@/components/comment-section"
import { ServiceSidebar } from "@/components/service-sidebar"
import type { ServiceItem } from "@/lib/site-data"
import { siteConfig } from "@/lib/site-data"
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Clock, MapPin } from "lucide-react"

interface ServiceDetailViewProps {
  service: ServiceItem
  prevService: ServiceItem | null
  nextService: ServiceItem | null
  initialComments: Array<{
    id: string
    name: string
    date: string
    comment: string
  }>
}

export function ServiceDetailView({
  service,
  prevService,
  nextService,
  initialComments,
}: ServiceDetailViewProps) {
  const { lang } = useLanguage()
  const isBn = lang === "bn"

  const displayTitle = isBn && service.titleBn ? service.titleBn : service.title
  const displayDesc = isBn && service.shortDescBn ? service.shortDescBn : service.shortDesc
  const displayPoints = isBn && service.pointsBn ? service.pointsBn : service.points || []

  return (
    <>
      {/* Page Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-foreground transition-colors">
                {isBn ? "হোম" : "Home"}
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-foreground transition-colors">
                {isBn ? "আমাদের কাজ" : "Our Service"}
              </Link>
              <span>/</span>
              <span className="text-[rgb(251,146,60)] font-medium">{displayTitle}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
              {displayTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[rgb(251,146,60)]" />
                {isBn ? "পূর্ব বর্ধমান, পশ্চিমবঙ্গ" : "Purba Burdwan, West Bengal"}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[rgb(251,146,60)]" />
                {isBn ? "সোম থেকে শনি: সকাল ৮:০০ – বিকাল ৫:০০" : "Mon to Sat: 8:00 AM – 5:00 PM"}
              </span>
              <span>•</span>
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="font-medium text-[rgb(251,146,60)] hover:underline inline-flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" /> {isBn ? "কল করুন" : "Call"} {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Column */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-md mb-10 bg-muted">
                <img
                  src={service.image}
                  alt={displayTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Special discount badge for Living room */}
              {service.id === "living-room" && (
                <div className="p-5 mb-8 rounded-2xl bg-[rgb(251,146,60)]/10 border border-[rgb(251,146,60)]/30 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[rgb(251,146,60)] font-bold block">
                      {isBn ? "সীমিত সময়ের অফার" : "Limited Time Offer"}
                    </span>
                    <h3 className="text-xl font-medium mt-0.5">
                      {isBn
                        ? "লিভিং রুম ডিজাইনে – নির্বাচিত আইটেমে ৪০% পর্যন্ত ছাড়"
                        : "For Living Room – Up to 40% off Select Items"}
                    </h3>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20AS%20Designer,%20I%20want%20to%20avail%20the%20Up%20to%2040%25%20off%20living%20room%20offer.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[rgb(251,146,60)] text-white text-xs font-semibold hover:bg-[rgb(234,130,47)] transition-all shadow-sm"
                  >
                    {isBn ? "৪০% ছাড়ের অফার নিন" : "Claim 40% Off Offer"}
                  </a>
                </div>
              )}

              {/* Service Detailed Content matching user text */}
              <div className="prose prose-neutral max-w-none space-y-6 text-foreground/85 leading-relaxed text-base md:text-lg">
                <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
                  {displayDesc}
                </p>

                {/* Specific writeup by service type */}
                {service.id === "false-ceiling" && (
                  <div className="space-y-5 bg-card/50 p-6 md:p-8 rounded-2xl border border-border my-8">
                    {isBn ? (
                      <>
                        <p>
                          উন্নত মানের মেটাল ফ্রেমের সেন্ট-গোবেন জিপসাম ফলস সিলিং অত্যন্ত দীর্ঘস্থায়ী ও টেকসই। যেহেতু জিপসাম বোর্ডগুলো কারখানায় আধুনিক প্রযুক্তিতে নিখুঁতভাবে তৈরি হয়, তাই ডিজাইনের সমতা ও ফিনিশিং পুরোপুরি বজায় থাকে — যা যেকোনো ফলস সিলিং ডিজাইনের জন্য সেরা উপাদান।
                        </p>
                        <p>
                          ফলস সিলিং মূলত ঘরের খোলা তার লুকানো, শব্দ নিরোধক, অগ্নি নিরাপত্তা, বিদ্যুৎ সাশ্রয় এবং আর্দ্রতা ও ঝুলে পড়া প্রতিরোধে অপরিহার্য। পূর্বে ফলস সিলিং কেবল সাধারণ কাজেই ব্যবহৃত হতো, কিন্তু বর্তমানে এটি গৃহসজ্জার অন্যতম প্রধান নান্দনিক অংশ হয়ে উঠেছে।
                        </p>
                        <blockquote className="border-l-4 border-[rgb(251,146,60)] pl-4 italic text-muted-foreground my-4 text-sm md:text-base">
                          “প্রখ্যাত আর্কিটেক্টদের মতে, আবাসিক ভবনে ফলস সিলিং ব্যবহারে অতিরিক্ত অপ্রয়োজনীয় জটিলতা পরিহার করা উচিত। এর ফলে সিলিং ও ছাদের মধ্যবর্তী ফাঁকা স্থান পরিষ্কার রাখা সহজ হয় এবং কোনো ধরনের ফাটল বা লিকেজের ঝুঁকি থাকে না।”
                        </blockquote>
                        <p>
                          পূর্ব বর্ধমানে এএস ডিজাইনারের সার্টিফায়েড কারিগর টিম প্রতিটি ফলস সিলিংয়ে বিশেষ সার্ভিস ট্র্যাপডোর, মজবুত স্ট্রাকচারাল অ্যাঙ্করিং এবং আর্দ্রতারোধী জিপসাম বোর্ড ব্যবহার করে — যাতে কোনো নিরাপত্তার আপস ছাড়াই আপনি উপভোগ করেন বিলাসবহুল ওয়ার্ম কোভ লাইটিং ও আরামদায়ক ঘর।
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          With good quality metal frames, gypsum ceilings by Saint Gobain are quite durable.
                          Since gypsum boards are made with precision in factories, the consistency in design
                          is maintained which makes it the ideal material for best false ceiling designs.
                        </p>
                        <p>
                          False ceilings are essentially used for concealing wires, sound proofing, fire safety,
                          energy efficiency and to help in moisture and sag resistance. Earlier, false ceilings
                          were usually made of gypsum boards, but these days, it is easy to have false ceilings
                          that are not only functional, but also decorative.
                        </p>
                        <blockquote className="border-l-4 border-[rgb(251,146,60)] pl-4 italic text-muted-foreground my-4 text-sm md:text-base">
                          “In fact, senior architect Dikshu Kukreja says ‘reckless use’ of false ceilings in
                          residential buildings should be avoided. Apart from safety issues, it becomes difficult
                          to clean the area between the roof and the false ceiling. … Also, there is no way to
                          check for leaks or cracks in the ceiling.”
                        </blockquote>
                        <p>
                          At AS Designer, our certified installation team in Burdwan ensures dedicated service trapdoors,
                          structural safety anchorings, and moisture-resistant gypsum boards so you enjoy luxurious
                          cove lighting and thermal comfort without safety compromises.
                        </p>
                      </>
                    )}
                  </div>
                )}

                {service.id === "bedroom-design" && (
                  <div className="space-y-5 bg-card/50 p-6 md:p-8 rounded-2xl border border-border my-8">
                    {isBn ? (
                      <>
                        <p>
                          যদিও বেডরুম বাড়ির এমন একটি ব্যক্তিগত স্থান যা পরিবারের বাইরের মানুষের চোখে কম পড়ে, তবুও এটি হওয়া উচিত একটি আভিজাত্যময় ও প্রশান্তির শান্তির নীড়। আপনি ঐতিহ্যবাহী রূপ চান বা আধুনিক আরামদায়ক পরিবেশ, আপনার পছন্দের বেডরুম সাজাতে আমরা নিখুঁত পরিকল্পনা প্রদান করি।
                        </p>
                        <p>
                          সবচেয়ে দারুণ ব্যাপার হলো, পুরো ঘর ভেঙে নতুন করার প্রয়োজন পড়ে না। সুন্দর মার্জিত হেডবোর্ড, পরিশীলিত ওয়ালপেপার, সঠিক রঙের সমন্বয় এবং নরম আলোর ছোঁয়াতেই যেকোনো সাধারণ বেডরুম অসাধারণ হয়ে ওঠে।
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Even though the bedroom is a private space that will be seen by far fewer people than
                          your living room or kitchen, it should be an equally stylish sanctuary. Whether you
                          want a traditional design or an exotic retreat, you’ll find bedroom decorating ideas
                          to create the room of your dreams in this collection of spaces from the archives of
                          Architectural Digest.
                        </p>
                        <p>
                          Best of all, you don’t need a complete remodel to bring new life to your bedroom.
                          As these rooms prove, some well-placed art, bold wallpaper, or even a fresh coat of
                          paint can make a space stand out.
                        </p>
                      </>
                    )}
                  </div>
                )}

                {service.id === "modular-kitchen" && (
                  <div className="space-y-5 bg-card/50 p-6 md:p-8 rounded-2xl border border-border my-8">
                    {isBn ? (
                      <>
                        <p>
                          একটি মডুলার কিচেন হলো রান্নাঘর সাজানোর আধুনিক ও সুবিধাজনক পদ্ধতি, যেখানে বিভিন্ন কাজের জন্য আলাদা মডিউল বা ক্যাবিনেট নির্বাচন করা যায়। রান্নাঘরের আয়তন ও উচ্চতা অনুযায়ী বিভিন্ন মাপের মডিউল প্রস্তুত করা হয়।
                        </p>
                        <p>
                          আপনার রান্নাঘর এল-আকৃতির হোক, সমান্তরাল হোক বা ছোট গ্যালি কিচেন — বর্ধমানে আমাদের প্রতিটি মডুলার ক্যাবিনেট চামচ, ভারী রান্নার পাত্র, তেলের বোতল, মশলার জার ও আধুনিক যন্ত্রপাতির জন্য প্রতিটি ইঞ্চি জায়গার সঠিক সদ্ব্যবহার নিশ্চিত করে।
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          A modular kitchen is simply a modern and flexible way to design your kitchen, allowing
                          you to choose a variety of cabinets for different functions which come in “modules.”
                          The modules are available in different sizes which can suit various functions depending
                          on which area of the kitchen you would choose to use the module.
                        </p>
                        <p>
                          Whether you have an L-shaped layout, parallel cooking counters, or a straight galley kitchen
                          in Burdwan, our modular units maximize every square inch for cutlery, heavy cookware,
                          bottles, spices, and built-in appliances.
                        </p>
                      </>
                    )}
                  </div>
                )}

                {service.id === "living-room" && (
                  <div className="space-y-5 bg-card/50 p-6 md:p-8 rounded-2xl border border-border my-8">
                    {isBn ? (
                      <p>
                        লিভিং রুম বা ড্রয়িং রুম হলো বাড়ির সবচেয়ে প্রাণবন্ত ও কেন্দ্রীয় স্থান — যেখানে বন্ধুবান্ধবদের আপ্যায়ন, গল্পগুজব, বই পড়া বা পরিবারের সাথে টিভি দেখে অবসর সময় কাটানো হয়। এটি পুরো বাড়ির আভিজাত্য ও রুচির পরিচয় বহন করে।
                      </p>
                    ) : (
                      <p>
                        A living room is a room in a home that’s used for entertaining friends, talking, reading,
                        or watching television. If you’re a couch potato, you most likely spend lots of time in your
                        living room. You can also call a living room a lounge, a sitting room, a front room, or a parlor.
                      </p>
                    )}
                  </div>
                )}

                {service.id === "office-design" && (
                  <div className="space-y-5 bg-card/50 p-6 md:p-8 rounded-2xl border border-border my-8">
                    <h3 className="text-xl font-medium text-foreground">
                      {isBn ? "অফিস সাজানোর প্রয়োজনীয় পরামর্শ" : "Tips for Decorating Your Office"}
                    </h3>
                    {isBn ? (
                      <>
                        <p>
                          কাজের পরিবেশকে সর্বদা পেশাদার ও অপ্রয়োজনীয় বিশৃঙ্খলামুক্ত রাখুন। পরিচ্ছন্ন ও কার্যকরী লেআউট কাজের একাগ্রতা রক্ষা করে।
                        </p>
                        <p>
                          এরগনোমিক চেয়ার ও প্রাকৃতিক আলোর সুষম ব্যবহারের মাধ্যমে কর্মীদের জন্য স্বাস্থ্যকর কর্মপরিবেশ তৈরি করুন। পাশাপাশি প্রবেশদ্বার ও অভ্যর্থনা ডেস্কে উন্নত ডিজাইনের মাধ্যমে গ্রাহক ও অতিথিদের মনে স্থায়ী ইতিবাচক অনুভূতি সৃষ্টি করুন।
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Keep it professional. Don’t go overboard on the really personal items, and make sure
                          to keep work front and centre. … Keep it clean and functional. Don’t clutter up your
                          office space with too much stuff. … Make it healthy. … Make it comfortable.
                        </p>
                        <p>
                          Reflect your office interior design with style. Create comfort with pieces, textures
                          and design. Incorporate office design inspiration. Offer collaboration opportunities
                          through design. Encourage productivity for your employees. Create an unforgettable
                          first impression with your reception space.
                        </p>
                      </>
                    )}
                  </div>
                )}

                {/* Project Showcase Gallery (e.g. False Ceiling Photos from user) */}
                {service.gallery && service.gallery.length > 0 && (
                  <div className="my-10">
                    <h3 className="text-xl font-medium tracking-tight mb-4 text-foreground">
                      {isBn ? "কাজের ফিনিশিং ও কারুকার্য গ্যালারি" : "Craftsmanship & Finish Showcase"}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.gallery.map((imgSrc, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm group bg-muted"
                        >
                          <img
                            src={imgSrc}
                            alt={`${displayTitle} finish ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Points Checklist */}
                {displayPoints.length > 0 && (
                  <div className="mt-8 mb-12">
                    <h3 className="text-xl font-medium tracking-tight mb-5 text-foreground">
                      {isBn
                        ? `আমাদের ${displayTitle}-এ যা যা অন্তর্ভুক্ত`
                        : `What is included in our ${service.title}`}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {displayPoints.map((pt, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/70"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[rgb(251,146,60)] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80 leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Booking Form Component */}
              <div className="mt-12">
                <BookingForm
                  serviceTitle={service.title}
                  serviceTitleBn={service.titleBn}
                />
              </div>

              {/* Post Navigation (Previous / Next) */}
              <div className="mt-12 py-6 border-y border-border flex items-center justify-between text-sm">
                {prevService ? (
                  <Link
                    href={`/services/${prevService.slug}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="line-clamp-1">
                      {isBn ? "পূর্ববর্তী:" : "Previous:"}{" "}
                      {isBn && prevService.titleBn ? prevService.titleBn : prevService.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextService && (
                  <Link
                    href={`/services/${nextService.slug}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group text-right"
                  >
                    <span className="line-clamp-1">
                      {isBn ? "পরবর্তী:" : "Next:"}{" "}
                      {isBn && nextService.titleBn ? nextService.titleBn : nextService.title}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>

              {/* Leave a reply Comment Section */}
              <CommentSection
                postTitle={service.title}
                postTitleBn={service.titleBn}
                initialComments={initialComments}
              />
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
