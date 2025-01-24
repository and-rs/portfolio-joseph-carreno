import Image from "next/image";
import logo from "../../public/android-chrome-512x512.png";

export default function Navbar() {
  return (
    <nav className="border-primary/30 fixed z-50 flex h-20 w-full border-b-1 px-8 backdrop-blur-sm">
      <div className="flex w-full justify-between">
        <Image
          src={logo}
          alt="logo"
          className="aspect-square size-12 self-center"
        />
      </div>
    </nav>
  );
}
