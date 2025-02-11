import Image from "next/image"
import logo from "../../public/android-chrome-512x512.png"

export default function Navbar() {
  return (
    <nav className="flex fixed z-50 px-8 w-full h-20 border-primary/30 border-b-1 backdrop-blur-sm">
      <div className="flex justify-between w-full">
        <Image
          src={logo}
          alt="logo"
          className="self-center aspect-square size-12"
        />
      </div>
    </nav>
  )
}
