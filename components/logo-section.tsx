import Image from "next/image"

export function LogoSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Organized By</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A collaborative initiative between two world-class educational institutions
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Tecnológico de Monterrey Logo"
              className="h-24 object-contain"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Tecnológico de Monterrey</h3>
              <p className="text-muted-foreground">
                A private, non-profit educational institution founded in 1943, recognized as one of the most prestigious
                universities in Latin America.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Massachusetts Institute of Technology Logo"
              className="h-24 object-contain"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Massachusetts Institute of Technology</h3>
              <p className="text-muted-foreground">
                A private research university founded in 1861, renowned globally for its leadership in science,
                engineering, and technological education.
              </p>
            </div>
          </div>
        </div>
        {/*<div className="mx-auto max-w-5xl border-t pt-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Supporting Partners</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=100&width=200"
                width={200}
                height={100}
                alt="Partner Logo 1"
                className="h-12 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=100&width=200"
                width={200}
                height={100}
                alt="Partner Logo 2"
                className="h-12 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=100&width=200"
                width={200}
                height={100}
                alt="Partner Logo 3"
                className="h-12 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=100&width=200"
                width={200}
                height={100}
                alt="Partner Logo 4"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  )
}

