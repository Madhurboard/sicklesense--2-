"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"
import StaggeredChild from "@/components/animations/staggered-child"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnimatedGradient from "@/components/animations/animated-gradient"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <AnimatedGradient className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-4"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
              <FadeIn>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Have questions about SickleSense? We're here to help. Reach out to our team for support, feedback, or
                  partnership inquiries.
                </p>
              </FadeIn>
            </div>
          </div>
        </AnimatedGradient>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn>
                <Card className="overflow-hidden border-teal-100">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4"
                        >
                          <Send className="h-8 w-8 text-teal-700" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We'll respond to your inquiry within 24-48 hours.
                        </p>
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          className="bg-teal-600 hover:bg-teal-700 transition-all duration-300"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formState.name}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={formState.email}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <Select
                            value={formState.inquiryType}
                            onValueChange={(value) => handleSelectChange("inquiryType", value)}
                          >
                            <SelectTrigger className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Enter message subject"
                            value={formState.subject}
                            onChange={handleInputChange}
                            className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            value={formState.message}
                            onChange={handleInputChange}
                            className="min-h-[120px] transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                            required
                          />
                        </div>
                      </form>
                    )}
                  </CardContent>
                  {!isSubmitted && (
                    <CardFooter className="bg-gradient-to-r from-white to-teal-50/30">
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-teal-600 hover:bg-teal-700 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </FadeIn>

              <div className="space-y-8">
                <StaggeredChildren>
                  <StaggeredChild>
                    <Card className="overflow-hidden border-teal-100 transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-100 p-3 rounded-full">
                            <Mail className="h-5 w-5 text-teal-700" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Email Us</h3>
                            <p className="text-sm text-muted-foreground mb-2">For general inquiries and support</p>
                            <a
                              href="mailto:info@sicklesense.com"
                              className="text-teal-600 hover:underline transition-colors duration-200"
                            >
                              info@sicklesense.com
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredChild>

                  <StaggeredChild>
                    <Card className="overflow-hidden border-teal-100 transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-100 p-3 rounded-full">
                            <Phone className="h-5 w-5 text-teal-700" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Call Us</h3>
                            <p className="text-sm text-muted-foreground mb-2">Speak directly with our support team</p>
                            <a
                              href="tel:+1-800-123-4567"
                              className="text-teal-600 hover:underline transition-colors duration-200"
                            >
                              +1 (800) 123-4567
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredChild>

                  <StaggeredChild>
                    <Card className="overflow-hidden border-teal-100 transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-100 p-3 rounded-full">
                            <MapPin className="h-5 w-5 text-teal-700" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Visit Us</h3>
                            <p className="text-sm text-muted-foreground mb-2">Our headquarters location</p>
                            <address className="not-italic text-sm">
                              123 Medical Center Drive
                              <br />
                              Suite 200
                              <br />
                              Boston, MA 02115
                            </address>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredChild>

                  <StaggeredChild>
                    <Card className="overflow-hidden border-teal-100 transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-100 p-3 rounded-full">
                            <Clock className="h-5 w-5 text-teal-700" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Business Hours</h3>
                            <p className="text-sm text-muted-foreground mb-2">When you can reach our team</p>
                            <div className="text-sm space-y-1">
                              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                              <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                              <p>Sunday: Closed</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredChild>
                </StaggeredChildren>

                <FadeIn delay={0.4}>
                  <Card className="overflow-hidden border-teal-100">
                    <CardContent className="p-0">
                      <div className="relative h-[300px] w-full bg-muted">
                        <img
                          src="/images/map-background.png"
                          alt="Office location map"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white p-4 rounded-lg shadow-lg max-w-[80%]">
                            <h3 className="font-bold text-sm mb-1">SickleSense Headquarters</h3>
                            <p className="text-xs text-muted-foreground">123 Medical Center Drive, Boston, MA</p>
                            <Button size="sm" className="mt-2 bg-teal-600 hover:bg-teal-700 text-xs">
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <FadeIn>
                <h2 className="text-2xl font-bold">Connect With Us</h2>
                <p className="mt-2 text-muted-foreground">Follow us on social media for updates, news, and resources</p>
              </FadeIn>
            </div>

            <div className="flex justify-center space-x-6">
              <FadeIn delay={0.1}>
                <a
                  href="#"
                  className="bg-white p-3 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110"
                >
                  <Facebook className="h-6 w-6 text-blue-600" />
                  <span className="sr-only">Facebook</span>
                </a>
              </FadeIn>
              <FadeIn delay={0.2}>
                <a
                  href="#"
                  className="bg-white p-3 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110"
                >
                  <Twitter className="h-6 w-6 text-sky-500" />
                  <span className="sr-only">Twitter</span>
                </a>
              </FadeIn>
              <FadeIn delay={0.3}>
                <a
                  href="#"
                  className="bg-white p-3 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-blue-700" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </FadeIn>
              <FadeIn delay={0.4}>
                <a
                  href="#"
                  className="bg-white p-3 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110"
                >
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <span className="sr-only">Instagram</span>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

