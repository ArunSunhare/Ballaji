"use client";
import { Shield, CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why Choose SHB-MDH?
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            {/* <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-xl">
                <Shield className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
            </div> */}

            <ul className="space-y-4 text-gray-700 text-sm md:text-base max-w-3xl mx-auto">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span>Blessings of our deity Hanuman Balaji</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span>Charitable Mission with Compassionate Care</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span>State-of-the-Art Medical Infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span>Experienced & Multidisciplinary Medical Team</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span>Holistic Healing Environment</span>
              </li>
            </ul>

            <p className="text-gray-600 text-sm md:text-base leading-7 max-w-3xl mx-auto mt-6 text-center">
              Whether you're seeking a second opinion, diagnosis, or a complete treatment journey,
              <span className="font-semibold text-gray-800">
              {" "}SHB-MDH Cancer Care & Multispeciality Charitable Hospital
            </span>{" "}
              is here to stand by you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}