import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SpeakersPreviewSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Featured Speakers</h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Learn from leading experts in education, technology, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Dr. Maria Rodriguez"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. Maria Rodriguez</h3>
            <p className="text-primary">Tecnológico de Monterrey</p>
            <p className="text-sm text-muted-foreground mt-2">Director of Educational Innovation</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Prof. James Chen"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Prof. James Chen</h3>
            <p className="text-primary">MIT Media Lab</p>
            <p className="text-sm text-muted-foreground mt-2">Lead Researcher, Future of Learning</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Dr. Sarah Johnson"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
            <p className="text-primary">Harvard University</p>
            <p className="text-sm text-muted-foreground mt-2">Professor of Educational Technology</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Carlos Mendez"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Carlos Mendez</h3>
            <p className="text-primary">Google Education</p>
            <p className="text-sm text-muted-foreground mt-2">Director of Educational Partnerships</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/agenda#speakers">View All Speakers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

