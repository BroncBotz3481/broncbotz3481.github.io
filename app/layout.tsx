import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BroncBotz - FIRST Robotics Team",
  description:
    "Student-led robotics team competing in FIRST Tech Challenge and FIRST Robotics Competition based in San Antonio, Texas since 2011.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
