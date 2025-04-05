"use client"

import { motion } from "framer-motion"

export default function PrecautionsList() {
  const precautions = [
    {
      title: "Stay Hydrated",
      description:
        "Drink plenty of water throughout the day (8-10 glasses). Dehydration can trigger sickle cell crises. Increase fluid intake during hot weather, illness, or physical activity.",
    },
    {
      title: "Avoid Temperature Extremes",
      description:
        "Extreme temperatures can trigger sickling. Dress warmly in cold weather and avoid overheating in hot weather. Use caution with swimming in very cold water and avoid excessive sun exposure.",
    },
    {
      title: "Manage Physical Activity",
      description:
        "Exercise is beneficial but avoid exhaustion. Take breaks during physical activity and stay hydrated. Avoid high-altitude activities without proper medical consultation.",
    },
    {
      title: "Prevent Infections",
      description:
        "Wash hands frequently and avoid people with contagious illnesses. Stay up-to-date with vaccinations, including annual flu shots. Seek prompt medical attention for fevers or signs of infection.",
    },
    {
      title: "Medication Adherence",
      description:
        "Take all prescribed medications as directed. Do not skip doses of hydroxyurea or other medications that help prevent complications. Carry pain medication as prescribed by your doctor.",
    },
    {
      title: "Healthy Diet",
      description:
        "Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Consider folic acid supplements as recommended by your healthcare provider to support red blood cell production.",
    },
    {
      title: "Stress Management",
      description:
        "Practice stress-reduction techniques such as deep breathing, meditation, or yoga. Emotional stress can contribute to pain crises. Ensure adequate rest and sleep.",
    },
    {
      title: "Travel Precautions",
      description:
        "Consult your doctor before traveling. Carry medical documentation and medication. For air travel, drink extra fluids and move around periodically to prevent blood clots.",
    },
  ]

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
    <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
      {precautions.map((precaution, index) => (
        <motion.div
          key={index}
          className="rounded-lg border p-4 transition-all duration-300 hover:shadow-md hover:border-teal-200 hover:bg-teal-50/30"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <h4 className="font-medium mb-2">{precaution.title}</h4>
          <p className="text-sm">{precaution.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

