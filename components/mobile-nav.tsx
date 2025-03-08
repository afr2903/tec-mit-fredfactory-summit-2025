"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#about"
            className="text-lg font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#schedule"
            className="text-lg font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Schedule
          </Link>
          <Link
            href="#speakers"
            className="text-lg font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Speakers
          </Link>
          <Link
            href="#venue"
            className="text-lg font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Venue
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium hover:underline underline-offset-4"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="mt-4">
            <Link href="#register" onClick={() => setOpen(false)}>
              Register Now
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

