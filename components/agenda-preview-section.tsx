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
                <CardTitle className="text-xl">Day 1: Inaugurations & Openings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">9:00 AM - 10:00 AM</div>
                  <div className="text-lg font-bold">Inauguration - FrED and the FrED Factory Ecosystem</div>
                  <div className="text-muted-foreground">Library 2nd floor</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">10:00 AM - 11:00 AM</div>
                  <div className="text-lg font-bold">Opening of the FrED Factory Lab</div>
                  <div className="text-muted-foreground">Aulas 7 235</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">4:00 PM - 5:00 PM</div>
                  <div className="text-lg font-bold">FrED Factory Challenge Kickoff</div>
                  <div className="text-muted-foreground">Sala Fábula</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day2" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 2: Research & Workshops</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">9:00 AM - 11:00 AM</div>
                  <div className="text-lg font-bold">Research talk and Kick off</div>
                  <div className="text-muted-foreground">Aulas 6-306</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">1:00 PM - 2:00 PM</div>
                  <div className="text-lg font-bold">Talks Internship (Tec students at MIT)</div>
                  <div className="text-muted-foreground">Biotechnology Auditorium</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">6:00 PM - 7:00 PM</div>
                  <div className="text-lg font-bold">Conference on the Future of FrED</div>
                  <div className="text-muted-foreground">Biotechnology Auditorium</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day3" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 3: Research & Computer Vision Workshops</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">9:00 AM - 11:00 AM</div>
                  <div className="text-lg font-bold">Research Collaborations with FrED and FrED Factory</div>
                  <div className="text-muted-foreground">TBD</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">9:00 AM - 12:00 PM</div>
                  <div className="text-lg font-bold">MIT FrED Workshop - Computer Vision</div>
                  <div className="text-muted-foreground">Aulas 7 lab</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day4" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 4: Control Systems & IoT Workshops</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">9:00 AM - 12:00 PM</div>
                  <div className="text-lg font-bold">MIT FrED Workshop - Control systems</div>
                  <div className="text-muted-foreground">Aulas 7 lab</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">3:00 PM - 6:00 PM</div>
                  <div className="text-lg font-bold">Tec Al-FrED-0 Workshop - IoT</div>
                  <div className="text-muted-foreground">Aulas 7 lab</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day5" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Day 5: IoT & Data Analysis Workshops</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">9:00 AM - 12:00 PM</div>
                  <div className="text-lg font-bold">MIT FrED Workshop - IoT</div>
                  <div className="text-muted-foreground">Aulas 7 lab</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <div className="font-medium">3:00 PM - 6:00 PM</div>
                  <div className="text-lg font-bold">Tec Al-FrED-0 Workshop - Data Analysis</div>
                  <div className="text-muted-foreground">Aulas 7 lab</div>
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

