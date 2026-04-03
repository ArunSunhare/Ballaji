"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/app/componets/footer";
import { TopHeader } from "../../top_header";
import { TopNavbar } from "../../TopNavbar";
import { MainNavbar } from "../../MainNavbar";

const radiationTherapyImages = [
  {
    src: "/assets/machine photo/machine photo/TRUEBEAM MACHINE.jpeg",
    title: "TrueBeam Radiotherapy Machine",
  },
];

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

export default function RadiationTherapyPage() {
  const [activeImage, setActiveImage] = useState<null | typeof radiationTherapyImages[0]>(null);

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

            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-teal-900 to-cyan-700 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr] items-center">
                <div className="p-8 md:p-10 lg:p-12 text-white">
                  <p className="text-lg md:text-xl leading-relaxed text-cyan-50">
                    We use precision-targeted radiation to destroy cancer cells while preserving healthy tissue.
                  </p>

                  <h2 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-wide">
                    RADIATION THERAPY TECHNIQUES :
                  </h2>

                  <ul className="mt-6 space-y-3 text-lg md:text-2xl font-medium">
                    {radiationTechniques.map((technique) => (
                      <li key={technique} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                        <span>{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveImage(radiationTherapyImages[0])}
                  className="relative block h-full min-h-[320px] w-full bg-white/10 transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-cyan-200/60"
                >
                  <Image
                    src="/assets/machine photo/machine photo/TRUEBEAM MACHINE.jpeg"
                    alt="TrueBeam machine"
                    fill
                    className="object-cover"
                  />
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

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Radiation Therapy Infrastructure
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {radiationTherapyImages.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-center text-sm font-semibold text-gray-700">
                      {img.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold">
              {activeImage.title}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
