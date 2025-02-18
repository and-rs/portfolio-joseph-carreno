"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import Container from "./ui/container"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

const email = "alexno3002@gmail.com"

export default function Contact() {
  return (
    <Container
      id="contact"
      className="pb-10 h-[300px] background border-y border-primary/20"
    >
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-xl">
          For inquiries, collaborations, or just to say hello
        </p>

        <TooltipProvider delayDuration={300}>
          <TooltipEmail />
        </TooltipProvider>
      </div>
    </Container>
  )
}

function TooltipEmail() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email: ", err)
    }
  }

  return (
    <Tooltip open={isCopied}>
      <TooltipTrigger asChild>
        <Button
          variant={"ghost"}
          className="gap-2 text-xl"
          onClick={handleCopyClick}
        >
          {email}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copied!</p>
      </TooltipContent>
    </Tooltip>
  )
}
