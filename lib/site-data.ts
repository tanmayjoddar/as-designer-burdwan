export interface ServiceItem {
  id: string
  title: string
  titleBn?: string
  slug: string
  shortDesc: string
  shortDescBn?: string
  fullContent?: string
  points?: string[]
  pointsBn?: string[]
  image: string
  gallery?: string[]
  featured?: boolean
}

export interface BlogPostItem {
  id: string
  title: string
  slug: string
  date: string
  author: string
  commentsCount: number
  summary: string
  content: string
  tags: string[]
  image?: string
}

export interface GoogleReviewItem {
  id: string
  name: string
  avatarInitial?: string
  color?: string
  localGuide?: boolean
  reviewsCount?: string
  photosCount?: string
  timeAgo: string
  timeAgoBn: string
  rating: number
  text: string
  textBn: string
  tags: string[]
  likes?: number
}

export const siteConfig = {
  name: "AS Designer",
  subtitle: "Expert Interior Design Solutions",
  tagline: "Best Quality Interior Design at an Affordable Price",
  phone: "9874306034",
  phoneDisplay: "+91 9874306034",
  phoneDisplayBn: "+৯১ ৯৮৭৪৩০৬০৩৪",
  phoneBn: "৯৮৭৪৩০৬০৩৪",
  phoneInternational: "+919874306034",
  whatsappNumber: "919874306034",
  location: "Badsahi Road Sharma Para, Burdwan West Bengal",
  googleMapsUrl: "https://maps.app.goo.gl/6AxA16yioubiXUXs9",
  googleEmbedMapUrl:
    "https://maps.google.com/maps?q=23.2553801,87.8587936&hl=en&z=17&output=embed",
  googleReviewUrl: "https://maps.app.goo.gl/6AxA16yioubiXUXs9",
  coordinates: {
    lat: 23.2553801,
    lng: 87.8587936,
  },
  rating: {
    score: 4.8,
    totalReviews: 17,
    fiveStars: 15,
    fourStars: 2,
    threeStars: 0,
    twoStars: 0,
    oneStar: 0,
  },
  hoursWeekday: "8:00am - 5:00pm, Mon to Sat",
  hoursDetailed: {
    weekdays: "Monday–Friday: 9:00AM–5:00PM",
    weekends: "Saturday & Sunday: 11:00AM–3:00PM",
    short: "Mon to Sat: 8:00AM – 5:00PM",
  },
  email: "contact@asdesigner.com",
  aboutShort:
    "AS Designer is a premier interior design studio in Burdwan. We provide top-quality residential and commercial interior design solutions at an affordable price across Purba Burdwan. For bookings, call +91 9874306034.",
  aboutShortBn:
    "এএস ডিজাইনার পূর্ব বর্ধমানের নির্ভরযোগ্য ইন্টেরিয়র বিশেষজ্ঞ গ্রুপ। আমরা সাশ্রয়ী মূল্যে সর্বোচ্চ মানের ইন্টেরিয়র ডিজাইনের কাজ করে থাকি। পূর্ব বর্ধমানের যেকোনো স্থানে বুকিংয়ের জন্য কল করুন: +৯১ ৯৮৭৪৩০৬০৩৪।",
  locationBn: "বাদশাহী রোড শর্মা পাড়া, বর্ধমান, পশ্চিমবঙ্গ - ৭১৩১০১",
  hoursWeekdayBn: "সকাল ৮:০০ - বিকাল ৫:০০ (সোম থেকে শনি)",
  hoursDetailedBn: {
    weekdays: "সোমবার–শুক্রবার: সকাল ৯:০০–বিকাল ৫:০০",
    weekends: "শনিবার ও রবিবার: সকাল ১১:০০–দুপুর ৩:০০",
    short: "সোম থেকে শনি: সকাল ৮:০০ – বিকাল ৫:০০",
  },
  socials: {
    facebook: "http://www.facebook.com/",
    twitter: "http://www.twitter.com/",
    instagram: "http://www.instagram.com/",
    linkedin: "http://www.linkedin.com/",
    youtube: "http://www.youtube.com/",
  },
  tags: [
    "Home Design",
    "Interior Design",
    "Kitchen Design",
    "Office Design",
    "Shop Interior Design",
    "Purba Burdwan",
    "False Ceiling",
    "Modular Kitchen",
  ],
  tagsBn: [
    "হোম ডিজাইন",
    "ইন্টেরিয়র ডিজাইন",
    "কিচেন ডিজাইন",
    "অফিস ডিজাইন",
    "শপ ইন্টেরিয়র",
    "পূর্ব বর্ধমান",
    "ফলস সিলিং",
    "মডুলার কিচেন",
  ],
}

export const servicesData: ServiceItem[] = [
  {
    id: "false-ceiling",
    title: "False Ceiling Design",
    titleBn: "ফলস সিলিং ডিজাইন",
    slug: "false-ceiling",
    shortDesc:
      "Durable Saint-Gobain gypsum false ceilings with precision metal framing for ambient lighting, hidden wiring, thermal insulation, and soundproofing.",
    shortDescBn:
      "সেন্ট-গোবেন জিপসাম ও হেভি মেটাল ফ্রেম দিয়ে তৈরি দীর্ঘস্থায়ী ফলস সিলিং — আধুনিক অ্যাম্বিয়েন্ট আলো, গোপন ওয়্যারিং এবং শব্দ ও তাপ নিরোধক সুরক্ষা।",
    points: [
      "With good quality metal frames, gypsum ceilings by Saint Gobain are quite durable.",
      "Since gypsum boards are made with precision in factories, the consistency in design is maintained which makes it the ideal material for best false ceiling designs.",
      "Concealing electrical wires, sound proofing, fire safety, and energy efficiency.",
      "Moisture and sag resistance for long-term ceiling durability.",
      "Engineered access points to avoid reckless use and ensure safe maintenance.",
    ],
    pointsBn: [
      "উন্নত মানের মেটাল ফ্রেমের সেন্ট-গোবেন জিপসাম সিলিং অত্যন্ত টেকসই ও দীর্ঘস্থায়ী।",
      "ফ্যাক্টরিতে নিখুঁতভাবে তৈরি জিপসাম বোর্ডে ডিজাইনের সমতা বজায় থাকে, যা ফলস সিলিংয়ের জন্য আদর্শ।",
      "বৈদ্যুতিক তার লুকানো, শব্দ নিরোধক, অগ্নি নিরাপত্তা এবং বিদ্যুৎ সাশ্রয়ের সুবিধা।",
      "আর্দ্রতা ও ঝুলে পড়া প্রতিরোধক ক্ষমতা যা দীর্ঘ বছর সিলিং ঠিক রাখে।",
      "নিরাপদ মেইনটেন্যান্স ও পরিষ্কারের জন্য বিশেষ সার্ভিস এক্সেস ডোর বা ট্র্যাপডোর সুবিধা।",
    ],
    image: "/images/falseSelling/image.png",
    gallery: [
      "/images/falseSelling/image.png",
      "/images/falseSelling/4be29d7a-a486-425d-bf21-b56fa5bc6b16.jpg",
      "/images/falseSelling/3518e4d1-83e0-478e-a1d0-cf0b8a7844b5.jpg",
      "/images/falseSelling/31a055ca-13b5-41c4-b8bc-a76fc1ac25bd.jpg",
    ],
    featured: true,
  },
  {
    id: "bedroom-design",
    title: "Bedroom Design",
    titleBn: "বেডরুম ডিজাইন",
    slug: "bedroom-design",
    shortDesc:
      "Personal sanctuaries customized with layered bedding, stylish headboards, cozy rugs, ambient lighting, statement mirrors, and storage dressers.",
    shortDescBn:
      "লেয়ার্ড বেডিং, আধুনিক হেডবোর্ড, নরম গালিচা, শান্ত অ্যাম্বিয়েন্ট লাইটিং, ওয়াল মিরর ও স্টোরেজ ড্রেসারের সমন্বয়ে সাজানো আপনার ব্যক্তিগত শান্তির নীড়।",
    points: [
      "Layered Bedding — balanced comfort with plush materials.",
      "A Stylish Headboard as the anchor statement of the master suite.",
      "A Comfy Rug and blackout acoustic curtains for serene sleep.",
      "Ample Lighting tailored for evening unwind, reading, and dressing.",
      "A Bench For the Foot of the Bed and curated nightstands.",
      "Storage Dresser, Nightstands, and Statement Mirrors.",
    ],
    pointsBn: [
      "লেয়ার্ড বেডিং — প্রিমিয়াম নরম কাপড়ে সেরা আরামদায়ক অনুভূতি।",
      "মাস্টার স্যুটের মূল আকর্ষণ হিসেবে আধুনিক ও মার্জিত হেডবোর্ড।",
      "শান্তিপূর্ণ ঘুমের জন্য আরামদায়ক গালিচা এবং সাউন্ডপ্রুফ ব্ল্যাকআউট পর্দা।",
      "পড়া, সাজগোজ ও সন্ধ্যায় বিশ্রামের জন্য মানানসই স্তরীভূত আলো।",
      "বিছানার সাথে মানানসই বেঞ্চ এবং কিউরেটেড নাইটস্ট্যান্ড।",
      "স্টোরেজ ড্রেসার, নাইটস্ট্যান্ড এবং আধুনিক ডিজাইনার ড্রেসিং মিরর।",
    ],
    image: "/images/asdesigner/IMG-20261027-WA0036.jpg",
    gallery: [
      "/images/asdesigner/IMG-20261027-WA0036.jpg",
      "/images/services/bedroom.jpg",
    ],
    featured: true,
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen Design",
    titleBn: "মডুলার কিচেন ডিজাইন",
    slug: "modular-kitchen",
    shortDesc:
      "Modern, flexible module-based kitchen cabinets allowing customized configurations to fit every workflow, cooking style, and storage demand.",
    shortDescBn:
      "আধুনিক ও সুবিধাজনক মডিউল-ভিত্তিক রান্নাঘর ক্যাবিনেট — যা আপনার রান্নার ধরন, কাজের গতি ও স্টোরেজের সাথে নিখুঁতভাবে মানিয়ে যায়।",
    points: [
      "Modular cabinets designed in specific modules tailored for varied kitchen functions.",
      "Modules available in various heights and depths to match your cooking space.",
      "Rust-proof soft-close hardware, pull-out carousels, and dedicated spice racks.",
      "Waterproof marine-grade ply with heat-resistant laminate and acrylic finishes.",
      "Integrated chimney, cooktop, and sink zones following the golden work triangle.",
    ],
    pointsBn: [
      "রান্নাঘরের বিভিন্ন কাজের সুবিধার জন্য বিশেষভাবে পরিকল্পিত পৃথক মডিউলার ক্যাবিনেট।",
      "আপনার ঘরের স্থান ও উচ্চতা অনুযায়ী বিভিন্ন সাইজের মডিউল নির্বাচন।",
      "মরিচারোধী সফট-ক্লোজ চ্যানেল, পুল-আউট ক্যারোজেল ও মশলার বিশেষ র‍্যাক।",
      "তাপ ও জল-প্রতিরোধী মেরিন প্লাইউড সাথে আধুনিক অ্যাক্রিলিক ও ল্যামিনেট ফিনিশ।",
      "গোল্ডেন ওয়ার্ক ট্রায়াঙ্গেল মেনে চিমনি, কুকটপ ও সিঙ্কের সুশৃঙ্খল স্থান নির্ধারণ।",
    ],
    image: "/images/services/modular-kitchen.jpg",
    featured: true,
  },
  {
    id: "living-room",
    title: "Living Room Design",
    titleBn: "লিভিং রুম ডিজাইন",
    slug: "living-room",
    shortDesc:
      "The centerpiece of your home for entertaining friends, conversations, and relaxing. Special limited-time offer: Up to 40% off select living room items!",
    shortDescBn:
      "অতিথি আপ্যায়ন, পরিবারের সাথে আড্ডা ও বিশ্রামের মূল কেন্দ্র। বিশেষ সীমিত সময়ের অফার: নির্বাচিত আইটেমে ৪০% পর্যন্ত ছাড়!",
    points: [
      "Designed for entertaining, conversation, reading, and entertainment.",
      "Special Promotion: Up to 40% off select living room design items.",
      "Bespoke media units with warm backlighting and acoustic timber slats.",
      "Comfortable sectional lounges, accent armchairs, and elegant coffee tables.",
      "Layered lighting with dimmable coves and designer chandeliers.",
    ],
    pointsBn: [
      "আড্ডা, আতিথেয়তা, বই পড়া ও টিভি দেখার জন্য আদর্শ বিন্যাস।",
      "বিশেষ প্রমোশন অফার: নির্বাচিত লিভিং রুম ডিজাইনে ৪০% পর্যন্ত আকর্ষণীয় ছাড়।",
      "ওয়ার্ম ব্যাকলাইটিং ও অ্যাকোস্টিক কাঠের স্ল্যাট সহ কাস্টম টিভি মিডিয়া ইউনিট।",
      "আরামদায়ক সেকশনাল সোফা লাউঞ্জ, অ্যাকসেন্ট চেয়ার ও মার্জিত কফি টেবিল।",
      "ডিমারযুক্ত কোভ লাইট ও আধুনিক ডিজাইনার ঝাড়বাতির সুন্দর সমন্বয়।",
    ],
    image: "/images/asdesigner/IMG-20261027-WA0033.jpg",
    gallery: [
      "/images/asdesigner/IMG-20261027-WA0033.jpg",
      "/images/asdesigner/IMG-20261027-WA0027.jpg",
    ],
    featured: true,
  },
  {
    id: "office-design",
    title: "Office Design",
    titleBn: "অফিস ইন্টেরিয়র ডিজাইন",
    slug: "office-design",
    shortDesc:
      "Professional, clutter-free workspaces designed for health, collaboration, employee productivity, and an unforgettable reception impression.",
    shortDescBn:
      "কর্মীদের স্বাস্থ্য, স্বাচ্ছন্দ্য, পারস্পরিক সহযোগিতা ও কাজের একাগ্রতা বাড়াতে সুশৃঙ্খল ও আধুনিক কর্পোরেট অফিস ইন্টেরিয়র।",
    points: [
      "Keep it professional: keeping work front and centre without unnecessary clutter.",
      "Clean and functional layouts that eliminate visual distraction.",
      "Make it healthy and comfortable with ergonomic chairs and balanced natural light.",
      "Reflect your company identity and corporate brand with style.",
      "Foster collaboration opportunities through open breakout pods.",
      "Create an unforgettable first impression with your entrance and reception desk.",
    ],
    pointsBn: [
      "কাজের পরিবেশকে সর্বদা পেশাদার ও অপ্রয়োজনীয় ঝামেলামুক্ত রাখা।",
      "পরিচ্ছন্ন ও কার্যকরী লেআউট যা দৃষ্টিবিভ্রান্তি দূর করে কাজের গতি বৃদ্ধি করে।",
      "এরগনোমিক চেয়ার ও প্রাকৃতিক আলোর সুষম ব্যবহারে স্বাস্থ্যকর কর্মপরিবেশ।",
      "আপনার প্রতিষ্ঠানের ব্র্যান্ড ও মর্যাদার সাথে সামঞ্জস্যপূর্ণ আভিজাত্যময় রূপ।",
      "ওপেন ব্রেকআউট পড ও মিটিং জোনের মাধ্যমে সহযোগিতামূলক কাজের সুযোগ।",
      "প্রবেশদ্বার ও অভ্যর্থনা ডেস্কে গ্রাহক ও অতিথিদের জন্য প্রথম দর্শনেই অনন্য ছাপ।",
    ],
    image: "/images/services/office-design.jpg",
    featured: true,
  },
  {
    id: "wallpaper-design",
    title: "Wallpaper Design",
    titleBn: "ওয়ালপেপার ডিজাইন",
    slug: "wallpaper-design",
    shortDesc:
      "Premium textured wallpapers, 3D embossed designs, and designer feature wallcoverings that bring rich texture and personality to any room.",
    shortDescBn:
      "প্রিমিয়াম টেক্সচার্ড ওয়ালপেপার, থ্রি-ডি এমবসড প্যাটার্ন ও ডিজাইনার ফিচার কভারিং — যা যেকোনো ঘরে আনে রাজকীয় শোভা ও ব্যক্তিত্ব।",
    points: [
      "Rich 3D textures, geometric accents, and subtle linen finishes.",
      "Moisture-proof and washable vinyl wallpaper options for long life.",
      "Custom wall murals for bedroom backdrops and TV feature walls.",
      "Fast, seamless installation with zero dust or painting delays.",
    ],
    pointsBn: [
      "সমৃদ্ধ ৩D টেক্সচার, জ্যামিতিক নকশা ও সূক্ষ্ম লিনেন ফিনিশের বৈচিত্র্য।",
      "দীর্ঘস্থায়ী ব্যবহারের জন্য জলরোধী ও ধোয়া যায় এমন ভিনাইল ওয়ালপেপার।",
      "বেডরুমের ব্যাকড্রপ ও টিভি ফিচার ওয়ালের জন্য কাস্টমাইজড ওয়াল ম্যুরাল।",
      "ধুলোবালি বা রং শুকানোর ঝামেলা ছাড়াই দ্রুত ও মসৃণ ইনস্টলেশন।",
    ],
    image: "/images/services/wallpaper-design.jpg",
    featured: false,
  },
  {
    id: "bathroom-design",
    title: "Bathroom Design",
    titleBn: "বাথরুম ডিজাইন",
    slug: "bathroom-design",
    shortDesc:
      "Luxurious, spa-like bathroom retreats with anti-skid tiles, concealed premium plumbing, vanity storage, and frameless glass partitions.",
    shortDescBn:
      "অ্যান্টি-স্কিড টাইলস, প্রিমিয়াম কনসিলড প্লাম্বিং, ভ্যানিটি ক্যাবিনেট ও গ্লাস পার্টিশন সহ লাক্সারি স্পা-সুলভ বাথরুম।",
    points: [
      "Clear segregation between dry vanity area and wet shower zones.",
      "Frameless glass partitions and concealed thermostatic diverters.",
      "Anti-slip floor tiles and water-resistant suspended vanity counters.",
      "Touch-controlled LED back-lit mirrors with anti-fog technology.",
    ],
    pointsBn: [
      "ড্রাই ভ্যানিটি এরিয়া ও ওয়েট শাওয়ার জোনের সুনির্দিষ্ট বিভাজন।",
      "ফ্রেমলেস টাফেন্ড গ্লাস পার্টিশন ও কনসিলড থার্মোস্ট্যাটিক ডাইভার্টার।",
      "পিছলে না যাওয়ার মতো নন-স্লিপ ফ্লোর টাইলস ও জলরোধী সাসপেন্ডেড ভ্যানিটি।",
      "অ্যান্টি-ফগ প্রযুক্তি সহ টাচ-কন্ট্রোল্ড এলইডি ব্যাকলিট স্মার্ট মিরর।",
    ],
    image: "/images/services/bathroom-design.jpg",
    featured: false,
  },
  {
    id: "balcony-design",
    title: "Balcony Design (Belkoni)",
    titleBn: "বারান্দা ডিজাইন (ব্যালকনি)",
    slug: "balcony-design",
    shortDesc:
      "Transforming compact or spacious balconies into serene outdoor extensions with vertical gardens, artificial turf, and cozy coffee nooks.",
    shortDescBn:
      "ভার্টিক্যাল গার্ডেন, কৃত্রিম সবুজ ঘাস ও মনোরম কফি কর্নারের সাহায্যে ছোট বা বড় বারান্দাকে মনোরম প্রাকৃতিক স্থানে রূপান্তর।",
    points: [
      "Vertical wall planters and lush weather-resistant artificial grass.",
      "All-weather composite wood flooring and compact bistro seating.",
      "Concealed drain points and rain shields for monsoon longevity.",
      "Warm ambient fairy lights and hanging planters for magical evenings.",
    ],
    pointsBn: [
      "ভার্টিক্যাল ওয়াল প্ল্যান্টার ও আবহাওয়া-সহনশীল সুন্দর কৃত্রিম সবুজ ঘাস।",
      "আবহাওয়া-প্রতিরোধী কম্পোজিট উড ফ্লোরিং ও কমপ্যাক্ট বিস্ট্রো সিটিং।",
      "বর্ষাকালে সুরক্ষার জন্য রেইন শিল্ড ও উপযুক্ত ড্রেনেজ ব্যবস্থা।",
      "মনোরম সন্ধ্যার জন্য ওয়ার্ম ফেয়ারি লাইট ও ঝুলন্ত সুন্দর প্ল্যান্টার।",
    ],
    image: "/images/services/balcony-design.jpg",
    featured: false,
  },
  {
    id: "restaurant-design",
    title: "Restaurant Design",
    titleBn: "রেস্তোরাঁ ইন্টেরিয়র ডিজাইন",
    slug: "restaurant-design",
    shortDesc:
      "Memorable dining ambiances with optimal customer traffic flow, acoustic comfort, bespoke booth seating, and Instagrammable visual elements.",
    shortDescBn:
      "গ্রাহকদের স্বাচ্ছন্দ্যময় চলাচল, অ্যাকোস্টিক আরাম, কাস্টম বুথ সিটিং ও সুন্দর ফটো কর্নার সহ অবিস্মরণীয় ডাইনিং অ্যাম্বিয়েন্স।",
    points: [
      "Intimate dining lighting and acoustic paneling to minimize echo.",
      "Ergonomic booth layouts and clear staff service pathways.",
      "Attractive reception, bar counter, and signature photo-op corners.",
      "Durable commercial-grade materials designed for easy sanitation.",
    ],
    pointsBn: [
      "ইকো ও আওয়াজ নিয়ন্ত্রণের জন্য অ্যাকোস্টিক প্যানেলিং ও নরম আলোর বিন্যাস।",
      "আরামদায়ক বুথ সিটিং এবং কর্মীদের খাবার পরিবেশনের প্রশস্ত যাতায়াত পথ।",
      "মনোমুগ্ধকর অভ্যর্থনা, আধুনিক ক্যাশ/বার কাউন্টার ও ইনস্টাগ্রাম-উপযোগী সেলফি কর্নার।",
      "সহজে পরিষ্কার ও দীর্ঘস্থায়ী ব্যবহারের জন্য টেকসই কমার্শিয়াল গ্রেড ম্যাটেরিয়াল।",
    ],
    image: "/images/services/restaurant-design.jpg",
    featured: false,
  },
  {
    id: "shop-design",
    title: "Shop Interior Design",
    titleBn: "দোকান ও রিটেল শপ ডিজাইন",
    slug: "shop-design",
    shortDesc:
      "High-converting retail spaces with attractive facade glazing, illuminated 3D signage, strategic display racks, and smooth billing counters.",
    shortDescBn:
      "চোখ ধাঁধানো ফ্রন্ট ফ্যাসাড, আলোকিত ৩D সাইনেজ, কৌশলগত ডিসপ্লে র্যাক ও আধুনিক বিলিং কাউন্টার সহ সেলস বৃদ্ধিকারী রিটেল ডিজাইন।",
    points: [
      "Eye-catching storefront elevation with 3D LED glow signage.",
      "Customer walkway optimization designed to maximize product browse time.",
      "Adjustable modular display racks with high-CRI spotlighting.",
      "Secure, organized cash counter and inventory back-storage.",
    ],
    pointsBn: [
      "চোখ ধাঁধানো স্টোরফ্রন্ট এলিভেশন সহ থ্রি-ডি এলইডি গ্লো সাইনবোর্ড।",
      "গ্রাহকদের পণ্য দেখার সময় বৃদ্ধির জন্য প্রশস্ত ও সুপরিকল্পিত ওয়াকওয়ে।",
      "উচ্চমানের সিআরআই স্পটলাইট সহ পরিবর্তনযোগ্য মডুলার ডিসপ্লে র্যাক।",
      "নিরাপদ ও সুশৃঙ্খল ক্যাশ কাউন্টার এবং ব্যাক-ইনভেন্টরি স্টোরেজ স্পেস।",
    ],
    image: "/images/services/shop-design.jpg",
    featured: false,
  },
]

export const blogPostsData: BlogPostItem[] = [
  {
    id: "hiring-best-interior-designers-burdwan",
    title: "A Guide To Hiring the Best Interior Designers in Burdwan",
    slug: "hiring-best-interior-designers-burdwan",
    date: "July 25, 2022",
    author: "AS Designer Team",
    commentsCount: 0,
    summary:
      "Essential guide for homeowners in Burdwan: evaluating portfolios, understanding modular vs carpentry costs, inspecting gypsum false ceilings, and transparent contractor billing.",
    content: `When building or renovating your dream home in Purba Burdwan, selecting the right interior designer is the most pivotal decision you will make. A well-designed interior not only increases your property value but also creates everyday harmony and peace of mind.

Here are key aspects to look for when choosing an interior design expert in Burdwan:

1. Local Experience & Material Sourcing
Designers who know Burdwan understand local climate challenges—such as humidity levels during monsoons and summer heat. They select materials like Saint-Gobain gypsum boards, marine-grade boiling waterproof ply, and durable interior finishes that endure.

2. Transparent Pricing without Hidden Extras
Always demand an itemized estimate. At AS Designer, we believe in delivering premium quality at an affordable price, ensuring you know exactly where every rupee goes.

3. Complete Turnkey Solutions
Look for a team capable of handling everything from False Ceiling, Modular Kitchen, Living Room Media Walls, to Electrical, Painting, and Furniture assembly under one roof.

4. On-Time Project Delivery
A dedicated project supervisor ensures that your bedroom, kitchen, or retail store is handed over on schedule without agonizing delays.

For consultations or site visits across Purba Burdwan, call AS Designer at +919874306034.`,
    tags: ["Home design", "Interior designed", "Purba Burdwan"],
    image: "/images/asdesigner/IMG-20261027-WA0030.jpg",
  },
  {
    id: "bedroom-decorating",
    title: "Bedroom Decorating",
    slug: "bedroom-decorating",
    date: "February 26, 2021",
    author: "AS Designer Team",
    commentsCount: 0,
    summary:
      "Even though the bedroom is a private space seen by far fewer people, it should be an equally stylish sanctuary. Essential decorating tips from layered bedding to statement mirrors.",
    content: `Even though the bedroom is a private space that will be seen by far fewer people than your living room or kitchen, it should be an equally stylish sanctuary. Whether you want a traditional design or an exotic retreat, you’ll find bedroom decorating ideas to create the room of your dreams in this collection of spaces from the archives of Architectural Digest. Best of all, you don’t need a complete remodel to bring new life to your bedroom. As these rooms prove, some well-placed art, bold wallpaper, or even a fresh coat of paint can make a space stand out.

Key elements for a stylish bedroom:
• Layered Bedding: No magic formula here. Crisp cotton sheets, a textured duvet, and accent pillows create irresistible comfort.
• A Stylish Headboard: Anchors the bed and introduces vertical rhythm, whether upholstered in velvet, wrapped in wood, or custom paneled.
• A Comfy Rug: Stepping out of bed onto a soft, plush texture sets a warm tone for the whole day.
• Good Curtains: Blackout drapes paired with sheer liners give you complete light and privacy control.
• Ample Lighting: A blend of warm ceiling cove lights, reading lamps, and bedside sconces.
• A Bench For the Foot of the Bed: Provides both visual proportion and a functional spot to sit or lay tomorrow's outfit.
• Storage Dresser and Nightstands: Keeping clutter out of sight maintains calm in your sleep environment.
• A Statement Mirror: Expands natural daylight and doubles the visual depth of the room.`,
    tags: ["Home design", "Interior designed", "Bedroom Decorating"],
    image: "/images/asdesigner/IMG-20261027-WA0027.jpg",
  },
  {
    id: "false-ceiling",
    title: "False Ceiling Design",
    slug: "false-ceiling",
    date: "February 26, 2021",
    author: "AS Designer Team",
    commentsCount: 0,
    summary:
      "Gypsum ceilings by Saint Gobain with quality metal frames offer durability, fire safety, concealed wiring, and modern ambient lighting.",
    content: `With good quality metal frames, gypsum ceilings by Saint Gobain are quite durable. Since gypsum boards are made with precision in factories, the consistency in design is maintained which makes it the ideal material for best false ceiling designs.

False ceilings are essentially used for concealing wires, sound proofing, fire safety, energy efficiency and to help in moisture and sag resistance. Earlier, false ceilings were usually made of gypsum boards, but these days, it is easy to have false ceilings that are not only functional, but also decorative.

In fact, senior architect Dikshu Kukreja says “reckless use” of false ceilings in residential buildings should be avoided. Apart from safety issues, it becomes difficult to clean the area between the roof and the false ceiling. … Also, there is no way to check for leaks or cracks in the ceiling.

At AS Designer, our installation follows strict engineering standards:
• Certified Saint-Gobain gypsum boards and heavy-gauge galvanized steel channel framing.
• Concealed fire-retardant wiring pathways with easy-access trapdoors.
• Perfectly leveled cove lighting pockets with warm 3000K LED strips.
• Structural anchoring tested for maximum load and longevity.`,
    tags: ["Home Design", "Interior Design", "False Ceiling"],
    image: "/images/asdesigner/IMG-20261027-WA0030.jpg",
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    slug: "modular-kitchen",
    date: "February 26, 2021",
    author: "AS Designer Team",
    commentsCount: 0,
    summary:
      "A modern and flexible way to design your kitchen, allowing you to choose a variety of cabinets for different functions which come in modules.",
    content: `A modular kitchen is simply a modern and flexible way to design your kitchen, allowing you to choose a variety of cabinets for different functions which come in “modules.” The modules are available in different sizes which can suit various functions depending on which area of the kitchen you would choose to use the module.

Why choose an AS Designer modular kitchen:
• Modular cabinets for cutlery, thali baskets, bottle pull-outs, and tall pantry units.
• Durable BWR/BWP grade plywood treated against termites and boiling water.
• Premium European soft-close hinges and drawer runners tested for thousands of cycles.
• Granite, quartz, and nano-white countertop options that resist oil and turmeric stains.
• Effortless cleaning and maintenance.`,
    tags: ["Kitchen Design", "Interior Design", "Modular Kitchen"],
    image: "/images/asdesigner/IMG-20261027-WA0028.jpg",
  },
  {
    id: "modular-kitchen-new",
    title: "Modern Modular Kitchen Trends",
    slug: "modular-kitchen-new",
    date: "April 15, 2021",
    author: "AS Designer Team",
    commentsCount: 0,
    summary:
      "Modern trends in modular kitchen architecture: acrylic finishes, handleless Gola profiles, integrated appliance garages, and under-cabinet task lighting.",
    content: `Modern modular kitchen layouts continue to evolve towards sleek, handleless aesthetics and hyper-functional organization.

Key highlights of the new generation modular kitchens:
• Handleless Gola Profiles: Clean lines without protruding knobs or handles.
• High-Gloss Acrylic & Matte Laminates: Anti-fingerprint and easy to wipe clean.
• Appliance Garages: Keep microwave, toaster, and air fryer neatly concealed when not in use.
• LED Profile Task Lights: Bright shadow-free illumination directly onto chopping and prep zones.
• Custom Corner Solutions: Magic corners and kidney-bean pull-outs that eliminate dead corner space.

For site measurement and modular kitchen 3D designs in Purba Burdwan, call +919874306034.`,
    tags: ["Kitchen Design", "Interior Design"],
    image: "/images/asdesigner/IMG-20261027-WA0028.jpg",
  },
]

export const googleReviewsData: GoogleReviewItem[] = [
  {
    id: "rev-1",
    name: "Sritam Pal",
    avatarInitial: "S",
    color: "from-blue-500 to-indigo-600",
    localGuide: true,
    reviewsCount: "17 reviews",
    photosCount: "28 photos",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Very nice and experienced workmanship. Interior designing, planning and execution all under one roof.",
    textBn: "খুব সুন্দর এবং অভিজ্ঞ কারিগর। একই ছাদের নিচে ইন্টেরিয়র ডিজাইন, পরিকল্পনা ও বাস্তবায়নের সম্পূর্ণ কাজ পাওয়া যায়।",
    tags: ["workmanship", "planning"],
    likes: 1,
  },
  {
    id: "rev-2",
    name: "rishikant sharma",
    avatarInitial: "R",
    color: "from-emerald-500 to-teal-600",
    localGuide: false,
    reviewsCount: "6 reviews",
    photosCount: "4 photos",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Nice interior design work in budget and also good behavior 👌 …",
    textBn: "বাজেটের মধ্যে চমৎকার ইন্টেরিয়র ডিজাইনের কাজ এবং তাদের ব্যবহারও ভীষণ ভালো 👌 …",
    tags: ["budget", "behaviour"],
    likes: 1,
  },
  {
    id: "rev-3",
    name: "Sudeshna Mathur",
    avatarInitial: "S",
    color: "from-purple-500 to-pink-600",
    localGuide: false,
    reviewsCount: "1 review",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Design and their behaviour is very good.",
    textBn: "ডিজাইন এবং তাদের আচরণ অত্যন্ত প্রশংসনীয় ও অমায়িক।",
    tags: ["behaviour", "design"],
    likes: 1,
  },
  {
    id: "rev-4",
    name: "abu mustakin",
    avatarInitial: "A",
    color: "from-amber-500 to-orange-600",
    localGuide: true,
    reviewsCount: "36 reviews",
    photosCount: "31 photos",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Very good designing and work .",
    textBn: "খুব ভালো ডিজাইন ও নিখুঁত কাজ সম্পন্ন করেছে।",
    tags: ["workmanship", "design"],
    likes: 1,
  },
  {
    id: "rev-5",
    name: "ANINDYA GHOSH",
    avatarInitial: "A",
    color: "from-cyan-500 to-blue-600",
    localGuide: false,
    reviewsCount: "4 reviews",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Very honest about his work that is very much needed in this industry.",
    textBn: "কাজের প্রতি সমরজিৎ শর্মা অত্যন্ত সৎ, যা বর্তমান ইন্টেরিয়র ইন্ডাস্ট্রিতে সবচেয়ে বেশি প্রয়োজন।",
    tags: ["honesty", "workmanship"],
    likes: 1,
  },
  {
    id: "rev-6",
    name: "susanta ghosh",
    avatarInitial: "S",
    color: "from-violet-500 to-purple-600",
    localGuide: false,
    reviewsCount: "2 reviews",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Very Good Interiors.",
    textBn: "খুব ভালো মানের ইন্টেরিয়র কাজ।",
    tags: ["design"],
    likes: 1,
  },
  {
    id: "rev-7",
    name: "SUBHASISH KARMAKAR",
    avatarInitial: "S",
    color: "from-rose-500 to-red-600",
    localGuide: false,
    reviewsCount: "1 review",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Very nice",
    textBn: "খুব সুন্দর",
    tags: ["workmanship"],
    likes: 1,
  },
  {
    id: "rev-8",
    name: "Raj Paswan",
    avatarInitial: "R",
    color: "from-orange-500 to-amber-600",
    localGuide: true,
    reviewsCount: "9 reviews",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Good work",
    textBn: "খুব ভালো কাজ।",
    tags: ["workmanship"],
    likes: 1,
  },
  {
    id: "rev-9",
    name: "Abinash Kumar",
    avatarInitial: "A",
    color: "from-teal-500 to-emerald-600",
    localGuide: false,
    reviewsCount: "1 review",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Good",
    textBn: "ভালো মানের কাজ।",
    tags: ["workmanship"],
    likes: 1,
  },
  {
    id: "rev-10",
    name: "Rima Goswami",
    avatarInitial: "R",
    color: "from-pink-500 to-rose-600",
    localGuide: false,
    reviewsCount: "1 review",
    timeAgo: "2 years ago",
    timeAgoBn: "২ বছর আগে",
    rating: 5,
    text: "Beautiful designers 👌👌👌👌👌⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ …",
    textBn: "অসাধারণ দক্ষ ডিজাইনার 👌👌👌👌👌⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ …",
    tags: ["design"],
    likes: 1,
  },
  {
    id: "rev-11",
    name: "Sanjucta Ghosh",
    avatarInitial: "S",
    color: "from-indigo-500 to-blue-600",
    localGuide: false,
    reviewsCount: "Google Reviewer",
    timeAgo: "3 years ago",
    timeAgoBn: "৩ বছর আগে",
    rating: 5,
    text: "Positive: Professionalism",
    textBn: "ইতিবাচক দিক: পেশাদারিত্ব ও নিখুঁত সময়ানুবর্তিতা।",
    tags: ["professionalism"],
    likes: 1,
  },
  {
    id: "rev-12",
    name: "Koyel Mondal",
    avatarInitial: "K",
    color: "from-fuchsia-500 to-purple-600",
    localGuide: false,
    reviewsCount: "Google Reviewer",
    timeAgo: "4 months ago",
    timeAgoBn: "৪ মাস আগে",
    rating: 5,
    text: "Prompt consultation and modern design for home interior in Burdwan.",
    textBn: "বর্ধমান শহরের ভেতর দ্রুত সাইট ভিজিট এবং আধুনিক হোম ইন্টেরিয়র ডিজাইন।",
    tags: ["design"],
    likes: 1,
  },
  {
    id: "rev-13",
    name: "SOURAV KUMAR GHOSH",
    avatarInitial: "S",
    color: "from-blue-600 to-teal-600",
    localGuide: false,
    reviewsCount: "Google Reviewer",
    timeAgo: "4 months ago",
    timeAgoBn: "৪ মাস আগে",
    rating: 5,
    text: "High quality Saint-Gobain gypsum false ceiling with modern LED profile.",
    textBn: "উচ্চমানের সেন্ট-গোবেন জিপসাম ফলস সিলিং ও আধুনিক এলইডি প্রোফাইল লাইট।",
    tags: ["workmanship"],
    likes: 1,
  },
  {
    id: "rev-14",
    name: "Rasmita Singha",
    avatarInitial: "R",
    color: "from-emerald-600 to-teal-500",
    localGuide: false,
    reviewsCount: "Google Reviewer",
    timeAgo: "10 months ago",
    timeAgoBn: "১০ মাস আগে",
    rating: 5,
    text: "Reasonable cost, very humble behaviour, and on-time project completion.",
    textBn: "সাশ্রয়ী খরচ, অত্যন্ত বিনয়ী আচরণ এবং সঠিক সময়ে কাজ সম্পন্ন করার প্রতিশ্রুতি।",
    tags: ["budget", "behaviour"],
    likes: 1,
  },
  {
    id: "rev-15",
    name: "Nafisha Khatun",
    avatarInitial: "N",
    color: "from-amber-600 to-orange-500",
    localGuide: false,
    reviewsCount: "3 reviews · 2 photos",
    timeAgo: "a year ago",
    timeAgoBn: "১ বছর আগে",
    rating: 5,
    text: "Neat carpentry and false ceiling finish across Purba Burdwan.",
    textBn: "পূর্ব বর্ধমান জুড়ে নিখুঁত কাঠের কাজ ও পরিচ্ছন্ন ফলস সিলিং ফিনিশ।",
    tags: ["workmanship"],
    likes: 1,
  },
  {
    id: "rev-16",
    name: "Sk Jakir",
    avatarInitial: "S",
    color: "from-sky-500 to-indigo-600",
    localGuide: false,
    reviewsCount: "Google Reviewer",
    timeAgo: "2 years ago",
    timeAgoBn: "২ বছর আগে",
    rating: 5,
    text: "Reliable team for bedroom cupboards and living room TV cabinets.",
    textBn: "বেডরুমের আলমারি ও লিভিং রুমের আধুনিক টিভি ক্যাবিনেটের জন্য বিশ্বস্ত টিম।",
    tags: ["workmanship"],
    likes: 1,
  },
  {
    id: "rev-17",
    name: "Puja Prodhan",
    avatarInitial: "P",
    color: "from-rose-500 to-pink-600",
    localGuide: false,
    reviewsCount: "Google Reviewer",
    timeAgo: "2 years ago",
    timeAgoBn: "২ বছর আগে",
    rating: 5,
    text: "Branded materials and clear communication directly with Samarjit.",
    textBn: "ব্র্যান্ডেড উপাদান এবং সরাসরি সমরজিৎ শর্মার চমৎকার গাইডেন্স।",
    tags: ["behaviour", "workmanship"],
    likes: 1,
  },
]

