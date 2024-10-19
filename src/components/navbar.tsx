import Links from "./links";

export default function Navbar() {
  return (
    <nav className="fixed flex h-20 w-full px-4 backdrop-blur">
      <div className="flex w-full justify-between">
        <div className="self-center text-start text-5xl font-medium tracking-tighter text-primary">
          Joseph Carreno
        </div>

        <div className="flex justify-center gap-4">
          <Links name="Home" href="#"></Links>
          <Links name="Works" href="#"></Links>
          <Links name="Contact" href="#"></Links>
        </div>
      </div>
    </nav>
  );
}
