import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Head from "next/head";

const font = Archivo({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Joseph Carreno",
  description: "Artist and Illustrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={font.className}>
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
