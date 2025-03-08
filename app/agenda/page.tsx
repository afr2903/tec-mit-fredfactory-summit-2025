import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { AgendaFullSection } from "@/components/agenda-full-section"

export default function AgendaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Event Agenda</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join us for a week of innovation, collaboration, and learning at the TEC-MIT FrED Factory Summit. Below
            you'll find the complete schedule of events, speakers, and sessions.
          </p>
          <AgendaFullSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

