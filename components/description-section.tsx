import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Rocket } from "lucide-react"

export function DescriptionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About FrED Factory Week</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A collaborative initiative between Tecnológico de Monterrey and the Massachusetts Institute of Technology
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Transforming Education Through Innovation</h3>
              <p className="text-muted-foreground">
                The FrED Factory Summit brings together educators, researchers, technologists, and industry leaders to
                explore the future of education. This collaborative initiative between Tecnológico de Monterrey and MIT
                aims to develop innovative solutions to educational challenges through design thinking, technology
                integration, and cross-disciplinary collaboration.
              </p>
              <p className="text-muted-foreground mt-4">
                During this week-long summit, participants will engage in workshops, panel discussions, design sprints,
                and networking events designed to foster innovation and create lasting partnerships between our
                institutions.
              </p>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            width={600}
            height={400}
            alt="Collaboration between TEC and MIT"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Innovation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Explore cutting-edge educational technologies and methodologies that are reshaping how we teach and
                learn.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Collaboration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with peers from diverse backgrounds to share insights, challenges, and solutions in educational
                innovation.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Rocket className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Transformation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Develop actionable strategies to implement innovative approaches in your educational context.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

