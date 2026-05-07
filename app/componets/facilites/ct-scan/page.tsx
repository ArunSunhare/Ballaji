"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/app/componets/footer";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { MainNavbar } from "../../MainNavbar";
import { TopNavbar } from "../../TopNavbar";
import { TopHeader } from "../../top_header";

type DiagnosticItem = {
  src: string;
  title: string;
  heading: string;
  content: readonly string[];
};

const diagnosticImages = [
  { src: "/assets/diagnostics/MRI.jpg" },
  { src: "/assets/diagnostics/CT.jpg" },
  { src: "/assets/diagnostics/USG.jpg" },
  { src: "/assets/diagnostics/ECG.jpg" },
  { src: "/assets/banner/TMT (2).jpeg" },
  { src: "/assets/diagnostics/X-RAY.jpg" },
  { src: "/assets/diagnostics/OPG.jpeg" },
  { src: "/assets/diagnostics/PET-CT.jpg" },
];

export default function CTScanPage() {
  const [activeImage, setActiveImage] = useState<null | DiagnosticItem>(null);
  const { t } = useLanguage();
  const copy = t.facilities.radiology;
  const ctScanImages = diagnosticImages.map((image, index) => ({
    ...image,
    ...copy.cards[index],
  }));

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <section className="relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-600 py-12 md:py-16">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/diagnostics/CT.jpg"
            alt={copy.heroAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-white md:mb-4 md:text-5xl">
              {copy.heroTitle}
            </h1>
            <p className="text-base text-white/90 md:text-xl">{copy.heroSubtitle}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="space-y-8 p-5 text-base leading-7 text-gray-800 md:space-y-10 md:p-12 md:text-lg md:leading-relaxed lg:p-16">
            <p className="text-left md:text-justify">
              {copy.introStart} <strong>{copy.introFacility}</strong>{" "}
              {copy.introMiddle ? `${copy.introMiddle} ` : ""}
              <strong>{copy.introCentre}</strong> {copy.introEnd}
            </p>

            <div className="rounded-r-xl border-l-4 border-orange-600 bg-orange-50 p-5 md:p-8">
              <p className="text-center text-lg font-semibold italic text-orange-800 md:text-xl">
                {copy.highlight}
              </p>
            </div>

            <p className="text-left md:text-justify">
              {copy.servicesStart} <strong>{copy.servicesStrong}</strong>. {copy.servicesEnd}
            </p>

            <div>
              <h2 className="mb-5 text-xl font-bold text-gray-900 md:mb-6 md:text-2xl">
                {copy.sectionTitle}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
                {ctScanImages.map((img) => (
                  <button
                    key={`${img.title}-${img.src}`}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className="cursor-pointer overflow-hidden rounded-xl bg-white text-left shadow-md transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image src={img.src} alt={img.title} fill className="object-cover" />
                    </div>
                    <div className="p-4 text-center text-xs font-semibold leading-snug text-gray-700 sm:text-sm">
                      {img.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-left md:text-justify">
              {copy.closingStart} <strong>{copy.closingStrong}</strong>. {copy.closingEnd}
            </p>

            <div className="mt-10 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 p-6 text-center md:mt-12 md:p-10">
              <p className="text-xl font-bold leading-tight text-orange-700 md:text-2xl">
                {copy.calloutTitle}
              </p>
              <p className="mt-3 text-sm text-gray-700 md:mt-4 md:text-base">
                {copy.calloutSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-3xl font-bold text-white"
            onClick={() => setActiveImage(null)}
          >
            x
          </button>

          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <Image src={activeImage.src} alt={activeImage.title} fill className="object-cover" />
            </div>

            <div className="p-5 md:p-8">
              <h2 className="mb-3 text-xl font-bold leading-tight text-gray-900 md:text-3xl">
                {activeImage.heading}
              </h2>
              <p className="mb-5 text-sm font-semibold text-orange-600 md:mb-6 md:text-base">
                {activeImage.title}
              </p>

              <div className="space-y-4 text-sm leading-7 text-gray-700 md:text-base md:leading-relaxed">
                {activeImage.content.map((paragraph) => (
                  <p key={paragraph} className="text-left md:text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
