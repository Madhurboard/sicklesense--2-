"use client"

import Link from "next/link"
import { ArrowLeft, Search, FileCheck, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedContainer from "@/components/animations/animated-container"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"
import StaggeredChild from "@/components/animations/staggered-child"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AnimatedGradient from "@/components/animations/animated-gradient"

export default function HowItWorksPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How SickleSense Works</h1>
                <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our advanced technology makes sickle cell detection accessible, accurate, and convenient. Learn about
                  our step-by-step process below.
                </p>
              </FadeIn>
            </div>
          </div>
        </AnimatedGradient>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <AnimatedContainer>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600 to-teal-200 hidden md:block"></div>

                <StaggeredChildren className="space-y-16 md:space-y-24 relative">
                  <StaggeredChild>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="md:pr-12 order-2 md:order-1">
                        <div className="md:pl-16 relative">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center hidden md:flex">
                            <span className="font-bold">1</span>
                          </div>
                          <h2 className="text-2xl font-bold mb-4">Registration & Patient Information</h2>
                          <p className="text-muted-foreground mb-4">
                            Create an account and provide basic information about yourself or the patient. This helps us
                            personalize the analysis and provide more accurate results based on demographic factors and
                            medical history.
                          </p>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Secure and confidential data handling</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Medical history consideration for better analysis</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>One-time registration for multiple tests</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src="/images/medical-team.png"
                                alt="Medical professional registering patient information"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                  <p className="font-medium">Secure patient registration</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </StaggeredChild>

                  <StaggeredChild>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="order-2">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src="/images/rbc-microscope.png"
                                alt="RBC sample being uploaded"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                  <p className="font-medium">High-quality RBC image upload</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="md:pl-12">
                        <div className="md:pl-16 relative">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center hidden md:flex">
                            <span className="font-bold">2</span>
                          </div>
                          <h2 className="text-2xl font-bold mb-4">Upload RBC Images</h2>
                          <p className="text-muted-foreground mb-4">
                            Upload clear microscopy images of red blood cells. Our system accepts various image formats
                            and provides guidelines to ensure the images are suitable for accurate analysis.
                          </p>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Support for multiple image formats (JPG, PNG, TIFF)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Guidance for optimal image quality</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Multiple sample upload for comprehensive analysis</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </StaggeredChild>

                  <StaggeredChild>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="md:pr-12 order-2 md:order-1">
                        <div className="md:pl-16 relative">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center hidden md:flex">
                            <span className="font-bold">3</span>
                          </div>
                          <h2 className="text-2xl font-bold mb-4">Advanced Image Analysis</h2>
                          <p className="text-muted-foreground mb-4">
                            Our sophisticated algorithm analyzes the uploaded images to identify sickle-shaped red blood
                            cells. The system examines cell morphology, counts abnormal cells, and calculates the
                            percentage of sickle cells present.
                          </p>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>AI-powered cell shape recognition</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Quantitative analysis of abnormal cell percentage</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>High accuracy detection algorithms</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden rounded-lg">
                              <div className="grid grid-cols-2 gap-1">
                                <img
                                  src="/images/normal-rbc.png"
                                  alt="Normal RBC sample"
                                  className="w-full h-auto object-cover"
                                />
                                <img
                                  src="/images/sickle-rbc.png"
                                  alt="Sickle cell RBC sample"
                                  className="w-full h-auto object-cover"
                                />
                                <img
                                  src="/images/analyzed-rbc.png"
                                  alt="Analyzed RBC sample"
                                  className="w-full h-auto object-cover col-span-2"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                  <p className="font-medium">Advanced image analysis technology</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </StaggeredChild>

                  <StaggeredChild>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="order-2">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src="/images/doctor-lab.png"
                                alt="Detailed analysis results"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                  <p className="font-medium">Comprehensive detection results</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="md:pl-12">
                        <div className="md:pl-16 relative">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center hidden md:flex">
                            <span className="font-bold">4</span>
                          </div>
                          <h2 className="text-2xl font-bold mb-4">Detailed Results & Interpretation</h2>
                          <p className="text-muted-foreground mb-4">
                            Receive comprehensive results that include detection status, percentage of abnormal cells,
                            confidence score, and a detailed interpretation of the findings. Our system provides clear
                            explanations of what the results mean.
                          </p>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Visual representation of analysis results</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Detailed metrics and confidence scores</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Clear interpretation of medical implications</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </StaggeredChild>

                  <StaggeredChild>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="md:pr-12 order-2 md:order-1">
                        <div className="md:pl-16 relative">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center hidden md:flex">
                            <span className="font-bold">5</span>
                          </div>
                          <h2 className="text-2xl font-bold mb-4">Healthcare Resources & Next Steps</h2>
                          <p className="text-muted-foreground mb-4">
                            Based on the results, we provide personalized recommendations, including nearby healthcare
                            facilities specializing in sickle cell treatment, precautions to take, and educational
                            resources for better management.
                          </p>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Location-based hospital recommendations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Personalized precautions and care guidelines</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="bg-teal-100 text-teal-800 p-1 rounded-full mt-0.5">✓</span>
                              <span>Educational resources for ongoing management</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src="/images/hospital-building.png"
                                alt="Hospital and healthcare resources"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                  <p className="font-medium">Specialized healthcare connections</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </StaggeredChild>
                </StaggeredChildren>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-teal-50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tighter">Our Technology</h2>
                <p className="mt-4 text-muted-foreground md:text-lg max-w-[700px] mx-auto">
                  SickleSense uses cutting-edge technology to provide accurate and reliable sickle cell detection.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <Card className="bg-white transition-all duration-300 hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-teal-100">
                        <Search className="h-6 w-6 text-teal-700" />
                      </div>
                      <h3 className="text-xl font-bold">AI-Powered Analysis</h3>
                      <p className="text-muted-foreground text-sm">
                        Our advanced machine learning algorithms have been trained on thousands of RBC samples to
                        accurately identify sickle-shaped cells with high precision.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="bg-white transition-all duration-300 hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-teal-100">
                        <FileCheck className="h-6 w-6 text-teal-700" />
                      </div>
                      <h3 className="text-xl font-bold">Medical Validation</h3>
                      <p className="text-muted-foreground text-sm">
                        Our detection system has been validated by hematology experts and tested against
                        laboratory-confirmed cases to ensure reliability.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="bg-white transition-all duration-300 hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-teal-100">
                        <AlertCircle className="h-6 w-6 text-teal-700" />
                      </div>
                      <h3 className="text-xl font-bold">Continuous Improvement</h3>
                      <p className="text-muted-foreground text-sm">
                        Our system continuously learns and improves from new data, ensuring that our detection
                        capabilities become more accurate over time.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
                <p className="mt-4 text-muted-foreground md:text-lg max-w-[600px]">
                  Begin your sickle cell detection journey today with SickleSense's easy-to-use platform.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link href="/register">
                    <Button size="lg" className="gap-2 bg-teal-600 hover:bg-teal-700 transition-all duration-300">
                      Create an Account
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="gap-2 transition-all duration-300">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

