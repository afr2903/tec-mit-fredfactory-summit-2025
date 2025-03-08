import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              TEC-MIT FrED Factory Summit
            </h1>
            <p className="text-xl md:text-2xl text-white/80">Transforming Education Through Innovation</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 justify-center">
              <CalendarDays className="h-5 w-5" />
              <span className="text-lg">June 15-19, 2025</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">MIT Campus, Cambridge, MA</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/agenda">View Agenda</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

