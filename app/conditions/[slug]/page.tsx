// using [slug] we cerate dynamic route 
// /conditions/diabetes-treatment-delhi
// /conditions/asthma-treatment-delhi


// data/conditions.ts

export const conditions = [
  {
    slug: "diabetes-treatment-delhi",
    condition: "Diabetes",
    location: "Delhi",
    title: "Best Diabetes Treatment in Delhi",
    description:
      "Get advanced diabetes treatment in Delhi at Balaji Hospital.",
    symptoms: [
      "Frequent urination",
      "Fatigue",
      "Blurred vision"
    ],
    treatments: [
      "Blood sugar monitoring",
      "Insulin therapy",
      "Diet management"
    ]
  },

  {
    slug: "asthma-treatment-delhi",
    condition: "Asthma",
    location: "Delhi",
    title: "Asthma Treatment in Delhi",
    description:
      "Expert asthma specialists at Balaji Hospital Delhi.",
    symptoms: [
      "Shortness of breath",
      "Chest tightness",
      "Wheezing"
    ],
    treatments: [
      "Inhaler therapy",
      "Nebulization",
      "Allergy management"
    ]
  },

  {
    slug: "migraine-treatment-delhi",
    condition: "Migraine",
    location: "Delhi",
    title: "Migraine Treatment in Delhi",
    description:
      "Advanced migraine diagnosis and treatment at Balaji Hospital Delhi.",
    symptoms: [
      "Severe headache",
      "Nausea",
      "Sensitivity to light"
    ],
    treatments: [
      "Pain management",
      "Lifestyle counseling",
      "Preventive medications"
    ]
  },

  {
    slug: "high-blood-pressure-treatment-delhi",
    condition: "High Blood Pressure",
    location: "Delhi",
    title: "High Blood Pressure Treatment in Delhi",
    description:
      "Comprehensive hypertension care and monitoring at Balaji Hospital Delhi.",
    symptoms: [
      "Headache",
      "Dizziness",
      "Chest pain"
    ],
    treatments: [
      "Blood pressure monitoring",
      "Medication management",
      "Diet and lifestyle changes"
    ]
  }
];