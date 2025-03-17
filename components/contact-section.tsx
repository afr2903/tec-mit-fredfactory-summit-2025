import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted" id="contact">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Have questions about the TEC-MIT FrED Factory Summit? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground">erickramce@tec.mx</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
            <Phone className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-muted-foreground">+52 (812) 000 9844</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
            <MapPin className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Venue</h3>
            <p className="text-muted-foreground">Tecnológico de Monterrey</p>
            <p className="text-muted-foreground">Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64700</p>
          </div>
        </div>
      </div>
    </section>
  )
}

