"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/tec_logo.svg?height=40&width=200"
              alt="Tecnológico de Monterrey"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/mit_logo.png?height=40&width=200"
              alt="MIT"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=200"
              alt="FrED Factory"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium text-primary hover:text-synergy">
            Home
          </Link>
          <Link href="/agenda" className="text-sm font-medium text-primary hover:text-synergy">
            Agenda
          </Link>
          <Button asChild className="bg-synergy hover:bg-synergy/90 text-white">
            <Link href="/register">Register Now</Link>
          </Button>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-synergy" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/agenda" className="text-lg font-medium hover:text-synergy" onClick={() => setOpen(false)}>
                Agenda
              </Link>
              <Button asChild className="mt-4 bg-synergy hover:bg-synergy/90">
                <Link href="/register" onClick={() => setOpen(false)}>
                  Register Now
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

