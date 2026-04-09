"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/app/componets/footer";
import { TopHeader } from "../../top_header";
import { TopNavbar } from "../../TopNavbar";
import { MainNavbar } from "../../MainNavbar";

const trueBeamImage = {
  src: "/assets/machine photo/machine photo/TRUEBEAM MACHINE.jpeg",
  title: "TrueBeam Radiotherapy Machine",
};

const radiationTechniques = [
  "IGRT (Image Guided Radiotherapy)",
  "IMRT (Intensity Modulated Radiation Therapy)",
  "3DCRT (3D Conformal Radiation Therapy)",
  "Rapid-ARC",
  "SRS",
  "SBRT",
  "Respiratory Gating",
  "DIBH",
  "TSET",
  "TBI",
];

const spotlightTechniques = ["IGRT", "IMRT", "3DCRT", "Rapid-ARC", "SRS", "SBRT"];

export default function RadiationTherapyPage() {
  const [activeImage, setActiveImage] = useState<null | typeof trueBeamImage>(null);

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
            <TopNavbar />
            <MainNavbar />

      <section className="relative bg-gradient-to-r from-gray-700 to-gray-600 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/machine photo/machine photo/TRUEBEAM MACHINE.jpeg"
            alt="Radiation Therapy Facility"
            fill
            priority            
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4 text-4xl md:text-5xl font-bold">
              Advanced Radiation Therapy Center
            </h1>
            <p className="text-white/90 text-lg md:text-xl">
              Precision • Innovation • Compassionate Cancer Care
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16 space-y-10 text-gray-800 leading-relaxed text-lg">

            <p className="text-justify">
              The <strong>Radiation Therapy Center</strong> at{" "}
              <strong>Shri Hanuman Balaji Charitable Diagnostic Centre</strong>{" "}
              is equipped with cutting-edge radiation therapy technology and advanced treatment techniques. Our goal is to deliver precise radiation treatment with maximum effectiveness and minimal side effects for cancer patients.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-8 rounded-r-xl">
              <p className="text-xl font-semibold text-orange-800 italic text-center">
                World-class diagnostics at subsidized cost – true charitable healthcare
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-[#faf8f3] p-6 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.28)] md:p-10">
              <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-stone-300 pb-5 text-sm font-semibold text-stone-500">
                {spotlightTechniques.map((technique, index) => (
                  <span
                    key={technique}
                    className={index === 0 ? "border-b-2 border-stone-700 pb-2 text-stone-900" : "pb-2"}
                  >
                    {technique}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-6 text-stone-700">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                      Advanced Radiation Care
                    </p>
                    <h2 className="text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
                      Focused treatment planning with modern TrueBeam support
                    </h2>
                  </div>

                  <p className="max-w-2xl text-base leading-8 md:text-lg">
                    Our radiation therapy unit combines accurate imaging, detailed planning, and
                    dependable delivery systems to support safe and effective cancer care for every patient.
                  </p>

                  <div className="grid gap-3 text-base md:text-lg">
                    <p className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-600" />
                      <span>Image-guided and intensity-modulated techniques help clinicians deliver better precision.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-600" />
                      <span>Advanced planning supports Rapid-ARC, SRS, SBRT, Respiratory Gating, and DIBH workflows.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-600" />
                      <span>Specialized treatment pathways are also available for TSET and TBI where clinically required.</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveImage(trueBeamImage)}
                  // style={{backgroundColor: #ddd}}
                  className="group relative mx-auto block w-full max-w-[720px] overflow-hidden rounded-[1.75rem] bg-stone-100 p-4 shadow-2xl transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-amber-200"
                >
                  <div className="relative overflow-hidden rounded-[1.2rem]">
                    <Image
                      src="/assets/machine photo/machine photo/TRUEBEAM MACHINE.jpeg"
                      alt="TrueBeam machine"
                      width={1200}
                      height={900}
                      className="h-[320px] w-full object-cover transition duration-300 group-hover:scale-[1.02] md:h-[420px] lg:h-[500px]"
                    />
                  </div>
                </button>
              </div>
            </div>

            <p className="text-justify">
              Our advanced radiation therapy techniques include{" "}
              <strong>
                IGRT (Image Guided Radiotherapy), IMRT (Intensity Modulated Radiation Therapy),
                3DCRT (3D Conformal Radiation Therapy), Rapid-ARC,
                SRS (Stereotactic Radiosurgery), SBRT (Stereotactic Body Radiation Therapy),
                Respiratory Gating, DIBH (Deep Inspiration Breath Hold),
                TSET (Total Skin Electron Therapy), and TBI (Total Body Irradiation)
              </strong>.
              All treatments are planned and delivered by skilled radiation oncologists and technologists under strict quality and safety protocols.
            </p>

            <p className="text-justify">
              We emphasize{" "}
              <strong>
                treatment precision, patient safety, advanced imaging guidance,
                and compassionate care
              </strong>.
              Special care is provided to elderly patients and economically
              weaker sections with complete dignity and support throughout their cancer treatment journey.
            </p>

            <div className="mt-12 bg-gradient-to-r from-orange-100 to-orange-50 p-10 rounded-xl text-center">
              <p className="text-2xl font-bold text-orange-700">
                Precise Treatment • Advanced Technology • Compassionate Care
              </p>
              <p className="mt-4 text-gray-700">
                Advanced radiation therapy services in service of humanity
              </p>
            </div>

          </div>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>

          <div
            className="relative w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
