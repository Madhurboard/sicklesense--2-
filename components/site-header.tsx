"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import PulseAnimation from "@/components/animations/pulse-animation"

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b sticky top-0 z-10 l-">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <PulseAnimation duration={3}>
            <Microscope className="h-6 w-6 text-teal-600" />
          </PulseAnimation>
          <span className="text-xl font-bold">SickleSense</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            } hover:underline underline-offset-4 transition-all duration-300`}
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className={`text-sm font-medium ${
              pathname === "/how-it-works" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            } hover:underline underline-offset-4 transition-all duration-300`}
          >
            How It Works
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${
              pathname === "/contact" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            } hover:underline underline-offset-4 transition-all duration-300`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
              Log In
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="transition-all duration-300 hover:scale-105">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

