import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arnold Imuran - Portfolio",
  description: "Cybersecurity Specialist • ML Explorer • Data Analyst • Developer",
  keywords: "Arnold Imuran, Cybersecurity, Machine Learning, Data Analysis, Software Development, Portfolio",
  authors: [{ name: "Arnold Imuran" }],
  openGraph: {
    title: "Arnold Imuran - Portfolio",
    description: "Cybersecurity Specialist • ML Explorer • Data Analyst • Developer",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
