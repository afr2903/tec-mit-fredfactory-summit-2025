import Image from "next/image"

export function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">About FrED Factory Week</h2>
            <p className="text-lg text-muted-foreground">
              Fiber Extrusion Device (FrED) is a desktop fiber extrusion system that mimics continuous fiber draw process for hands-on learning and/or laboratory experience on data acquisition, control system, and smart manufacturing.
            </p>
            <p className="text-lg text-muted-foreground">
              The FrED Factory Summit is a collaborative initiative between Tecnológico de Monterrey and the
              Massachusetts Institute of Technology (MIT) focused sharing the vision about the future of Manufacturing Education.
            </p>
            <p className="text-lg text-muted-foreground">
              This week-long event brings together educators, researchers, technologists, and industry leaders to
              explore our innovative approaches to educational challenges through technology integration
              and cross-disciplinary collaboration.
            </p>
            <p className="text-lg text-muted-foreground">
              Participants will engage in workshops, panel discussions, and networking events designed to foster innovation.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/mit-presentation.JPEG?height=300&width=400"
                width={400}
                height={300}
                alt="MIT FrED Presentation"
                className="rounded-lg object-cover"
              />
              <Image
                src="/tec-3rd-gen.png?height=300&width=400"
                width={400}
                height={300}
                alt="ASM Tec 3rd Generation"
                className="rounded-lg object-cover"
              />
              <Image
                src="/alfredo.png?height=300&width=400"
                width={400}
                height={300}
                alt="Al-FrED-0"
                className="rounded-lg object-cover"
              />
              <Image
                src="/mit-fred-lab.jpeg?height=300&width=400"
                width={400}
                height={300}
                alt="MIT FrED Lab"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="text-center">
            <Image
              src="/tec_logo.svg?height=120&width=240"
              width={240}
              height={120}
              alt="Tecnológico de Monterrey Logo"
              className="h-20 object-contain mx-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/mit_logo.png?height=120&width=240"
              width={240}
              height={120}
              alt="Massachusetts Institute of Technology Logo"
              className="h-20 object-contain mx-auto"
            />
          </div>
          <div className="text-center">
            <Image
              src="/fred-logo.png?height=120&width=240"
              width={240}
              height={120}
              alt="FrED Factory Logo"
              className="h-20 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

