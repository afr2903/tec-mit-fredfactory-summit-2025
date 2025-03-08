import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function RegistrationSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="register">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Register for the Summit</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Secure your spot at the TEC-MIT FrED Factory Summit and be part of shaping the future of education
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">Early Bird</CardTitle>
              <CardDescription>For registrations before April 30, 2025</CardDescription>
              <div className="mt-4 text-4xl font-bold">$499</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Full access to all summit sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Networking events</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Digital materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Certificate of participation</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="#register-form">Register Now</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <CardTitle className="text-xl">Standard</CardTitle>
              <CardDescription>For registrations after April 30, 2025</CardDescription>
              <div className="mt-4 text-4xl font-bold">$699</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Full access to all summit sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Networking events</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Digital materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Certificate of participation</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="#register-form">Register Now</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">Group Rate</CardTitle>
              <CardDescription>For groups of 3 or more</CardDescription>
              <div className="mt-4 text-4xl font-bold">$399</div>
              <div className="text-sm text-muted-foreground">per person</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Full access to all summit sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Networking events</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Digital materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Certificate of participation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Group coordination support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="#register-form">Register Group</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mx-auto max-w-3xl mt-12" id="register-form">
          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>Fill out the form below to register for the summit</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="institution" className="text-sm font-medium">
                    Institution/Organization
                  </label>
                  <input
                    id="institution"
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Enter your institution or organization"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="role" className="text-sm font-medium">
                    Role
                  </label>
                  <select id="role" className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="">Select your role</option>
                    <option value="educator">Educator</option>
                    <option value="administrator">Administrator</option>
                    <option value="researcher">Researcher</option>
                    <option value="student">Student</option>
                    <option value="industry">Industry Professional</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="ticket-type" className="text-sm font-medium">
                    Ticket Type
                  </label>
                  <select id="ticket-type" className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="">Select ticket type</option>
                    <option value="early-bird">Early Bird ($499)</option>
                    <option value="standard">Standard ($699)</option>
                    <option value="group">Group Rate ($399 per person)</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link href="#" className="text-primary underline">
                      terms and conditions
                    </Link>
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Complete Registration</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

