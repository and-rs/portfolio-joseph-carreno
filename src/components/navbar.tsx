import { MenuIcon } from "lucide-react";
import Links from "./links";

export default function Navbar() {
  return (
    <nav className="fixed flex h-20 w-full px-8 backdrop-blur">
      <div className="flex w-full justify-between">
        <div className="self-center text-start text-5xl font-medium tracking-tighter text-primary max-sm:text-xl">
          Joseph Carreno
        </div>

        <div className="invisible flex justify-center gap-4">
          <Links name="Home" href="#"></Links>
          <Links name="Works" href="#"></Links>
          <Links name="Contact" href="#"></Links>
        </div>
        <div className="hidden self-center">
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}
