import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Diabetes Treatment in Delhi | Balaji Hospital",
  description:
    "Get expert diabetes treatment in Delhi at Balaji Hospital. Experienced doctors, advanced diagnostics, diabetes management, and personalized care.",
  keywords: [
    "diabetes treatment delhi",
    "best diabetes hospital delhi",
    "diabetes specialist delhi",
    "blood sugar treatment",
    "diabetes doctor near me",
  ],
  alternates: {
    canonical:
      "https://www.balajihospital.com/conditions/diabetes-treatment-delhi",
  },
  openGraph: {
    title: "Diabetes Treatment in Delhi | Balaji Hospital",
    description:
      "Expert diabetes care and treatment in Delhi at Balaji Hospital.",
    url: "https://www.balajihospital.com/conditions/diabetes-treatment-delhi",
    siteName: "Balaji Hospital",
    type: "website",
  },
};

export default function DiabetesTreatmentPage() {
  const faqs = [
    {
      question: "What are the early symptoms of diabetes?",
      answer:
        "Frequent urination, excessive thirst, fatigue, blurred vision, and sudden weight loss are common symptoms.",
    },
    {
      question: "Can diabetes be cured?",
      answer:
        "Diabetes can be effectively managed with medication, diet, exercise, and regular monitoring.",
    },
    {
      question: "Which doctor treats diabetes?",
      answer:
        "An endocrinologist or diabetes specialist treats diabetes-related conditions.",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-2">
              Balaji Hospital Delhi
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Diabetes Treatment in Delhi
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Get advanced diabetes diagnosis and treatment from experienced
              specialists at Balaji Hospital. Personalized care plans,
              medication management, diet counseling, and long-term diabetes
              monitoring.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium">
                Book Appointment
              </button>

              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-medium">
                Call Now
              </button>
            </div>
          </div>

          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/diabetes-treatment.jpg"
              alt="Diabetes Treatment in Delhi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              What is Diabetes?
            </h2>

            <p className="text-gray-600 leading-8">
              Diabetes is a chronic medical condition that affects how your body
              regulates blood sugar levels. If left untreated, diabetes can lead
              to heart disease, kidney damage, nerve problems, and vision loss.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Common Symptoms
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>• Frequent urination</li>
              <li>• Increased thirst</li>
              <li>• Fatigue and weakness</li>
              <li>• Blurred vision</li>
              <li>• Slow wound healing</li>
              <li>• Sudden weight loss</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TREATMENT */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Diabetes Treatment Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Blood Sugar Monitoring",
              "Insulin Therapy",
              "Diet & Lifestyle Counseling",
              "Diabetes Medication",
              "Exercise Management",
              "Complication Screening",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 shadow-sm border"
              >
                <h3 className="font-semibold text-xl mb-3">{item}</h3>

                <p className="text-gray-600">
                  Comprehensive diabetes management and specialist consultation
                  at Balaji Hospital Delhi.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Choose Balaji Hospital?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Experienced Specialists",
            "Advanced Diagnostics",
            "Affordable Treatment",
            "24x7 Patient Support",
          ].map((item) => (
            <div
              key={item}
              className="bg-blue-50 rounded-2xl p-6 text-center"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl p-6 border"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {faq.question}
                </h3>

                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">
          Related Conditions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Thyroid Treatment",
              href: "/conditions/thyroid-treatment-delhi",
            },
            {
              title: "Hypertension Treatment",
              href: "/conditions/hypertension-treatment-delhi",
            },
            {
              title: "Obesity Management",
              href: "/conditions/obesity-treatment-delhi",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                Learn more about treatment and care options.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Book Your Diabetes Consultation Today
          </h2>

          <p className="text-lg mb-8">
            Connect with expert diabetes specialists at Balaji Hospital Delhi.
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">
            Schedule Appointment
          </button>
        </div>
      </section>
    </main>
  );
}