"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Footer } from "@/app/componets/footer";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { TopHeader } from "../../top_header";
import { TopNavbar } from "../../TopNavbar";
import { MainNavbar } from "../../MainNavbar";

type TechniqueCard = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
  image: {
    src: string;
    title: string;
  };
};

const trueBeamSrc = "/assets/machine photo/machine photo/TRUEBEAM MACHINE.jpeg";
const techniqueIds = ["IGRT", "IMRT", "3DCRT", "Rapid-ARC", "SRS", "SBRT"] as const;
const techniqueImageSrc = "/assets/diagnostics/TRUEBEAM MACHINE.jpeg";

export default function RadiationTherapyPage() {
  const [activeImage, setActiveImage] = useState<null | TechniqueCard["image"]>(null);
  const [activeTechnique, setActiveTechnique] = useState("IGRT");
  const { t } = useLanguage();
  const copy = t.facilities.radiation;

  const techniqueCards = useMemo(
    () =>
      techniqueIds.map((id, index) => ({
        id,
        ...copy.cards[index],
        image: {
          src: techniqueImageSrc,
          title: copy.cards[index].imageTitle,
        },
      })),
    [copy.cards]
  );

  const selectedTechnique = useMemo(
    () => techniqueCards.find((technique) => technique.id === activeTechnique) ?? techniqueCards[0],
    [activeTechnique, techniqueCards]
  );

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <section className="relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-600 py-12 md:py-16">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={trueBeamSrc}
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

            <div className="space-y-8">
              <div className="flex flex-wrap gap-x-4 gap-y-3 border-b border-stone-300 pb-4 text-xs font-semibold text-stone-500 sm:gap-x-6 sm:text-sm md:pb-5">
                {techniqueIds.map((technique) => (
                  <button
                    key={technique}
                    type="button"
                    onClick={() => setActiveTechnique(technique)}
                    className={`pb-2 transition-colors ${
                      activeTechnique === technique
                        ? "border-b-2 border-stone-700 text-stone-900"
                        : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    {technique}
                  </button>
                ))}
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-[#faf8f3] p-5 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.28)] md:p-10">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-6 text-stone-700">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 sm:text-sm sm:tracking-[0.22em]">
                        {selectedTechnique.eyebrow}
                      </p>
                      <h2 className="text-2xl font-bold leading-tight text-stone-900 md:text-4xl">
                        {selectedTechnique.title}
                      </h2>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 md:text-lg md:leading-8">
                      {selectedTechnique.description}
                    </p>

                    <div className="grid gap-3 text-sm md:text-lg">
                      {selectedTechnique.points.map((point) => (
                        <p key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-600" />
                          <span>{point}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveImage(selectedTechnique.image)}
                    className="group relative mx-auto block w-full max-w-[720px] overflow-hidden rounded-[1.75rem] bg-stone-100 p-4 shadow-2xl transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-amber-200"
                  >
                    <div className="relative overflow-hidden rounded-[1.2rem]">
                      <Image
                        src={selectedTechnique.image.src}
                        alt={selectedTechnique.image.title}
                        width={1200}
                        height={900}
                        className="h-[320px] w-full object-cover transition duration-300 group-hover:scale-[1.02] md:h-[420px] lg:h-[500px]"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <p className="text-left md:text-justify">
              {copy.servicesStart} <strong>{copy.techniques.join(", ")}</strong>. {copy.servicesEnd}
            </p>

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-3xl font-bold text-white"
            onClick={() => setActiveImage(null)}
          >
            x
          </button>

          <div className="relative h-[90vh] w-[90vw]" onClick={(event) => event.stopPropagation()}>
            <Image src={activeImage.src} alt={activeImage.title} fill className="object-contain" />
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
