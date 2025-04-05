"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

// Mock hospital data
const hospitals = [
  { id: 1, name: "City General Hospital", lat: 40.7128, lng: -74.006, distance: "1.2 miles" },
  { id: 2, name: "Sickle Cell Treatment Center", lat: 40.7148, lng: -74.013, distance: "2.8 miles" },
  { id: 3, name: "University Medical Center", lat: 40.7158, lng: -73.998, distance: "3.5 miles" },
  { id: 4, name: "Memorial Hospital", lat: 40.7118, lng: -74.016, distance: "4.1 miles" },
  { id: 5, name: "Children's Medical Center", lat: 40.7138, lng: -74.026, distance: "5.2 miles" },
]

export default function HospitalMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedHospital, setSelectedHospital] = useState<number | null>(null)
  const [showPulse, setShowPulse] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setShowPulse(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden">
      {/* Simulated map markers */}
      <div className="absolute inset-0 z-10">
        {hospitals.map((hospital, index) => (
          <motion.div
            key={hospital.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(hospital.lng + 74.016) * 1000}%`,
              top: `${(40.7158 - hospital.lat) * 1000}%`,
            }}
            onClick={() => setSelectedHospital(hospital.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + index * 0.1,
              duration: 0.5,
            }}
          >
            <div
              className={`p-1 rounded-full ${selectedHospital === hospital.id ? "bg-teal-600" : "bg-teal-500"} transition-all duration-300 hover:scale-110`}
            >
              <MapPin className="h-5 w-5 text-white" />

              {showPulse && selectedHospital === hospital.id && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-teal-400"
                  initial={{ opacity: 0.7, scale: 1 }}
                  animate={{ opacity: 0, scale: 2 }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              )}
            </div>

            {selectedHospital === hospital.id && (
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {hospital.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Hospital info panel */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="font-medium text-sm">Nearby Hospitals</h3>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {hospitals.slice(0, 3).map((hospital) => (
            <motion.div
              key={hospital.id}
              className={`text-xs p-2 rounded cursor-pointer transition-all duration-300 ${
                selectedHospital === hospital.id ? "bg-teal-50 border border-teal-200" : "hover:bg-muted/50"
              }`}
              onClick={() => setSelectedHospital(hospital.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-medium">{hospital.name}</div>
              <div className="text-muted-foreground">{hospital.distance}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

