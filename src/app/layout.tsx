import Navbar from "@/components/navbar"
import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"

const font = Archivo({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Joseph Carreno",
  description: "Artist and Illustrator",
  icons: "/favicon.ico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Navbar />
        <div className="overflow-clip">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
