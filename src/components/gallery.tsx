"use client"

import Container from "./ui/container"
import { ImageGrid } from "./ui/image-grid"

export default function Gallery() {
  return (
    <Container id="work">
      <ImageGrid
        columns={4}
        images={[
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323857/carreno_portfolio/sutuohnupaxa0wegbskq.jpg",
            icon: true,
            alt: "Illustration design that resembles postcards",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323857/carreno_portfolio/vuplx13ghqrtvgp5xpea.jpg",
            alt: "Graphic design for a t-shirt",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323857/carreno_portfolio/mrkknemztv156oy2awab.jpg",
            alt: "Graphic design for an apple jam brand",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/f_auto,q_auto/v1/carreno_portfolio/a0kh5dbngbr3or7qfuex",
            alt: "Logo that resembles a soda cap, it says rising tide",
          },
        ]}
      />
      <ImageGrid
        columns={3}
        images={[
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323441/carreno_portfolio/jvkl7mtl88cf0frgxknj.png",
            alt: "Graphic design for magazine layout",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323441/carreno_portfolio/p6g5tnobcvfvlnwiu2jk.png",
            alt: "Graphic design for magazine layout",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/f_auto,q_auto/v1/carreno_portfolio/kefm0plsobuxkaaoagck",
            alt: "Logo that resembles an orange cube",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739324742/carreno_portfolio/yyetw4otlclskz0quf7r.jpg",
            alt: "Logo that resembles 3 arrows pointing to the right",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/f_auto,q_auto/v1/carreno_portfolio/gwhzdhfkoiq18qsrp73m",
            alt: "Logo that resembles two letter D's that intersect eachother",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/f_auto,q_auto/v1/carreno_portfolio/scnyuetnnayeirqp5i4y",
            alt: "Logo that resembles a letter J and B",
          },
        ]}
      />
      <ImageGrid
        columns={2}
        images={[
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/q_auto:eco/carreno_portfolio/2",
            alt: "A painting with a wizard traversing a forest",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323311/carreno_portfolio/kbykijhz14sb1i8iimms.webp",
            alt: "A painting with city landscape",
          },
        ]}
      />
    </Container>
  )
}
