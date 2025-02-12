import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import logo from "../../public/android-chrome-512x512.png"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <HorizontalLayout>
      <Image
        src={logo}
        alt="logo"
        className="self-center aspect-square size-12"
      />
      <div className="flex flex-row gap-2 justify-center self-center">
        <LinkButton href="#home">Home</LinkButton>
        <LinkButton href="#work">Work</LinkButton>
        <LinkButton href="#contact">Contact</LinkButton>
      </div>
    </HorizontalLayout>
  )
}

function LinkButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link href={href}>
      <Button size={"sm"} variant={"link"} className="text-md">
        {children}
      </Button>
    </Link>
  )
}

function HorizontalLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <header className="fixed z-50 w-full h-20 border-primary/30 border-b-1 bg-background/70 backdrop-blur-3xl">
      <nav className="flex flex-row justify-between px-8 mx-auto w-full max-w-screen-lg h-full">
        {children}
      </nav>
    </header>
  )
}
