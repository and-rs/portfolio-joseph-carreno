"use client"

import Container from "./ui/container"

export default function Contact() {
  const artistEmail = "alexno3002@gmail.com"

  return (
    <Container
      id="contact"
      className="h-[600px] background border-y border-primary/20"
    >
      <div className="flex flex-col justify-items-center my-auto text-center">
        <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
        <p className="mb-8 text-xl">
          For inquiries, collaborations, or just to say hello:
        </p>
        <div className="mb-8">
          <a
            href={`mailto:${artistEmail}`}
            className="text-2xl font-medium hover:underline"
          >
            {artistEmail}
          </a>
        </div>
      </div>
    </Container>
  )
}
