import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AgendaPreviewSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Event Agenda</h2>
          <p className="text-lg text-muted-foreground max-w-[800px]">
            Explore our comprehensive program of workshops, panels, and networking events
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
            <TabsTrigger value="day4">Day 4</TabsTrigger>
            <TabsTrigger value="day5">Day 5</TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 1: Opening & Keynotes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">9:00 AM - 10:00 AM</div>
                  <div className="text-lg font-bold">Opening Ceremony</div>
                  <div className="text-muted-foreground">MIT Media Lab Auditorium</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">10:30 AM - 12:00 PM</div>
                  <div className="text-lg font-bold">Keynote: The Future of Education</div>
                  <div className="text-muted-foreground">MIT Media Lab Auditorium</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">1:30 PM - 3:00 PM</div>
                  <div className="text-lg font-bold">Panel: Innovation in Educational Technology</div>
                  <div className="text-muted-foreground">Building E15, Room 359</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day2" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 2: Workshops & Collaboration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">9:00 AM - 11:00 AM</div>
                  <div className="text-lg font-bold">Workshop: Design Thinking for Educators</div>
                  <div className="text-muted-foreground">Building E14, Room 240</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">1:00 PM - 3:00 PM</div>
                  <div className="text-lg font-bold">Collaborative Session: Educational Challenges</div>
                  <div className="text-muted-foreground">Building E15, Room 359</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day3" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 3: Technology & Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">View the full agenda for more details</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day4" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 4: Research & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">View the full agenda for more details</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day5" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 5: Closing & Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">View the full agenda for more details</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/agenda">View Full Agenda</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

