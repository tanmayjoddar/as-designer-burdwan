"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

export type Lang = "en" | "bn"

interface LangContextValue {
  lang: Lang
  toggle: () => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextValue | null>(null)

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Our Services",
    "nav.projects": "Our Projects",
    "nav.reviews": "Reviews",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getInTouch": "Book Now",

    // Hero
    "hero.label": "Interior Design Studio • Burdwan",
    "hero.title1": "We design spaces",
    "hero.title2": "that elevate living",

    // About / Philosophy
    "about.label": "About AS Designer",
    "about.title1": "Best Quality",
    "about.title2": "Affordable Price",
    "about.call": "Call",
    "about.readStory": "Read Samarjit's story",
    "about.founderMsg": "Message from Founder",
    "about.greeting": "Hi friends, I am Samarjit Sharma.",
    "about.founderText":
      "I am based in Badsahi Road Sharma Para, Burdwan (713101). With over 4 years of dedicated experience in interior design, I have completed numerous residential and commercial projects across Purba Burdwan. If you are interested in interior design for your Home, Office, Bedroom, or False Ceiling, please contact me directly via phone or WhatsApp.",
    "about.f1.title": "Best Quality at Affordable Price",
    "about.f1.desc":
      "We believe exceptional design shouldn't be out of reach. We use genuine Saint-Gobain gypsum, waterproof plywood, and branded hardware at transparent, budget-friendly rates.",
    "about.f2.title": "Comprehensive Interior Design Solutions",
    "about.f2.desc":
      "One trusted team for everything: false ceilings, bedrooms, modular kitchens, living rooms, wallpapers, bathrooms, balconies, restaurants, and shops.",
    "about.f3.title": "Purba Burdwan Neighborhood Focus",
    "about.f3.desc":
      "Based at Badsahi Road Sharma Para, our designers and craftsmen are right here in Burdwan for quick site measurements, dependable supervision, and prompt delivery.",
    "about.f4.title": "Effortless Booking via Phone & WhatsApp",
    "about.f4.desc":
      "No long waiting times or complicated paperwork. Simply call or send us a WhatsApp message at +91 9874306034 to schedule an immediate site consultation.",

    // Services / Expertise
    "services.label": "Our Services",
    "services.title1": "Interior Design",
    "services.title2": "Expert Solutions",
    "services.desc":
      "We provide best quality interior design at an affordable price across Purba Burdwan. Every service is tailored with durable materials and precision execution.",
    "services.viewDetails": "View Details",
    "services.exploreAll": "Explore All Services",
    "services.fc.title": "False Ceiling Design",
    "services.fc.desc": "Durable Saint-Gobain gypsum false ceilings with precision metal framing for ambient lighting.",
    "services.bedroom.title": "Bedroom Design",
    "services.bedroom.desc": "Personal sanctuaries customized with layered bedding, stylish headboards, and ambient lighting.",
    "services.kitchen.title": "Modular Kitchen Design",
    "services.kitchen.desc": "Modern flexible module-based kitchen cabinets allowing customized configurations to fit every workflow.",
    "services.living.title": "Living Room Design",
    "services.living.desc": "The centerpiece of your home. Special limited-time offer: Up to 40% off select items!",
    "services.office.title": "Office Design",
    "services.office.desc": "Professional, clutter-free workspaces designed for health, collaboration, and productivity.",
    "services.wallpaper.title": "Wallpaper Design",
    "services.wallpaper.desc": "Premium textured wallpapers and 3D embossed designs that bring rich texture and personality.",

    // Projects
    "projects.label": "Our Projects",
    "projects.title": "Recent Work in Burdwan",
    "projects.viewAll": "View All Completed Projects",
    "projects.p1.title": "Saint-Gobain Gypsum False Ceiling & Cove Lights",
    "projects.p1.cat": "False Ceiling Design",
    "projects.p2.title": "Master Bedroom Arch Wardrobe & Vanity Unit",
    "projects.p2.cat": "Bedroom Design",
    "projects.p3.title": "Living Room TV Unit & Louver Acoustic Wall",
    "projects.p3.cat": "Living Room Design",
    "projects.p4.title": "Dining Hall & Tree-of-Life Backlit Feature",
    "projects.p4.cat": "Living & Dining Space",

    // FAQ
    "faq.label": "Common Questions",
    "faq.title": "Questions & Answers",
    "faq.desc": "Everything you need to know about our interior design services in Purba Burdwan.",
    "faq.q1.q": "Where are your services available in West Bengal?",
    "faq.q1.a":
      "Our core office and workshop is located at Badsahi Road Sharma Para, Burdwan. We actively provide interior design services across Purba Burdwan and neighboring districts including Katwa, Memari, Kalna, and Durgapur.",
    "faq.q2.q": "How can I book an on-site visit or design consultation?",
    "faq.q2.a":
      "Booking is simple and fast! You can call us directly at +91 9874306034 or tap any WhatsApp button on this site. Our designer will arrange an on-site measurement at your convenience.",
    "faq.q3.q": "Why do you use Saint-Gobain gypsum boards for false ceilings?",
    "faq.q3.a":
      "Saint-Gobain gypsum boards are manufactured with precision in factories, ensuring consistent density and smooth finish. Coupled with heavy-gauge metal frames, they provide excellent durability, fire resistance, sound insulation, and concealed wiring without cracking.",
    "faq.q4.q": "What is the advantage of a modular kitchen over traditional carpentry?",
    "faq.q4.a":
      "A modular kitchen gives you flexible modules tailored to your exact kitchen dimensions. Modules are machine-crafted with water-resistant ply, termite treatment, and soft-close hardware, ensuring long life and easy cleaning compared to traditional carpentry.",
    "faq.q5.q": "What is included in your bedroom decorating service?",
    "faq.q5.a":
      "We curate the complete bedroom experience: layered bedding, stylish custom headboards, plush rugs, blackout curtains, ambient ceiling coves, reading lights, nightstands, storage dressers, and statement mirrors.",
    "faq.q6.q": "Do you design offices, shops, and restaurants?",
    "faq.q6.a":
      "Yes! We specialize in commercial interiors including ergonomic office layouts, collaborative workspaces, reception counters, eye-catching retail shops, and atmospheric dining restaurants.",

    // CTA
    "cta.label": "Purba Burdwan Booking & Inquiry",
    "cta.title1": "Ready to design your",
    "cta.title2": "dream space?",
    "cta.desc":
      "AS Designer is a premier interior design studio in Burdwan. We deliver top-quality residential and commercial interior solutions at an affordable price.",
    "cta.callNow": "To Book a Consultation, Call +91 9874306034",
    "cta.btnCall": "Call +91 9874306034",
    "cta.schedule": "Schedule a Call",

    // Schedule Call
    "schedule.title": "Schedule a Consultation Call",
    "schedule.step1": "Tell us about yourself",
    "schedule.step2": "Pick a time that works",
    "schedule.name": "Your Name",
    "schedule.namePlaceholder": "e.g. Raj Sharma",
    "schedule.date": "Preferred Date",
    "schedule.time": "Preferred Time",
    "schedule.continue": "Continue to Time",
    "schedule.back": "Back",
    "schedule.openWA": "Confirm via WhatsApp",
    "schedule.cancel": "Cancel",

    // Footer
    "footer.subtitle": "Expert Interior Design Solutions",
    "footer.about":
      "AS Designer is a premier interior design studio in Burdwan. We provide top-quality residential and commercial interior solutions at an affordable price across Purba Burdwan. For bookings, call +91 9874306034.",
    "footer.services": "Our Services",
    "footer.viewAllServices": "View All Services →",
    "footer.pages": "Pages",
    "footer.findUs": "Find Us",
    "footer.hours": "8:00am - 5:00pm, Mon to Sat",
    "footer.hoursSun": "Sat & Sun: 11:00am - 3:00pm",
    "footer.rights": "All rights reserved. Purba Burdwan, West Bengal.",
  },

  bn: {
    // Nav
    "nav.home": "হোম",
    "nav.services": "আমাদের কাজ",
    "nav.projects": "আমাদের প্রজেক্ট",
    "nav.reviews": "রিভিউ",
    "nav.about": "আমাদের সম্পর্কে",
    "nav.contact": "যোগাযোগ",
    "nav.getInTouch": "বুকিং করুন",

    // Hero
    "hero.label": "ইন্টেরিয়র ডিজাইন স্টুডিও • বর্ধমান",
    "hero.title1": "আমরা এমন ঘর সাজাই",
    "hero.title2": "যা জীবনকে সুন্দর করে",

    // About / Philosophy
    "about.label": "এএস ডিজাইনার সম্পর্কে",
    "about.title1": "সেরা মান",
    "about.title2": "সাধ্যের মধ্যে সঠিক মূল্য",
    "about.call": "কল করুন",
    "about.readStory": "সমরজিতের গল্প পড়ুন",
    "about.founderMsg": "প্রতিষ্ঠাতার বার্তা",
    "about.greeting": "নমস্কার বন্ধুরা, আমি সমরজিৎ শর্মা।",
    "about.founderText":
      "আমি বাদশাহী রোড শর্মা পাড়া, বর্ধমান-৭১৩১০১ এর বাসিন্দা। বিগত ৪ বছর ধরে আমি নিষ্ঠার সাথে ইন্টেরিয়র ডিজাইনিং করছি এবং বহু আবাসিক ও বাণিজ্যিক প্রজেক্ট সফলভাবে সম্পন্ন করেছি। বাড়ি, অফিস, ঘর বা ফলস সিলিং-এর যেকোনো ইন্টেরিয়র কাজের জন্য সরাসরি কল বা হোয়াটসঅ্যাপ করুন।",
    "about.f1.title": "সুলভ মূল্যে সর্বোচ্চ গুণমান",
    "about.f1.desc":
      "আমরা বিশ্বাস করি অসাধারণ ডিজাইন সবার সাধ্যের মধ্যে থাকা উচিত। আমরা আসল সেন্ট-গোবেন জিপসাম, ওয়াটারপ্রুফ প্লাইউড এবং ব্র্যান্ডেড ফিটিংস সাশ্রয়ী মূল্যে ব্যবহার করি।",
    "about.f2.title": "সম্পূর্ণ ইন্টেরিয়র ডিজাইন সমাধান",
    "about.f2.desc":
      "একটি বিশ্বস্ত টিমেই সব কিছু: ফলস সিলিং, বেডরুম, মডুলার কিচেন, লিভিং রুম, ওয়ালপেপার, বাথরুম, বারান্দা, রেস্তোরাঁ ও শপ ইন্টেরিয়র।",
    "about.f3.title": "পূর্ব বর্ধমান জুড়ে স্থানীয় কাজ",
    "about.f3.desc":
      "বাদশাহী রোড শর্মা পাড়ায় আমাদের অফিস। বর্ধমানের সর্বত্র দ্রুত সাইট মেজারমেন্ট, দায়িত্বশীল তত্ত্বাবধান ও সঠিক সময়ে ডেলিভারি দিই।",
    "about.f4.title": "ফোন ও হোয়াটসঅ্যাপে সহজ বুকিং",
    "about.f4.desc":
      "কোনো দীর্ঘ অপেক্ষা বা জটিল প্রক্রিয়া নেই। তাৎক্ষণিক সাইট পরিদর্শনের জন্য সরাসরি কল বা হোয়াটসঅ্যাপ করুন +৯১ ৯৮৭৪৩০৬০৩৪ নম্বরে।",

    // Services / Expertise
    "services.label": "আমাদের কাজ",
    "services.title1": "সেরা ইন্টেরিয়র",
    "services.title2": "ডিজাইন সমাধান",
    "services.desc":
      "পূর্ব বর্ধমান জুড়ে আমরা সুলভ মূল্যে সর্বোচ্চ মানের ইন্টেরিয়র ডিজাইন কাজ প্রদান করি। প্রতিটি কাজে টেকসই সামগ্রী ও নিখুঁত ফিনিশিং নিশ্চিত করা হয়।",
    "services.viewDetails": "বিস্তারিত দেখুন",
    "services.exploreAll": "আমাদের সমস্ত কাজ দেখুন",
    "services.fc.title": "ফলস সিলিং ডিজাইন",
    "services.fc.desc": "সেন্ট-গোবেন জিপসাম ও হেভি মেটাল ফ্রেম দিয়ে তৈরি টেকসই ফলস সিলিং এবং আধুনিক কোভ লাইটিং।",
    "services.bedroom.title": "বেডরুম ডিজাইন",
    "services.bedroom.desc": "লেয়ার্ড বেডিং, স্টাইলিশ হেডবোর্ড এবং শান্ত আলোর সমন্বয়ে তৈরি আপনার ব্যক্তিগত শান্তির নীড়।",
    "services.kitchen.title": "মডুলার কিচেন ডিজাইন",
    "services.kitchen.desc": "আধুনিক মডিউল-ভিত্তিক রান্নাঘর ক্যাবিনেট যা আপনার রান্নার ধরন ও স্টোরেজের সাথে খাপ খায়।",
    "services.living.title": "লিভিং রুম ডিজাইন",
    "services.living.desc": "অতিথি আপ্যায়ন ও আড্ডার মূল কেন্দ্র। বিশেষ অফার: নির্বাচিত আইটেমে ৪০% পর্যন্ত ছাড়!",
    "services.office.title": "অফিস ডিজাইন",
    "services.office.desc": "কর্মীদের স্বস্তি, একাগ্রতা ও উৎপাদনশীলতা বৃদ্ধির জন্য পেশাদার ও আধুনিক অফিস ডিজাইন।",
    "services.wallpaper.title": "ওয়ালপেপার ডিজাইন",
    "services.wallpaper.desc": "প্রিমিয়াম টেক্সচার্ড ও থ্রি-ডি এমবসড ওয়ালপেপার যা আপনার ঘরে এনে দেয় রাজকীয় সৌন্দর্য।",

    // Projects
    "projects.label": "আমাদের কাজ",
    "projects.title": "বর্ধমানে সম্প্রতি সম্পন্ন কাজ",
    "projects.viewAll": "সব সম্পন্ন প্রজেক্ট দেখুন",
    "projects.p1.title": "সেন্ট-গোবেন জিপসাম ফলস সিলিং ও কোভ লাইটিং",
    "projects.p1.cat": "ফলস সিলিং ডিজাইন",
    "projects.p2.title": "মাস্টার বেডরুম আর্চ ওয়ারড্রোব ও ড্রেসিং ইউনিট",
    "projects.p2.cat": "বেডরুম ডিজাইন",
    "projects.p3.title": "লিভিং রুম টিভি ইউনিট ও লুভার অ্যাকোস্টিক ওয়াল",
    "projects.p3.cat": "লিভিং রুম ডিজাইন",
    "projects.p4.title": "ডাইনিং হল ও ট্রি-অফ-লাইফ ব্যাকলিট ডিসপ্লে",
    "projects.p4.cat": "লিভিং ও ডাইনিং স্পেস",

    // FAQ
    "faq.label": "সাধারণ প্রশ্নোত্তর",
    "faq.title": "প্রশ্ন ও উত্তর",
    "faq.desc": "পূর্ব বর্ধমানে আমাদের ইন্টেরিয়র কাজ সংক্রান্ত যাবতীয় প্রয়োজনীয় তথ্য।",
    "faq.q1.q": "পশ্চিমবঙ্গের কোথায় কোথায় আপনাদের কাজ পাওয়া যায়?",
    "faq.q1.a":
      "আমাদের মূল অফিস ও ওয়ার্কশপ বর্ধমানের বাদশাহী রোড শর্মা পাড়ায়। আমরা পূর্ব বর্ধমান এবং পার্শ্ববর্তী কাটোয়া, মেমারি, কালনা ও দুর্গাপুরে ইন্টেরিয়র ডিজাইনের কাজ করে থাকি।",
    "faq.q2.q": "কীভাবে অন-সাইট ভিজিট বা পরামর্শের জন্য বুকিং করব?",
    "faq.q2.a":
      "বুকিং খুবই সহজ! আপনি সরাসরি +৯১ ৯৮৭৪৩০৬০৩৪ নম্বরে কল করতে পারেন অথবা ওয়েবসাইটের হোয়াটসঅ্যাপ বোতামে ট্যাপ করে কথা বলতে পারেন।",
    "faq.q3.q": "ফলস সিলিংয়ে সেন্ট-গোবেন জিপসাম ব্যবহারের কারণ কী?",
    "faq.q3.a":
      "সেন্ট-গোবেন জিপসাম বোর্ড ফ্যাক্টরিতে নিখুঁতভাবে তৈরি হয়, ফলে ফিনিশিং হয় মসৃণ ও সমতল। মজবুত মেটাল ফ্রেমের সাথে এটি অগ্নি-প্রতিরোধক ও তারের নিরাপদ সুরক্ষার সেরা মাধ্যম।",
    "faq.q4.q": "সাধারণ কাঠের কাজের চেয়ে মডুলার কিচেন কেন ভালো?",
    "faq.q4.a":
      "মডুলার কিচেন আপনার রান্নাঘরের নির্দিষ্ট মাপে মেশিনে কাটিং করা হয়। এতে জল-প্রতিরোধী প্লাই, উইপোকা নিরোধক ব্যবস্থা এবং সফট-ক্লোজ চ্যানেল থাকে যা সহজে নষ্ট হয় না।",
    "faq.q5.q": "বেডরুম সাজানোর মধ্যে কী কী অন্তর্ভুক্ত থাকে?",
    "faq.q5.a":
      "আমরা সম্পূর্ণ বেডরুম সাজাই: লেয়ার্ড বেডিং, কাস্টম হেডবোর্ড, নরম গালিচা, ব্ল্যাকআউট পর্দা, সিলিং লাইটিং, নাইটস্ট্যান্ড ও আধুনিক আলমারি।",
    "faq.q6.q": "আপনারা কি অফিস, দোকান ও রেস্তোরাঁর কাজও করেন?",
    "faq.q6.a":
      "হ্যাঁ! আমরা বাণিজ্যিক ইন্টেরিয়র যেমন এরগনোমিক অফিস, গ্রাহকবান্ধব রিটেল দোকান ও মনোরম রেস্তোরাঁ ডিজাইনে বিশেষভাবে অভিজ্ঞ।",

    // CTA
    "cta.label": "পূর্ব বর্ধমান বুকিং ও অনুসন্ধান",
    "cta.title1": "আপনার স্বপ্নের ঘর",
    "cta.title2": "সাজাতে প্রস্তুত?",
    "cta.desc":
      "এএস ডিজাইনার পূর্ব বর্ধমানের সেরা ইন্টেরিয়র বিশেষজ্ঞ গ্রুপ। আমরা সাশ্রয়ী মূল্যে সেরা মানের ইন্টেরিয়র ডিজাইন কাজ প্রদান করি।",
    "cta.callNow": "আমাদের কাজ বুক করতে কল করুন: +৯১ ৯৮৭৪৩০৬০৩৪",
    "cta.btnCall": "কল করুন +৯১ ৯৮৭৪৩০৬০৩৪",
    "cta.schedule": "পরামর্শের জন্য কল শিডিউল করুন",

    // Schedule Call
    "schedule.title": "পরামর্শের জন্য কল শিডিউল করুন",
    "schedule.step1": "আপনার বিবরণ দিন",
    "schedule.step2": "সুবিধাজনক সময় বেছে নিন",
    "schedule.name": "আপনার নাম",
    "schedule.namePlaceholder": "যেমন: রাজ শর্মা",
    "schedule.date": "পছন্দের তারিখ",
    "schedule.time": "পছন্দের সময়",
    "schedule.continue": "সময়ের দিকে এগিয়ে যান",
    "schedule.back": "পেছনে",
    "schedule.openWA": "হোয়াটসঅ্যাপে নিশ্চিত করুন",
    "schedule.cancel": "বাতিল",

    // Footer
    "footer.subtitle": "ইন্টেরিয়র ডিজাইনার এক্সপার্ট সলিউশন",
    "footer.about":
      "এএস ডিজাইনার পূর্ব বর্ধমানের বিশ্বস্ত ইন্টেরিয়র গ্রুপ। আমরা সুলভ মূল্যে সর্বোত্তম মানের ইন্টেরিয়র ডিজাইন পরিবেশন করি। যোগাযোগের জন্য কল করুন: +৯১ ৯৮৭৪৩০৬০৩৪।",
    "footer.services": "আমাদের কাজ",
    "footer.viewAllServices": "সমস্ত কাজ দেখুন →",
    "footer.pages": "প্রয়োজনীয় পেজ",
    "footer.findUs": "আমাদের ঠিকানা",
    "footer.hours": "সকাল ৮:০০ - বিকাল ৫:০০ (সোম থেকে শনি)",
    "footer.hoursSun": "শনি ও রবি: সকাল ১১:০০ - দুপুর ৩:০০",
    "footer.rights": "সর্বস্বত্ব সংরক্ষিত। পূর্ব বর্ধমান, পশ্চিমবঙ্গ।",
  },
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    // Preserve language preference if user toggled
    const saved = typeof window !== "undefined" ? localStorage.getItem("as_lang") : null
    if (saved === "en" || saved === "bn") {
      setLang(saved)
    }
  }, [])

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "bn" : "en"
      if (typeof window !== "undefined") {
        localStorage.setItem("as_lang", next)
      }
      return next
    })
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] ?? translations["en"][key] ?? key
    },
    [lang]
  )

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLanguage must be used within LangProvider")
  return ctx
}
