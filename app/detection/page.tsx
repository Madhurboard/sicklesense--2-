"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import PatientInfoForm from "@/components/patient-info-form"
import ImageUploader from "@/components/image-uploader"
import { usePatient } from "@/context/PatientContext"

export default function DetectionPage() {
  const [activeTab, setActiveTab] = useState("patient-info")
  const [formComplete, setFormComplete] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [consentChecked, setConsentChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { patientData } = usePatient()

  const handleFormComplete = (complete: boolean) => {
    setFormComplete(complete)
  }

  const handleUploadComplete = (complete: boolean) => {
    setUploadComplete(complete)
  }

  const handleNextTab = () => {
    if (activeTab === "patient-info" && formComplete) {
      setActiveTab("upload-images")
    } else if (activeTab === "upload-images" && uploadComplete) {
      setActiveTab("review")
    }
  }

  const handleSubmitForAnalysis = async () => {
    if (!patientData?.images || patientData.images.length === 0) {
      alert("Please upload at least one image.")
      return
    }

    if (!consentChecked) {
      alert("Please provide consent before submitting.")
      return
    }

    setIsSubmitting(true)

    try {
      const results: string[] = []

      for (const file of patientData.images) {
        const formData = new FormData()
        formData.append("file", file)

        const response = await fetch("http://localhost:8001/predict", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          throw new Error("Failed to analyze image")
        }

        const data = await response.json()
        results.push(data.result)
      }

      localStorage.setItem("predictionResults", JSON.stringify(results))
      window.location.href = "/detection/results"
    } catch (err) {
      console.error(err)
      alert("An error occurred while submitting your images.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-8xl py-10 pr-10 pl-10">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Sickle Cell Detection</h1>
        <p className="text-muted-foreground">
          Complete all steps to receive your analysis results
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="patient-info">1. Patient Information</TabsTrigger>
          <TabsTrigger value="upload-images" disabled={!formComplete}>
            2. Upload RBC Images
          </TabsTrigger>
          <TabsTrigger value="review" disabled={!formComplete || !uploadComplete}>
            3. Review & Submit
          </TabsTrigger>
        </TabsList>

        {/* STEP 1 */}
        <TabsContent value="patient-info" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
              <CardDescription>
                Please provide accurate information to help with the analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PatientInfoForm onFormComplete={handleFormComplete} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Cancel
              </Button>
              <Button onClick={handleNextTab} disabled={!formComplete}>
                Next Step <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* STEP 2 */}
        <TabsContent value="upload-images" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload RBC Images</CardTitle>
              <CardDescription>
                Upload clear microscopy images of red blood cells for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUploader onUploadComplete={handleUploadComplete} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("patient-info")}>
                Previous Step
              </Button>
              <Button onClick={handleNextTab} disabled={!uploadComplete}>
                Next Step <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* STEP 3 */}
        <TabsContent value="review" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Review & Submit</CardTitle>
              <CardDescription>
                Review your information before submitting for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Patient Info */}
                {patientData && (
                  <div>
                    <h3 className="text-lg font-medium">Patient Information</h3>
                    <div className="mt-3 grid grid-cols-1 gap-4 rounded-lg border p-4 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                        <p>{patientData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Age</p>
                        <p>{patientData.age}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Gender</p>
                        <p>{patientData.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                        <p>{patientData.location || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Uploaded Images */}
                {patientData?.images?.length > 0 ? (
                  <div>
                    <h3 className="text-lg font-medium">Uploaded Images</h3>
                    <div className="mt-3 grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-2 md:grid-cols-3">
                      {patientData.images.map((file, index) => (
                        <div key={index} className="space-y-2">
                          <div className="overflow-hidden rounded-md border">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`RBC Sample ${index + 1}`}
                              className="h-[150px] w-full object-cover"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">{file.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No images uploaded.</p>
                )}

                {/* Consent */}
                <div>
                  <h3 className="text-lg font-medium">Consent</h3>
                  <div className="mt-3 rounded-lg border p-4">
                    <Label htmlFor="consent" className="flex items-start gap-2">
                      <Input
                        type="checkbox"
                        id="consent"
                        className="mt-1"
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                      />
                      <span>
                        I confirm that all information provided is accurate and I consent to the analysis of the
                        uploaded images. I understand that this tool is for screening purposes only and does not replace
                        professional medical diagnosis.
                      </span>
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("upload-images")}>
                Previous Step
              </Button>
              <Button
                onClick={handleSubmitForAnalysis}
                disabled={!consentChecked || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit for Analysis"}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
