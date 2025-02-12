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
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323857/carreno_portfolio/vuplx13ghqrtvgp5xpea.jpg",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323857/carreno_portfolio/mrkknemztv156oy2awab.jpg",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323598/carreno_portfolio/uryjhjqngpbaedysmgn9.tiff",
            alt: "Car",
          },
        ]}
      />
      <ImageGrid
        columns={3}
        images={[
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323441/carreno_portfolio/jvkl7mtl88cf0frgxknj.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323441/carreno_portfolio/p6g5tnobcvfvlnwiu2jk.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323598/carreno_portfolio/bv1rzti2wmb5i1mdegde.tiff",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739324742/carreno_portfolio/yyetw4otlclskz0quf7r.jpg",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323599/carreno_portfolio/x2stuacts9e2wumuu1mr.tiff",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323599/carreno_portfolio/qamk7uujwl9po2k6irn0.tiff",
            alt: "Car",
          },
        ]}
      />
      <ImageGrid
        columns={2}
        images={[
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1737696538/carreno_portfolio/2.jpg",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1739323311/carreno_portfolio/kbykijhz14sb1i8iimms.webp",
            alt: "Car",
          },
        ]}
      />
    </Container>
  )
}
