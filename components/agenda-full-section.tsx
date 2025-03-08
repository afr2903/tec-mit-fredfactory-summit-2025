"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter } from "lucide-react"

export function AgendaFullSection() {
  const [filter, setFilter] = useState("all")

  const filterOptions = [
    { value: "all", label: "All Sessions" },
    { value: "workshop", label: "Workshops" },
    { value: "panel", label: "Panels" },
    { value: "keynote", label: "Keynotes" },
    { value: "networking", label: "Networking" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Full Schedule</h2>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="day1">Day 1</TabsTrigger>
          <TabsTrigger value="day2">Day 2</TabsTrigger>
          <TabsTrigger value="day3">Day 3</TabsTrigger>
          <TabsTrigger value="day4">Day 4</TabsTrigger>
          <TabsTrigger value="day5">Day 5</TabsTrigger>
        </TabsList>

        <TabsContent value="day1" className="space-y-6">
          <h3 className="text-xl font-bold">Monday, June 15, 2025</h3>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Opening Ceremony</CardTitle>
                  <CardDescription>9:00 AM - 10:00 AM | MIT Media Lab Auditorium</CardDescription>
                </div>
                <Badge>Keynote</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Welcome remarks from the presidents of Tecnológico de Monterrey and MIT, outlining the vision for the
                FrED Factory Summit and the week ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dr. David Garza"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. David Garza</p>
                    <p className="text-sm text-muted-foreground">President, Tec de Monterrey</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dr. Sally Kornbluth"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Sally Kornbluth</p>
                    <p className="text-sm text-muted-foreground">President, MIT</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Keynote: The Future of Education</CardTitle>
                  <CardDescription>10:30 AM - 12:00 PM | MIT Media Lab Auditorium</CardDescription>
                </div>
                <Badge>Keynote</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                An inspiring talk on how technology and innovation are reshaping education globally, with insights on
                emerging trends and future directions.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Prof. James Chen"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium">Prof. James Chen</p>
                  <p className="text-sm text-muted-foreground">MIT Media Lab</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Panel: Innovation in Educational Technology</CardTitle>
                  <CardDescription>1:30 PM - 3:00 PM | Building E15, Room 359</CardDescription>
                </div>
                <Badge>Panel</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A diverse panel of experts discussing the latest innovations in educational technology and their impact
                on teaching and learning.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dr. Sarah Johnson"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Harvard University</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Carlos Mendez"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Carlos Mendez</p>
                    <p className="text-sm text-muted-foreground">Google Education</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Networking Reception</CardTitle>
                  <CardDescription>5:00 PM - 7:00 PM | MIT Stata Center</CardDescription>
                </div>
                <Badge>Networking</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join fellow participants for an evening of networking, refreshments, and informal discussions to close
                the first day of the summit.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="day2" className="space-y-6">
          <h3 className="text-xl font-bold">Tuesday, June 16, 2025</h3>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Workshop: Design Thinking for Educators</CardTitle>
                  <CardDescription>9:00 AM - 11:00 AM | Building E14, Room 240</CardDescription>
                </div>
                <Badge>Workshop</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                An interactive workshop introducing design thinking methodologies specifically adapted for educational
                contexts.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Dr. Maria Rodriguez"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium">Dr. Maria Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Tecnológico de Monterrey</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Collaborative Session: Educational Challenges</CardTitle>
                  <CardDescription>1:00 PM - 3:00 PM | Building E15, Room 359</CardDescription>
                </div>
                <Badge>Workshop</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A collaborative session where participants work in cross-institutional teams to identify and begin
                addressing key educational challenges.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="day3" className="space-y-6">
          <h3 className="text-xl font-bold">Wednesday, June 17, 2025</h3>
          <p className="text-muted-foreground">Full schedule coming soon</p>
        </TabsContent>

        <TabsContent value="day4" className="space-y-6">
          <h3 className="text-xl font-bold">Thursday, June 18, 2025</h3>
          <p className="text-muted-foreground">Full schedule coming soon</p>
        </TabsContent>

        <TabsContent value="day5" className="space-y-6">
          <h3 className="text-xl font-bold">Friday, June 19, 2025</h3>
          <p className="text-muted-foreground">Full schedule coming soon</p>
        </TabsContent>
      </Tabs>

      <div id="speakers" className="pt-12 mt-12 border-t">
        <h2 className="text-2xl font-bold mb-8">Featured Speakers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Dr. Maria Rodriguez"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. Maria Rodriguez</h3>
            <p className="text-primary">Tecnológico de Monterrey</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Director of Educational Innovation with over 15 years of experience in developing innovative teaching
              methodologies.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Prof. James Chen"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Prof. James Chen</h3>
            <p className="text-primary">MIT Media Lab</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Lead Researcher at the Future of Learning initiative, focusing on AI applications in education.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Dr. Sarah Johnson"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
            <p className="text-primary">Harvard University</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Professor of Educational Technology researching the impact of digital tools on learning outcomes.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Carlos Mendez"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Carlos Mendez</h3>
            <p className="text-primary">Google Education</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Director of Educational Partnerships, working to bridge the gap between technology companies and
              educational institutions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Dr. Emily Zhang"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. Emily Zhang</h3>
            <p className="text-primary">Stanford University</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Expert in learning analytics and data-driven educational approaches.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-4">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Dr. Miguel Sanchez"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Dr. Miguel Sanchez</h3>
            <p className="text-primary">Tecnológico de Monterrey</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Dean of the School of Engineering and Sciences, pioneering new approaches to STEM education.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

