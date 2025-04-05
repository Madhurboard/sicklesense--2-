"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PatientInfoForm from "@/components/patient-info-form"
import ImageUploader from "@/components/image-uploader"

export default function DetectionPage() {
  const [activeTab, setActiveTab] = useState("patient-info")
  const [formComplete, setFormComplete] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

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
    } else if (activeTab === "review") {
      window.location.href = "/detection/results"
    }
  }

  return (
    <div className="container max-w-5xl py-10">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Sickle Cell Detection</h1>
        <p className="text-muted-foreground">Complete all steps to receive your analysis results</p>
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

        <TabsContent value="patient-info" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
              <CardDescription>Please provide accurate information to help with the analysis</CardDescription>
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

        <TabsContent value="upload-images" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload RBC Images</CardTitle>
              <CardDescription>Upload clear microscopy images of red blood cells for analysis</CardDescription>
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

        <TabsContent value="review" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Review & Submit</CardTitle>
              <CardDescription>Review your information before submitting for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Patient Information</h3>
                  <div className="mt-3 grid grid-cols-1 gap-4 rounded-lg border p-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                      <p>John Doe</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Age</p>
                      <p>32</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Gender</p>
                      <p>Male</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Contact Number</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm font-medium text-muted-foreground">Medical History</p>
                      <p>No previous history of sickle cell disease. Family history includes anemia.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Uploaded Images</h3>
                  <div className="mt-3 grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="overflow-hidden rounded-md border">
                        <img
                          src="/placeholder.svg?height=200&width=200"
                          alt="RBC Sample 1"
                          className="h-[150px] w-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">rbc_sample_1.jpg</p>
                    </div>
                    <div className="space-y-2">
                      <div className="overflow-hidden rounded-md border">
                        <img
                          src="/placeholder.svg?height=200&width=200"
                          alt="RBC Sample 2"
                          className="h-[150px] w-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">rbc_sample_2.jpg</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Consent</h3>
                  <div className="mt-3 rounded-lg border p-4">
                    <Label htmlFor="consent" className="flex items-start gap-2">
                      <Input type="checkbox" id="consent" className="mt-1" />
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
              <Button onClick={handleNextTab}>
                Submit for Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

