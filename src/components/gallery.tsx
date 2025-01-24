"use client";

import Container from "./ui/container";
import ImageContainer from "./ui/image-container";

export default function Gallery() {
  return (
    <Container>
      <div className="grid h-[500px] grid-cols-3 grid-rows-2 place-items-center gap-2">
        <ImageContainer src={`carreno_portfolio/${1}`} />
        <ImageContainer src={`carreno_portfolio/${3}`} />
        <ImageContainer className="row-span-2" src={`carreno_portfolio/${2}`} />
      </div>
    </Container>
  );
}
