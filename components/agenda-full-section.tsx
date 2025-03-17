"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogoSection } from "@/components/logo-section"
import { Filter } from "lucide-react"

// Define event type for better type safety
type EventType =
  | "all"
  | "workshop"
  | "panel"
  | "keynote"
  | "opening"
  | "talk"
  | "conference"
  | "research"
  | "networking"

export function AgendaFullSection() {
  const [filter, setFilter] = useState<EventType>("all")

  const filterOptions = [
    { value: "all", label: "All Sessions" },
    { value: "workshop", label: "Workshops" },
    { value: "panel", label: "Panels" },
    { value: "keynote", label: "Keynotes" },
    { value: "opening", label: "Openings" },
    { value: "talk", label: "Talks" },
    { value: "conference", label: "Conferences" },
  ]

  // Helper function to check if an event should be displayed based on the current filter
  const shouldShowEvent = (eventType: string): boolean => {
    return filter === "all" || eventType.toLowerCase() === filter.toLowerCase()
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Full Schedule</h2>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as EventType)}
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
          <h3 className="text-xl font-bold">Monday, March 24, 2025</h3>

          {shouldShowEvent("keynote") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Inauguration - FrED and the FrED Factory Ecosystem</CardTitle>
                    <CardDescription>9:00 AM - 10:00 AM | Library 2nd floor</CardDescription>
                  </div>
                  <Badge>Keynote</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Welcome remarks and introduction to the FrED and the FrED Factory Ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/erick.jpeg?height=48&width=48"
                        alt="Prof. Erick Ramírez-Cedillo"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Erick Ramírez-Cedillo</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("opening") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Opening of the FrED Factory Lab</CardTitle>
                    <CardDescription>10:00 AM - 11:00 AM | Aulas 7 235</CardDescription>
                  </div>
                  <Badge>Opening</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Official opening ceremony of the FrED Factory Lab.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/erick.jpeg?height=48&width=48"
                        alt="Prof. Erick Ramírez-Cedillo"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Erick Ramírez-Cedillo</p>
                      <p className="text-sm text-muted-foreground">Tecnológico de Monterrey</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("opening") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Opening of the Expedition Rapid 3D Lab</CardTitle>
                    <CardDescription>11:00 AM - 12:00 PM | Expedition</CardDescription>
                  </div>
                  <Badge>Opening</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Official opening ceremony of the Expedition Rapid 3D Lab.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/erick.jpeg?height=48&width=48"
                        alt="Prof. Erick Ramírez-Cedillo"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Erick Ramírez-Cedillo</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("networking") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Industry meeting and tour</CardTitle>
                    <CardDescription>1:00 PM - 3:00 PM | Sala Discovery 4th floor Expedition</CardDescription>
                  </div>
                  <Badge>Networking</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Industry partners meeting and tour (Invited to Inauguration, openings and lunch).
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/erick.jpeg?height=48&width=48"
                        alt="Prof. Erick Ramírez-Cedillo"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Erick Ramírez-Cedillo</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/pedro.jpeg?height=48&width=48"
                        alt="Dr. Pedro Ponce Cruz"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Pedro Ponce-Cruz</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("keynote") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">FrED Factory Challenge Kickoff</CardTitle>
                    <CardDescription>4:00 PM - 5:00 PM | Sala Fábula</CardDescription>
                  </div>
                  <Badge>Keynote</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Kickoff for the FrED Factory Challenge (Only for students in Automation of Manufacturing Systems
                  course).
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/erick.jpeg?height=48&width=48"
                        alt="Prof. Erick Ramírez-Cedillo"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Erick Ramírez-Cedillo</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("keynote") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Manufacturing/Mechanical Class Challenge Kickoff</CardTitle>
                    <CardDescription>Time TBD | Sala Fábula</CardDescription>
                  </div>
                  <Badge>Keynote</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Kickoff for the Manufacturing/Mechanical Class Challenge (Only for students in Mechanical Engineering
                  course).
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="day2" className="space-y-6">
          <h3 className="text-xl font-bold">Tuesday, March 25, 2025</h3>

          {shouldShowEvent("talk") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Research talk Pedro Ponce and Kick off</CardTitle>
                    <CardDescription>9:00 AM - 11:00 AM | Aulas 6-306</CardDescription>
                  </div>
                  <Badge>Talk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Research talk and kick off session for faculty and students.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/pedro.jpeg?height=48&width=48"
                      alt="Dr. Pedro Ponce Cruz"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Pedro Ponce-Cruz</p>
                    <p className="text-sm text-muted-foreground">Tec</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("workshop") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">MIT FrED Workshop - Introduction and Set Up</CardTitle>
                    <CardDescription>11:00 AM - 12:00 PM | Aulas 7 lab</CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Introduction and setup session for the MIT FrED Workshop.</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/sergio.jpeg?height=48&width=48"
                        alt="Sergio Siller"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sergio Siller</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/gil.jpeg?height=48&width=48"
                        alt="Gilberto Ramírez"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Gilberto Ramírez</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/arik.jpeg?height=48&width=48"
                        alt="Arik Gómez"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Arik Gómez</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("talk") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Talks Internship (Tec students at MIT)</CardTitle>
                    <CardDescription>1:00 PM - 2:00 PM | Biotechnology Auditorium</CardDescription>
                  </div>
                  <Badge>Talk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Presentations from Tec students who completed internships at MIT.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/sergio.jpeg?height=48&width=48"
                        alt="Sergio Siller"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sergio Siller</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/gil.jpeg?height=48&width=48"
                        alt="Gilberto Ramírez"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Gilberto Ramírez</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/arik.jpeg?height=48&width=48"
                        alt="Arik Gómez"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Arik Gómez</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/leo.jpeg?height=48&width=48"
                        alt="Leonardo Galán"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Leonardo Galán</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/adan.jpg?height=48&width=48"
                        alt="Adán Flores"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Adán Flores-Ramírez</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/angel.jpeg?height=48&width=48"
                        alt="Ángel Alarcón"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Ángel Alarcón</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/andre.jpeg?height=48&width=48"
                        alt="André Mendoza"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">André Mendoza</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("panel") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Kickoff / Panel Discussion for MIT Research Internship 2025
                    </CardTitle>
                    <CardDescription>2:00 PM - 3:00 PM | Biotechnology Auditorium</CardDescription>
                  </div>
                  <Badge>Panel</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Panel discussion and kickoff for the MIT Research Internship program for 2025.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/sergio.jpeg?height=48&width=48"
                        alt="Sergio Siller"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sergio Siller</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/gil.jpeg?height=48&width=48"
                        alt="Gilberto Ramírez"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Gilberto Ramírez</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/arik.jpeg?height=48&width=48"
                        alt="Arik Gómez"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Arik Gómez</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/leo.jpeg?height=48&width=48"
                        alt="Leonardo Galán"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Leonardo Galán</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/adan.jpg?height=48&width=48"
                        alt="Adán Flores"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Adán Flores-Ramírez</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/angel.jpeg?height=48&width=48"
                        alt="Ángel Alarcón"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Ángel Alarcón</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/andre.jpeg?height=48&width=48"
                        alt="André Mendoza"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">André Mendoza</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("workshop") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Tec Al-FrED-0 Workshop - Introduction and Set Up</CardTitle>
                    <CardDescription>4:00 PM - 5:00 PM | Aulas 7 lab</CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Introduction and setup session for the Tec Al-FrED-0 Workshop.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/leo-an.jpeg?height=48&width=48"
                        alt="Leonardo Andrade Flores"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Leonardo Andrade Flores</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/fer.jpeg?height=48&width=48"
                        alt="María Fernanda De la Cruz Rangel"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">María Fernanda De la Cruz</p>
                      <p className="text-sm text-muted-foreground">Tec</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("talk") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Talk for Professors</CardTitle>
                    <CardDescription>4:00 PM - 6:00 PM | CETEC 315 Torre Norte</CardDescription>
                  </div>
                  <Badge>Talk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Special talk session for professors.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("conference") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Conference on the Future of FrED</CardTitle>
                    <CardDescription>6:00 PM - 7:00 PM | Biotechnology Auditorium</CardDescription>
                  </div>
                  <Badge>Conference</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Conference discussing the future of FrED and its impact on education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/brian-anthony.jpg?height=48&width=48"
                        alt="Dr. Brian Anthony"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Brian Anthony</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/russel.jpeg?height=48&width=48"
                        alt="Russel Bradley"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Russel Bradley</p>
                      <p className="text-sm text-muted-foreground">MIT</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="day3" className="space-y-6">
          <h3 className="text-xl font-bold">Wednesday, March 26, 2025</h3>

          {shouldShowEvent("talk") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Research Collaborations with FrED and FrED Factory</CardTitle>
                    <CardDescription>9:00 AM - 11:00 AM | TBD</CardDescription>
                  </div>
                  <Badge>Talk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Session focused on research collaborations with FrED and FrED Factory.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/pedro.jpeg?height=48&width=48"
                      alt="Dr. Pedro Ponce-Cruz"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Pedro Ponce-Cruz</p>
                    <p className="text-sm text-muted-foreground">Tec</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("workshop") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">MIT FrED Workshop - Computer Vision</CardTitle>
                    <CardDescription>9:00 AM - 12:00 PM | Aulas 7 lab</CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Workshop on Computer Vision applications with MIT FrED.</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/arik.jpeg?height=48&width=48"
                      alt="Arik Gómez"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Arik Gómez</p>
                    <p className="text-sm text-muted-foreground">Tec</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("workshop") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Tec Al-FrED-0 Workshop - Computer Vision</CardTitle>
                    <CardDescription>3:00 PM - 6:00 PM | Aulas 7 lab</CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Workshop on Computer Vision applications with Tec Al-FrED-0.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/fer.jpeg?height=48&width=48"
                      alt="María Fernanda De la Cruz Rangel"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">María Fernanda De la Cruz</p>
                    <p className="text-sm text-muted-foreground">Tec</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="day4" className="space-y-6">
          <h3 className="text-xl font-bold">Thursday, March 27, 2025</h3>

          {shouldShowEvent("workshop") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">MIT FrED Workshop - Control systems</CardTitle>
                    <CardDescription>9:00 AM - 12:00 PM | Aulas 7 lab</CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Workshop on Control Systems with MIT FrED.</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/sergio.jpeg?height=48&width=48"
                      alt="Sergio Siller"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sergio Siller</p>
                    <p className="text-sm text-muted-foreground">Tec</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("workshop") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Tec Al-FrED-0 Workshop - IoT</CardTitle>
                    <CardDescription>3:00 PM - 6:00 PM | Aulas 7 lab</CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Workshop on Internet of Things (IoT) with Tec Al-FrED-0.</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Juan Andrés Sánchez Chaires"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Juan Andrés Sánchez</p>
                    <p className="text-sm text-muted-foreground">Tec</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="day5" className="space-y-6">
          <h3 className="text-xl font-bold">Friday, March 28, 2025</h3>

          {shouldShowEvent("workshop") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">MIT FrED Workshop - IoT</CardTitle>
                    <CardDescription>9:00 AM - 12:00 PM | Aulas 7 lab</CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Workshop on Internet of Things (IoT) with MIT FrED.</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/gil.jpeg?height=48&width=48"
                      alt="Gilberto Ramírez"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Gilberto Ramírez</p>
                    <p className="text-sm text-muted-foreground">Tec</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {shouldShowEvent("workshop") && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Tec Al-FrED-0 Workshop - Data Analysis</CardTitle>
                    <CardDescription>3:00 PM - 6:00 PM | Aulas 7 lab</CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Workshop on Data Analysis with Tec Al-FrED-0.</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Juan Andrés Sánchez Chaires"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Juan Andrés Sánchez</p>
                    <p className="text-sm text-muted-foreground">Tec</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
      <LogoSection />
    </div>
  )
}

