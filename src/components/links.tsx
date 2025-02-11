import Link from "next/link"

type LinksProps = {
  name: string
  href: string
}

export default function Links({ name, href }: LinksProps) {
  return (
    <Link href={href} className="self-center">
      <span className="text-primary text-lg font-medium hover:border-y-2">
        {name}
      </span>
    </Link>
  )
}
