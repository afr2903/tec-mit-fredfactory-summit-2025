import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AgendaPreviewSection } from "@/components/agenda-preview-section"
import { SpeakersPreviewSection } from "@/components/speakers-preview-section"
import { ContactSection } from "@/components/contact-section"
import { LogoSection } from "@/components/logo-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <AgendaPreviewSection />
        <LogoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

