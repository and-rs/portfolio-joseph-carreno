import { ReactNode } from "react"

interface props {
  children: ReactNode
  className?: string
  id?: string
}

export default function Container({ children, className, id }: props) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="grid place-items-center p-8 pt-20 mx-auto max-w-screen-lg h-full">
        {children}
      </div>
    </section>
  )
}
