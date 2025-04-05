"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Upload, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"

interface ImageUploaderProps {
  onUploadComplete: (complete: boolean) => void
}

export default function ImageUploader({ onUploadComplete }: ImageUploaderProps) {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)

    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files)

      // Validate file types
      const invalidFiles = selectedFiles.filter((file) => !file.type.startsWith("image/"))
      if (invalidFiles.length > 0) {
        setError("Please upload only image files.")
        return
      }

      // Validate file size (max 5MB per file)
      const oversizedFiles = selectedFiles.filter((file) => file.size > 5 * 1024 * 1024)
      if (oversizedFiles.length > 0) {
        setError("One or more files exceed the 5MB size limit.")
        return
      }

      setFiles((prev) => [...prev, ...selectedFiles])
      onUploadComplete(true)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    setError(null)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files)

      // Validate file types
      const invalidFiles = droppedFiles.filter((file) => !file.type.startsWith("image/"))
      if (invalidFiles.length > 0) {
        setError("Please upload only image files.")
        return
      }

      // Validate file size (max 5MB per file)
      const oversizedFiles = droppedFiles.filter((file) => file.size > 5 * 1024 * 1024)
      if (oversizedFiles.length > 0) {
        setError("One or more files exceed the 5MB size limit.")
        return
      }

      setFiles((prev) => [...prev, ...droppedFiles])
      onUploadComplete(true)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const newFiles = [...prev]
      newFiles.splice(index, 1)
      onUploadComplete(newFiles.length > 0)
      return newFiles
    })
  }

  const simulateUpload = () => {
    setUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  // Add sample images after component mounts (for demo purposes)
  useEffect(() => {
    // In a real app, this would be removed
    setTimeout(() => {
      // Create dummy File objects
      const dummyFile1 = new File([""], "rbc_sample_1.jpg", { type: "image/jpeg" })
      const dummyFile2 = new File([""], "rbc_sample_2.jpg", { type: "image/jpeg" })

      setFiles([dummyFile1, dummyFile2])
      onUploadComplete(true)
    }, 1000)
  }, [onUploadComplete])

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {error && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging ? "bg-teal-50 border-teal-300" : "hover:bg-muted/50"
        }`}
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center space-y-3">
          <motion.div
            className="rounded-full bg-muted p-3"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Upload className="h-6 w-6 text-teal-600" />
          </motion.div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Drag and drop your RBC images here</p>
            <p className="text-xs text-muted-foreground">
              Upload clear microscopy images of red blood cells (JPG, PNG, TIFF)
            </p>
          </div>
          <Button type="button" variant="outline" size="sm" className="transition-all duration-300 hover:bg-teal-50">
            Browse Files
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-sm font-medium">Uploaded Files ({files.length})</div>

            <motion.div className="space-y-2">
              {files.map((file, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-3 hover:border-teal-200 hover:bg-teal-50/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-md border bg-muted flex items-center justify-center overflow-hidden">
                      {file.type.startsWith("image/") ? (
                        index === 0 ? (
                          <img src="/images/normal-rbc.png" alt="RBC sample" className="h-full w-full object-cover" />
                        ) : (
                          <img src="/images/sickle-rbc.png" alt="RBC sample" className="h-full w-full object-cover" />
                        )
                      ) : (
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile(index)
                    }}
                    className="transition-all duration-300 hover:bg-red-50 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove file</span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {uploading && (
              <motion.div className="space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </motion.div>
            )}

            <div className="flex justify-end">
              <Button
                type="button"
                onClick={simulateUpload}
                disabled={uploading || files.length === 0}
                className="bg-teal-600 hover:bg-teal-700 transition-all duration-300"
              >
                Upload Files
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="rounded-lg border p-4 bg-muted/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-sm font-medium mb-2">Image Guidelines</h3>
        <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
          <li>Upload clear, high-resolution microscopy images of red blood cells</li>
          <li>Ensure proper lighting and focus for accurate analysis</li>
          <li>Recommended magnification: 400x or 1000x (oil immersion)</li>
          <li>Supported formats: JPG, PNG, TIFF</li>
          <li>Maximum file size: 5MB per image</li>
          <li>Upload at least 2 different sample images for better accuracy</li>
        </ul>
      </motion.div>
    </div>
  )
}

