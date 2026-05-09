import { notFound } from "next/navigation";

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

type ConditionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = conditions.find((item) => item.slug === slug);

  if (!condition) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-gray-900 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
        {condition.condition} Treatment
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        {condition.title}
      </h1>
      <p className="mt-4 text-base leading-7 text-gray-700">
        {condition.description}
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">Common Symptoms</h2>
          <ul className="mt-3 space-y-2">
            {condition.symptoms.map((symptom) => (
              <li key={symptom} className="rounded-md bg-orange-50 px-3 py-2">
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Treatment Support</h2>
          <ul className="mt-3 space-y-2">
            {condition.treatments.map((treatment) => (
              <li key={treatment} className="rounded-md bg-gray-100 px-3 py-2">
                {treatment}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
