import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Hind_Siliguri } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LangProvider } from "@/lib/language-context"
import { FloatingContact } from "@/components/floating-contact"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _bengali = Hind_Siliguri({ subsets: ["bengali"], weight: ["300", "400", "500", "600", "700"], variable: "--font-bengali" })

export const metadata: Metadata = {
  metadataBase: new URL("https://asdesigner.epizy.com"),
  title: "AS Designer — Interior Designer Expert Solutions",
  description:
    "AS Designer is Interior Expert Group. We Provide Best Quality Interior Design in Effortable Price. Services available in Purba Burdwan. Call +919874306034.",
  openGraph: {
    title: "AS Designer — Interior Designer Expert Solutions",
    description:
      "AS Designer is Interior Expert Group. We Provide Best Quality Interior Design in Effortable Price. Purba Burdwan West Bengal.",
    url: "https://asdesigner.epizy.com",
    siteName: "AS Designer",
    images: [
      {
        url: "/images/asdesigner/IMG-20261027-WA0030.jpg",
        width: 1200,
        height: 630,
        alt: "AS Designer — Interior Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Designer — Interior Designer Expert Solutions",
    description:
      "AS Designer is Interior Expert Group in Purba Burdwan. Call +919874306034.",
    images: ["/images/asdesigner/IMG-20261027-WA0030.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_bengali.variable}`}>
        <LangProvider>
          {children}
          <FloatingContact />
        </LangProvider>
        <Analytics />
      </body>
    </html>
  )
}
