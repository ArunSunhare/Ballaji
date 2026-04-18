"use client";
import { Shield } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why  Choose Us



          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-xl mb-5">
              <Shield className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
            </div>
            <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-4">
              Trusted Diagnostics, Technology, and Care Under One Roof
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-7 max-w-3xl mx-auto">
              With 15+ years of trust, service to over 50,000 consumers, advanced diagnostic technology,
              and access to 5000+ tests and health packages, we focus on delivering reliable healthcare
              services with accuracy, convenience, and patient-first care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
