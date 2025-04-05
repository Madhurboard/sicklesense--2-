import Link from "next/link"
import { Microscope } from "lucide-react"

export default function SiteFooter() {
  return (
    
    <footer className="border-t bg-white pl-5">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <Microscope className="h-5 w-5 text-teal-600" />
            <span className="text-lg font-bold">SickleSense</span>
          </div>
          <p className="text-sm text-muted-foreground">Early detection for better health outcomes.</p>
        </div>
        <div className="md:ml-auto grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/detection"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Detection
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 SickleSense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

