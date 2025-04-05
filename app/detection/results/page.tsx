"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Download, FileText, MapPin, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import HospitalMap from "@/components/hospital-map"
import PrecautionsList from "@/components/precautions-list"
import AnimatedContainer from "@/components/animations/animated-container"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"
import StaggeredChild from "@/components/animations/staggered-child"
import AnimatedNumber from "@/components/animations/animated-number"
import LoadingAnimation from "@/components/animations/loading-animation"

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("results")
  const [isLoading, setIsLoading] = useState(true)
  const [showResults, setShowResults] = useState(false)

  // This would be determined by the actual analysis in a real application
  const detectionResult = true // true = sickle cell detected, false = not detected

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Simulate results appearing after loading
    const resultsTimer = setTimeout(() => {
      setShowResults(true)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearTimeout(resultsTimer)
    }
  }, [])

  const handleDownloadReport = () => {
    // In a real application, this would generate and download a PDF report
    alert("Downloading PDF report...")
  }

  if (isLoading) {
    return (
      <div className="container max-w-5xl py-10 min-h-[80vh] flex flex-col items-center justify-center">
        <LoadingAnimation size={60} />
        <p className="mt-6 text-lg font-medium text-teal-700">Analyzing RBC samples...</p>
        <p className="text-sm text-muted-foreground mt-2">This may take a few moments</p>
      </div>
    )
  }

  return (
    <div className="ml-10">
    <div className="container max-w-8xl py-10 pr-10">
      <AnimatedContainer>
        <div className="mb-8">
          <Link
            href="/detection"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Detection
          </Link>
          <h1 className="mt-4 text-3xl font-bold">Analysis Results</h1>
          <p className="text-muted-foreground">Review your sickle cell detection results</p>
        </div>
      </AnimatedContainer>

      <FadeIn delay={0.3}>
        <div className=" mb-8">
          {detectionResult ? (
            <Alert className="border-red-200 bg-red-50 animate-pulse">
              <AlertTitle className="text-red-800 flex items-center gap-2 text-lg">
                Sickle Cell Traits Detected
              </AlertTitle>
              <AlertDescription className="text-red-700">
                Our analysis has detected characteristics consistent with sickle cell disease in your samples. Please
                consult with a healthcare professional for a complete diagnosis and treatment plan.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="border-green-200 bg-green-50 animate-pulse">
              <AlertTitle className="text-green-800 flex items-center gap-2 text-lg">
                No Sickle Cell Traits Detected
              </AlertTitle>
              <AlertDescription className="text-green-700">
                Our analysis did not detect characteristics consistent with sickle cell disease in your samples.
                However, this is not a definitive medical diagnosis. If you have symptoms or concerns, please consult a
                healthcare professional.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </FadeIn>

      {showResults && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="results" className="transition-all duration-200 data-[state=active]:bg-teal-100">
              Analysis Results
            </TabsTrigger>
            <TabsTrigger value="hospitals" className="transition-all duration-200 data-[state=active]:bg-teal-100">
              Nearby Hospitals
            </TabsTrigger>
            <TabsTrigger value="precautions" className="transition-all duration-200 data-[state=active]:bg-teal-100">
              Precautions & Care
            </TabsTrigger>
          </TabsList>

          <TabsContent value="results" className="mt-6">
            <Card className="overflow-hidden border-teal-100">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                <CardTitle>Detailed Analysis Results</CardTitle>
                <CardDescription>Review the detailed findings from your RBC image analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 py-4">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FadeIn delay={0.2}>
                      <div>
                        <h3 className="text-lg font-medium mb-3">Sample Images</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="overflow-hidden rounded-md border group">
                            <div className="relative overflow-hidden">
                              <img
                                src="/images/normal-rbc.png"
                                alt="Original RBC Sample"
                                className="h-[150px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <p className="text-xs p-2 bg-muted">Original Sample</p>
                          </div>
                          <div className="overflow-hidden rounded-md border group">
                            <div className="relative overflow-hidden">
                              <img
                                src="/images/analyzed-rbc.png"
                                alt="Analyzed RBC Sample"
                                className="h-[150px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <p className="text-xs p-2 bg-muted">Analyzed Sample</p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                      <div>
                        <h3 className="text-lg font-medium mb-3">Analysis Metrics</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">Abnormal Cell Count:</span>
                            <span className="text-red-600">
                              <AnimatedNumber value={42} suffix="%" />
                            </span>
                          </div>
                          <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">Sickle-shaped Cells:</span>
                            <span className="text-red-600">
                              <AnimatedNumber value={38} suffix="%" delay={0.2} />
                            </span>
                          </div>
                          <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">Normal Cells:</span>
                            <span>
                              <AnimatedNumber value={58} suffix="%" delay={0.4} />
                            </span>
                          </div>
                          <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">Confidence Score:</span>
                            <span className="text-amber-600">
                              <AnimatedNumber value={87} suffix="%" delay={0.6} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  </div>

                  <FadeIn delay={0.6}>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Interpretation</h3>
                      <div className="rounded-lg border p-4 bg-gradient-to-r from-white to-teal-50/30">
                        <p className="mb-3">
                          The analysis of your RBC samples shows a significant presence of sickle-shaped red blood
                          cells, which is characteristic of sickle cell disease. Approximately 38% of the cells in the
                          sample exhibit the elongated, crescent shape typical of sickle cell anemia.
                        </p>
                        <p>
                          This result suggests a high likelihood of sickle cell disease or trait. However, a definitive
                          diagnosis requires additional laboratory tests, including hemoglobin electrophoresis, which
                          should be performed by a healthcare professional.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-3 justify-between bg-gradient-to-r from-white to-teal-50/30">
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => window.print()}
                    className="gap-2 transition-all duration-300 hover:bg-teal-50"
                  >
                    <Printer className="h-4 w-4" /> Print Results
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDownloadReport}
                    className="gap-2 transition-all duration-300 hover:bg-teal-50"
                  >
                    <Download className="h-4 w-4" /> Download PDF
                  </Button>
                </div>
                <Button
                  onClick={() => setActiveTab("hospitals")}
                  className="gap-2 bg-teal-600 hover:bg-teal-700 transition-all duration-300"
                >
                  Find Nearby Hospitals <MapPin className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="hospitals" className="mt-6">
            <Card className="overflow-hidden border-teal-100">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                <CardTitle>Nearby Hospitals & Specialists</CardTitle>
                <CardDescription>Find healthcare facilities that specialize in sickle cell treatment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 py-4">
                  <FadeIn>
                    <div className="h-[400px] w-full rounded-lg border relative overflow-hidden">
                      <img
                        src="/images/map-background.png"
                        alt="Map background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <HospitalMap />
                    </div>
                  </FadeIn>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Recommended Facilities</h3>
                    <StaggeredChildren className="space-y-4">
                      <StaggeredChild>
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:shadow-md hover:border-teal-200 hover:bg-teal-50/30">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">City General Hospital</h4>
                              <p className="text-sm text-muted-foreground">Hematology Department</p>
                              <p className="text-sm">1.2 miles away • Open 24/7</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="shrink-0 transition-all duration-300 hover:bg-teal-100/50"
                            >
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      </StaggeredChild>

                      <StaggeredChild>
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:shadow-md hover:border-teal-200 hover:bg-teal-50/30">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">Sickle Cell Treatment Center</h4>
                              <p className="text-sm text-muted-foreground">Specialized Care Facility</p>
                              <p className="text-sm">2.8 miles away • Open 8AM-6PM</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="shrink-0 transition-all duration-300 hover:bg-teal-100/50"
                            >
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      </StaggeredChild>

                      <StaggeredChild>
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:shadow-md hover:border-teal-200 hover:bg-teal-50/30">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">University Medical Center</h4>
                              <p className="text-sm text-muted-foreground">Hematology & Oncology</p>
                              <p className="text-sm">3.5 miles away • Open 7AM-9PM</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="shrink-0 transition-all duration-300 hover:bg-teal-100/50"
                            >
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      </StaggeredChild>
                    </StaggeredChildren>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-gradient-to-r from-white to-teal-50/30">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("results")}
                  className="transition-all duration-300 hover:bg-teal-50"
                >
                  Back to Results
                </Button>
                <Button
                  onClick={() => setActiveTab("precautions")}
                  className="bg-teal-600 hover:bg-teal-700 transition-all duration-300"
                >
                  View Precautions & Care
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="precautions" className="mt-6">
            <Card className="overflow-hidden border-teal-100">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                <CardTitle>Precautions & Care</CardTitle>
                <CardDescription>Important information for managing sickle cell disease</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 py-4">
                  <FadeIn>
                    <Alert className="border-amber-200 bg-amber-50">
                      <AlertTitle className="text-amber-800 flex items-center gap-2">Important Notice</AlertTitle>
                      <AlertDescription className="text-amber-700">
                        The following information is for educational purposes only and does not replace professional
                        medical advice. Always consult with a healthcare provider for personalized guidance.
                      </AlertDescription>
                    </Alert>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Daily Precautions</h3>
                      <PrecautionsList />
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <div>
                      <h3 className="text-lg font-medium mb-3">When to Seek Medical Help</h3>
                      <div className="rounded-lg border p-4 space-y-3 bg-gradient-to-r from-red-50/30 to-white">
                        <p className="font-medium text-red-700">Seek immediate medical attention if you experience:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li className="animate-pulse">
                            Sudden, severe pain, especially in the chest, abdomen, or joints
                          </li>
                          <li>Difficulty breathing or shortness of breath</li>
                          <li>Severe headache, dizziness, or sudden vision changes</li>
                          <li>Fever above 101°F (38.3°C)</li>
                          <li>Extreme fatigue or weakness</li>
                          <li>Swelling in the hands or feet</li>
                          <li>Pale skin or yellowing of the skin or whites of the eyes</li>
                        </ul>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.6}>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Recommended Resources</h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Link
                          href="#"
                          className="rounded-lg border p-4 hover:bg-teal-50/50 transition-all duration-300 hover:shadow-md hover:border-teal-200"
                        >
                          <h4 className="font-medium">Sickle Cell Disease Association</h4>
                          <p className="text-sm text-muted-foreground">Support groups and educational resources</p>
                        </Link>
                        <Link
                          href="#"
                          className="rounded-lg border p-4 hover:bg-teal-50/50 transition-all duration-300 hover:shadow-md hover:border-teal-200"
                        >
                          <h4 className="font-medium">National Heart, Lung, and Blood Institute</h4>
                          <p className="text-sm text-muted-foreground">Research and treatment information</p>
                        </Link>
                        <Link
                          href="#"
                          className="rounded-lg border p-4 hover:bg-teal-50/50 transition-all duration-300 hover:shadow-md hover:border-teal-200"
                        >
                          <h4 className="font-medium">CDC Sickle Cell Disease</h4>
                          <p className="text-sm text-muted-foreground">Facts, statistics, and guidelines</p>
                        </Link>
                        <Link
                          href="#"
                          className="rounded-lg border p-4 hover:bg-teal-50/50 transition-all duration-300 hover:shadow-md hover:border-teal-200"
                        >
                          <h4 className="font-medium">Be The Match Registry</h4>
                          <p className="text-sm text-muted-foreground">Bone marrow transplant information</p>
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-gradient-to-r from-white to-teal-50/30">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("hospitals")}
                  className="transition-all duration-300 hover:bg-teal-50"
                >
                  Back to Hospitals
                </Button>
                <Button
                  onClick={handleDownloadReport}
                  className="gap-2 bg-teal-600 hover:bg-teal-700 transition-all duration-300"
                >
                  <FileText className="h-4 w-4" /> Download Complete Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
    </div>
  )
}

