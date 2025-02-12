import { Loader, MousePointerClick } from "lucide-react"
import Image from "next/image"
import React from "react"
import {
  Credenza,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "./credenza"

interface ImageGridProps {
  images: {
    src: string
    alt: string
    icon?: boolean
  }[]
  columns?: 2 | 3 | 4
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
}) => {
  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns]

  return (
    <section>
      <div
        className={`grid ${gridClass} my-4 gap-4`}
        aria-label="Image gallery"
      >
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            {image.icon && (
              <>
                <MousePointerClick className="absolute right-0 bottom-0 z-40 m-1 animate-ping stroke-[1.75] text-background/40" />
                <MousePointerClick className="absolute right-0 bottom-0 z-50 m-1 stroke-[1.75] fill-background text-foreground" />
              </>
            )}
            {image.src && <ImageCredenza alt={image.alt} src={image.src} />}
          </div>
        ))}
      </div>
    </section>
  )
}

function ImageCredenza({ alt, src }: { alt: string; src: string }) {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <div className="relative size-full">
          <div className="flex absolute justify-center border-4 border-transparent animate-pulse bg-foreground/30 size-full">
            <Loader className="self-center m-auto opacity-70 animate-spin size-10" />
          </div>
          <Image
            className="object-cover z-30 border-2 ring transition border-background ring-primary/30 brightness-95 hover:contrast-75 hover:ring-secondary"
            sizes="(max-width: 768px) 50vw, 33vw"
            draggable={false}
            alt={alt}
            src={src}
            priority
            fill
          />
        </div>
      </CredenzaTrigger>
      <CredenzaContent className="min-h-[80%]">
        <CredenzaHeader className="sr-only">
          <CredenzaTitle>Work Picture</CredenzaTitle>
          <CredenzaDescription>
            Illustration or artwork made by Joseph Carreno
          </CredenzaDescription>
        </CredenzaHeader>

        <div className="relative">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            draggable={false}
            loading="lazy"
            alt={alt}
            src={src}
            fill
          />
          <div className="flex absolute justify-center size-full -z-10">
            <Loader className="self-center m-auto opacity-70 animate-spin size-10" />
          </div>
        </div>
      </CredenzaContent>
    </Credenza>
  )
}
