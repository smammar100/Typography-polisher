import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ConductorHeader } from "@/components/conductor-header"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Typography Polisher \u2014 Professional text cleanup for AI agents",
  description:
    "Typography Polisher \u2014 Professional text cleanup for AI agents. One skill, every agent, every browser.",
  openGraph: {
    title: "Typography Polisher",
    description:
      "15 professional typography fixes \u2014 widows, smart quotes, dashes, hyphens, spacing \u2014 across every AI agent and browser.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ConductorHeader />
          <main className="relative pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
