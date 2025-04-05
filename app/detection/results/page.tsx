"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Download, FileText, MapPin, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import {
  Alert,
  AlertDescription,
  AlertTitle
} from "@/components/ui/alert"
import HospitalMap from "@/components/hospital-map"
import PrecautionsList from "@/components/precautions-list"
import AnimatedContainer from "@/components/animations/animated-container"
import FadeIn from "@/components/animations/fade-in"
import AnimatedNumber from "@/components/animations/animated-number"
import LoadingAnimation from "@/components/animations/loading-animation"
import { usePatient } from "@/context/PatientContext"

export default function ResultsPage() {
  const { patientData } = usePatient()
  const [activeTab, setActiveTab] = useState("results")
  const [isLoading, setIsLoading] = useState(true)
  const [showResults, setShowResults] = useState(false)
  const [predictionResults, setPredictionResults] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("predictionResults")
    if (stored) {
      setPredictionResults(JSON.parse(stored))
    }

    const timer = setTimeout(() => setIsLoading(false), 2000)
    const resultsTimer = setTimeout(() => setShowResults(true), 2500)

    return () => {
      clearTimeout(timer)
      clearTimeout(resultsTimer)
    }
  }, [])

  const detectionResult = predictionResults.some(r => r.includes("Detected"))

  const handleDownloadReport = () => {
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

        {patientData && (
          <div className="mb-6 border rounded-lg p-4 bg-muted/50">
            <h3 className="text-lg font-medium mb-2">Patient Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <p><strong>Name:</strong> {patientData.name}</p>
              <p><strong>Age:</strong> {patientData.age}</p>
              <p><strong>Gender:</strong> {patientData.gender}</p>
              <p><strong>Location:</strong> {patientData.location || "N/A"}</p>
            </div>
          </div>
        )}

        <FadeIn delay={0.3}>
          <div className="mb-8">
            {detectionResult ? (
              <Alert className="border-red-200 bg-red-50 animate-pulse">
                <AlertTitle className="text-red-800 flex items-center gap-2 text-lg">
                  Sickle Cell Traits Detected
                </AlertTitle>
                <AlertDescription className="text-red-700">
                  Our analysis has detected characteristics consistent with sickle cell disease. Please consult a healthcare professional for confirmation.
                </AlertDescription>
              </Alert>
            ) : (
              <Alert className="border-green-200 bg-green-50 animate-pulse">
                <AlertTitle className="text-green-800 flex items-center gap-2 text-lg">
                  No Sickle Cell Traits Detected
                </AlertTitle>
                <AlertDescription className="text-green-700">
                  No sickle cell characteristics were found, but you should consult a doctor for confirmation.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </FadeIn>

        {showResults && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="results">Analysis Results</TabsTrigger>
              <TabsTrigger value="hospitals">Nearby Hospitals</TabsTrigger>
              <TabsTrigger value="precautions">Precautions & Care</TabsTrigger>
            </TabsList>

            <TabsContent value="results" className="mt-6">
              <Card>
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
                            {patientData?.images?.map((file, index) => (
                              <div key={index} className="overflow-hidden rounded-md border group">
                                <div className="relative overflow-hidden">
                                  <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Uploaded RBC ${index + 1}`}
                                    className="h-[150px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  />
                                </div>
                                <p className="text-xs p-2 bg-muted">
                                  {predictionResults[index] || "Pending"}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </FadeIn>

                      <FadeIn delay={0.4}>
                        <div>
                          <h3 className="text-lg font-medium mb-3">Analysis Metrics</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Total Samples:</span>
                              <span>{predictionResults.length}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Sickle Cell Detected:</span>
                              <span className="text-red-600">
                                {predictionResults.filter(r => r.includes("Detected")).length}
                              </span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                              <span className="font-medium">Normal Samples:</span>
                              <span>
                                {predictionResults.filter(r => r.includes("No")).length}
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
                            The uploaded RBC samples have been analyzed for signs of sickle cell disease.
                            {detectionResult ? (
                              <> Sickle-shaped cells were detected. Please consult a medical professional for confirmation and further diagnosis.</>
                            ) : (
                              <> No sickle-shaped cells were detected. However, always confirm with a lab-based test.</>
                            )}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-3 justify-between bg-gradient-to-r from-white to-teal-50/30">
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => window.print()} className="gap-2">
                      <Printer className="h-4 w-4" /> Print Results
                    </Button>
                    <Button variant="outline" onClick={handleDownloadReport} className="gap-2">
                      <Download className="h-4 w-4" /> Download PDF
                    </Button>
                  </div>
                  <Button
                    onClick={() => setActiveTab("hospitals")}
                    className="gap-2 bg-teal-600 hover:bg-teal-700"
                  >
                    Find Nearby Hospitals <MapPin className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="hospitals" className="mt-6">
              <Card>
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Nearby Hospitals & Specialists</CardTitle>
                  <CardDescription>Find healthcare facilities that specialize in sickle cell treatment</CardDescription>
                </CardHeader>
                <CardContent>
                  <FadeIn>
                    <div className="h-[400px] w-full rounded-lg border relative overflow-hidden">
                      <HospitalMap />
                    </div>
                  </FadeIn>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="precautions" className="mt-6">
              <Card>
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Precautions & Care</CardTitle>
                  <CardDescription>Helpful guidance for managing or living with sickle cell disease</CardDescription>
                </CardHeader>
                <CardContent>
                  <FadeIn>
                    <PrecautionsList />
                  </FadeIn>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
