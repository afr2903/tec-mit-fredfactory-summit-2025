import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Register for the Summit</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Complete the form below to secure your spot at the TEC-MIT FrED Factory Summit.
          </p>
          <div className="max-w-4xl mx-auto h-[800px] border rounded-lg overflow-hidden">
            {/* Replace the src with your actual Google Form embed URL */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeCJToLpocEfXo-dAWYlB0IyL-wX-1aCv8mJFZM0fff7dKHrA/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-full"
            >
              Loading registration form...
            </iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

