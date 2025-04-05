"use client"

import Link from "next/link"
import { ArrowRight, FileText, Hospital, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedContainer from "@/components/animations/animated-container"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"
import StaggeredChild from "@/components/animations/staggered-child"
import AnimatedGradient from "@/components/animations/animated-gradient"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <AnimatedGradient className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedContainer delay={0.2}>
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Early Detection for Better Health Outcomes
                  </h1>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    SickleSense uses advanced image analysis to detect sickle cell disease from RBC images, providing
                    quick results and connecting you with nearby healthcare facilities.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/detection">
                      <Button size="lg" className="gap-1 transition-all duration-300 hover:scale-105 hover:shadow-md">
                        Start Detection <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#how-it-works">
                      <Button size="lg" variant="outline" className="transition-all duration-300 hover:bg-muted">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedContainer>
              <FadeIn delay={0.4} direction="left">
                <img
                  src="/rbc-microscope.png"
                  alt="Medical professionals analyzing blood samples"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg transition-all duration-500 hover:shadow-xl"
                  width={550}
                  height={310}
                />
              </FadeIn>
            </div>
          </div>
        </AnimatedGradient>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                    About SickleSense
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Revolutionizing Sickle Cell Detection
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    SickleSense combines medical expertise with cutting-edge technology to provide accessible sickle
                    cell disease detection, helping patients get early diagnosis and treatment.
                  </p>
                </div>
              </div>
            </FadeIn>

            <StaggeredChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
              <StaggeredChild>
                <div className="flex flex-col items-center space-y-2 text-center group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 transition-all duration-300 group-hover:bg-teal-200">
                    <Microscope className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">Advanced Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Our system uses sophisticated image processing to identify sickle-shaped red blood cells.
                  </p>
                </div>
              </StaggeredChild>

              <StaggeredChild>
                <div className="flex flex-col items-center space-y-2 text-center group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 transition-all duration-300 group-hover:bg-teal-200">
                    <Hospital className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">Healthcare Connections</h3>
                  <p className="text-sm text-muted-foreground">
                    We connect you with nearby hospitals and specialists for immediate care and consultation.
                  </p>
                </div>
              </StaggeredChild>

              <StaggeredChild>
                <div className="flex flex-col items-center space-y-2 text-center group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 transition-all duration-300 group-hover:bg-teal-200">
                    <FileText className="h-8 w-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold">Comprehensive Reports</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive detailed PDF reports with analysis results, recommendations, and next steps.
                  </p>
                </div>
              </StaggeredChild>
            </StaggeredChildren>

            <FadeIn delay={0.3}>
              <div className="mt-12 flex justify-center">
                <img
                  src="/doctor-lab.png"
                  alt="Doctor analyzing blood samples in laboratory"
                  className="rounded-xl shadow-lg w-full max-w-3xl transition-all duration-500 hover:shadow-xl"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our simple four-step process makes sickle cell detection accessible and convenient.
                  </p>
                </div>
              </div>
            </FadeIn>

            <StaggeredChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-4">
              <StaggeredChild>
                <div className="flex flex-col items-center space-y-2 text-center group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white transition-all duration-300 group-hover:scale-110">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Register</h3>
                  <p className="text-sm text-muted-foreground">
                    Create an account and provide basic information to get started.
                  </p>
                </div>
              </StaggeredChild>

              <StaggeredChild>
                <div className="flex flex-col items-center space-y-2 text-center group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white transition-all duration-300 group-hover:scale-110">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Upload Images</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload your RBC microscopy images through our secure platform.
                  </p>
                </div>
              </StaggeredChild>

              <StaggeredChild>
                <div className="flex flex-col items-center space-y-2 text-center group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white transition-all duration-300 group-hover:scale-110">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Get Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive analysis results with detection status and recommendations.
                  </p>
                </div>
              </StaggeredChild>

              <StaggeredChild>
                <div className="flex flex-col items-center space-y-2 text-center group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white transition-all duration-300 group-hover:scale-110">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold">Take Action</h3>
                  <p className="text-sm text-muted-foreground">
                    Find nearby hospitals, download your report, and follow precautions.
                  </p>
                </div>
              </StaggeredChild>
            </StaggeredChildren>

            <FadeIn delay={0.4} direction="up">
              <div className="mt-12 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  <div className="overflow-hidden rounded-xl shadow-lg group">
                    <img
                      src="/normal-rbc.png"
                      alt="Normal red blood cells under microscope"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-xl shadow-lg group">
                    <img
                      src="/sickle-rbc.png"
                      alt="Sickle-shaped red blood cells under microscope"
                      className="w-full h-full object-cover transition-all duration-100 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

