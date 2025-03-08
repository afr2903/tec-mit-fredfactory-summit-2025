import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Participants Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Hear from past participants about their experiences at previous FrED Factory events
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="flex items-center justify-center bg-primary p-6">
                  <Quote className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="p-6">
                  <blockquote className="mb-4 text-lg font-medium">
                    "The FrED Factory Summit was a transformative experience that changed how I approach educational
                    innovation in my institution."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Dr. Maria Rodriguez"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">Dr. Maria Rodriguez</div>
                      <div className="text-sm text-muted-foreground">Dean of Education, Universidad de Chile</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="flex items-center justify-center bg-primary p-6">
                  <Quote className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="p-6">
                  <blockquote className="mb-4 text-lg font-medium">
                    "The collaborative environment at the summit fostered connections that have led to ongoing research
                    partnerships between our institutions."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Prof. James Chen"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">Prof. James Chen</div>
                      <div className="text-sm text-muted-foreground">Research Director, Stanford University</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden md:col-span-2 lg:col-span-1">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="flex items-center justify-center bg-primary p-6">
                  <Quote className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="p-6">
                  <blockquote className="mb-4 text-lg font-medium">
                    "As an EdTech entrepreneur, the insights and connections I gained at the FrED Factory Summit were
                    invaluable for refining our product and expanding our market reach."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Sarah Johnson"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">CEO, EduInnovate</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

