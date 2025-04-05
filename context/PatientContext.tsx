"use client"
import React, { createContext, useContext, useState } from "react"

type PatientData = {
  name: string
  age: string
  gender: string
  location: string
  images: File[]
}

type PatientContextType = {
  patientData: PatientData | null
  setPatientData: (data: PatientData) => void
}

const PatientContext = createContext<PatientContextType | undefined>(undefined)

export const PatientProvider = ({ children }: { children: React.ReactNode }) => {
  const [patientData, setPatientData] = useState<PatientData | null>(null)

  return (
    <PatientContext.Provider value={{ patientData, setPatientData }}>
      {children}
    </PatientContext.Provider>
  )
}

export const usePatient = () => {
  const context = useContext(PatientContext)
  if (!context) {
    throw new Error("usePatient must be used within a PatientProvider")
  }
  return context
}
