import Image from "next/image";
import { Separator } from "./ui/separator";
import logo from "../../public/logo.png";

export default function Hero() {
  return (
    <div className="background border-primary/20 flex flex-col justify-center border-b py-8">
      <div className="mx-auto max-w-screen-lg px-8">
        <HeroDescription />
        <Separator className="my-8" />
        <HeroQuote />
      </div>
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      <div className="flex flex-col justify-center space-y-4 self-center">
        <span className="text-2xl font-medium">Joseph Carreno</span>
        <p className="text-2xl font-light">
          An <b>illustrator</b> and <b>artist</b> based in New York City,
          specializing in brand design with strong expertise in the Adobe
          Creative Suite. Committed to continuous learning, I focus on
          effectively communicating messages through their designs, ensuring
          each connects with its audience.
        </p>
      </div>

      <div className="aspect-square size-64 self-center">
        <Image src={logo} alt="spinning logo" className="animate-spin-slow" />
      </div>
    </div>
  );
}

function HeroQuote() {
  return (
    <>
      <span className="text-4xl font-medium tracking-tighter md:text-6xl">
        Art explores ideas; illustration communicates them.
      </span>
      <div className="text-secondary text-5xl font-medium tracking-tighter md:text-8xl">
        Concepts turned into visuals.
      </div>
    </>
  );
}
