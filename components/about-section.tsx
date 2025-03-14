import Image from "next/image"

export function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">About FrED Factory Week</h2>
            <p className="text-lg text-muted-foreground">
              The FrED Factory Summit is a collaborative initiative between Tecnológico de Monterrey and the
              Massachusetts Institute of Technology (MIT) focused on the future of education.
            </p>
            <p className="text-lg text-muted-foreground">
              This week-long event brings together educators, researchers, technologists, and industry leaders to
              explore innovative approaches to educational challenges through design thinking, technology integration,
              and cross-disciplinary collaboration.
            </p>
            <p className="text-lg text-muted-foreground">
              Participants will engage in workshops, panel discussions, design sprints, and networking events designed
              to foster innovation and create lasting partnerships between our institutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="FrED Factory Workshop"
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Collaboration Session"
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Design Sprint"
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Panel Discussion"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=120&width=240"
              width={240}
              height={120}
              alt="Tecnológico de Monterrey Logo"
              className="h-20 object-contain mx-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=120&width=240"
              width={240}
              height={120}
              alt="Massachusetts Institute of Technology Logo"
              className="h-20 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

