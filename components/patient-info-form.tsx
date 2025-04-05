"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

interface PatientInfoFormProps {
  onFormComplete: (complete: boolean) => void
}

export default function PatientInfoForm({ onFormComplete }: PatientInfoFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    medicalHistory: "",
    familyHistory: "",
    currentMedications: "",
  })

  // For demo purposes, pre-fill the form after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormData({
        fullName: "John Doe",
        age: "32",
        gender: "male",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Anytown, USA",
        medicalHistory: "No previous history of sickle cell disease.",
        familyHistory: "immediate",
        currentMedications: "None",
      })
      onFormComplete(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [onFormComplete])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Check if required fields are filled
    setTimeout(() => {
      const { fullName, age, gender, phone } = formData
      onFormComplete(fullName !== "" && age !== "" && gender !== "" && phone !== "")
    }, 100)
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Check if required fields are filled
    setTimeout(() => {
      const { fullName, age, gender, phone } = formData
      onFormComplete(fullName !== "" && age !== "" && gender !== "" && phone !== "")
    }, 100)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">
            Age <span className="text-red-500">*</span>
          </Label>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleInputChange}
            className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
            required
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label>
          Gender <span className="text-red-500">*</span>
        </Label>
        <RadioGroup
          value={formData.gender}
          onValueChange={(value) => handleSelectChange("gender", value)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
            className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
            required
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleInputChange}
          className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200 min-h-[80px] resize-none"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label htmlFor="medicalHistory">Medical History</Label>
        <Textarea
          id="medicalHistory"
          name="medicalHistory"
          placeholder="Enter any relevant medical history"
          value={formData.medicalHistory}
          onChange={handleInputChange}
          className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200 min-h-[80px] resize-none"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="familyHistory">Family History of Sickle Cell</Label>
          <Select value={formData.familyHistory} onValueChange={(value) => handleSelectChange("familyHistory", value)}>
            <SelectTrigger className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None known</SelectItem>
              <SelectItem value="immediate">Immediate family</SelectItem>
              <SelectItem value="extended">Extended family</SelectItem>
              <SelectItem value="unknown">Unknown</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentMedications">Current Medications</Label>
          <Input
            id="currentMedications"
            name="currentMedications"
            placeholder="List any current medications"
            value={formData.currentMedications}
            onChange={handleInputChange}
            className="transition-all duration-300 focus:border-teal-300 focus:ring-teal-200"
          />
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="text-sm text-muted-foreground"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <p>
          Fields marked with <span className="text-red-500">*</span> are required
        </p>
      </motion.div>
    </motion.div>
  )
}

