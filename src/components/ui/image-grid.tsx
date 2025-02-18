import { Loader, MousePointerClick, XIcon } from "lucide-react"
import React from "react"
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from "./morphing-dialog"

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
                <MousePointerClick className="absolute right-0 bottom-0 z-10 m-1 animate-ping stroke-[1.75] size-8 text-background/40" />
                <MousePointerClick className="absolute right-0 bottom-0 z-10 m-1 stroke-[1.75] text-background size-8" />
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
    <>
      <MorphingDialog
        transition={{
          duration: 0.1,
          ease: "easeIn",
        }}
      >
        <MorphingDialogTrigger>
          <div className="overflow-hidden relative rounded border shadow-xl border-border/50 aspect-square size-full">
            <div className="flex absolute justify-center border-4 border-transparent animate-pulse bg-foreground/30 size-full">
              <Loader className="self-center m-auto opacity-70 animate-spin size-10" />
            </div>
            <MorphingDialogImage
              src={src}
              alt={alt}
              className="object-cover rounded transition size-full brightness-95 hover:contrast-75"
            />
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative">
            <MorphingDialogImage
              src={src}
              alt={alt}
              className="object-cover rounded border size-full max-w-[90vw] border-border/50 lg:h-[90vh]"
            />
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 p-1 bg-white rounded-full h-fit w-fit"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { duration: 0.1, ease: "easeOut" },
              },
              exit: {
                opacity: 0,
                transition: { duration: 0, ease: "easeOut" },
              },
            }}
          >
            <XIcon className="w-5 h-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    </>
  )
}
