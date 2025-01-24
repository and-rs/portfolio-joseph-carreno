import { CldImage } from "next-cloudinary";

interface props {
  src: string;
  className?: string;
}

export default function ImageContainer({ src, className }: props) {
  return (
    <div
      className={`ring-primary/30 hover:ring-secondary relative h-full w-full overflow-hidden border-2 border-transparent object-center inset-ring-2 ring transition ${className}`}
    >
      <CldImage
        className="object-cover"
        alt="Featured Image"
        loading="lazy"
        sizes="20vw"
        src={src}
        fill
      />
    </div>
  );
}
