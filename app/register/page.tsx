"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import AnimatedGradient from "@/components/animations/animated-gradient"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/"
    }, 1500)
  }

  return (
    <AnimatedGradient className="min-h-screen flex flex-col items-center justify-center p-4">
      <Link
        href="/"
        className="absolute top-8 left-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <motion.div
        className="flex items-center gap-2 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <Microscope className="h-6 w-6 text-teal-600" />
        </motion.div>
        <span className="text-xl font-bold">SickleSense</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <Card className="border-teal-100 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
            <CardTitle>Create an Account</CardTitle>
            <CardDescription>Register to use SickleSense detection services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
                  required
                />
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm leading-tight">
                  I agree to the{" "}
                  <Link href="/terms" className="text-teal-600 hover:underline transition-colors duration-200">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-teal-600 hover:underline transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-gradient-to-r from-white to-teal-50/30">
            <Button
              className="w-full bg-teal-600 hover:bg-teal-700 transition-all duration-300"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              ) : (
                "Create Account"
              )}
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-600 hover:underline transition-colors duration-200">
                Log In
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatedGradient>
  )
}

