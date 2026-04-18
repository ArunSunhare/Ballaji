"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/app/componets/footer";
import { TopHeader } from "../top_header";
import { TopNavbar } from "../TopNavbar";
import { MainNavbar } from "../MainNavbar";

type FacilityCard = {
  src: string;
  title: string;
  heading?: string;
  content?: string[];
};

type FacilityLayoutProps = {
  heroImage: string;
  heroAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  highlight: string;
  services?: string;
  sectionTitle: string;
  cards: FacilityCard[];
  closing?: string;
  calloutTitle: string;
  calloutSubtitle: string;
};

export function FacilityLayout({
  heroImage,
  heroAlt,
  heroTitle,
  heroSubtitle,
  intro,
  highlight,
  services,
  sectionTitle,
  cards,
  closing,
  calloutTitle,
  calloutSubtitle,
}: FacilityLayoutProps) {
  const [activeCard, setActiveCard] = useState<FacilityCard | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <section className="relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-600 py-16">
        <div className="absolute inset-0 opacity-40">
          <Image src={heroImage} alt={heroAlt} fill priority className="object-cover" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{heroTitle}</h1>
            <p className="text-lg text-white/90 md:text-xl">{heroSubtitle}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="space-y-10 p-8 text-lg leading-relaxed text-gray-800 md:p-12 lg:p-16">
            <p className="text-justify">{intro}</p>

            <div className="rounded-r-xl border-l-4 border-orange-600 bg-orange-50 p-8">
              <p className="text-center text-xl font-semibold italic text-orange-800">{highlight}</p>
            </div>

            {services ? <p className="text-justify">{services}</p> : null}

            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">{sectionTitle}</h2>

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {cards.map((card) => (
                  <button
                    key={`${card.title}-${card.src}`}
                    type="button"
                    onClick={() => setActiveCard(card)}
                    className="overflow-hidden rounded-xl bg-white text-left shadow-md transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image src={card.src} alt={card.title} fill className="object-cover" />
                    </div>
                    <div className="p-4 text-center text-sm font-semibold text-gray-700">{card.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {closing ? <p className="text-justify">{closing}</p> : null}

            <div className="mt-12 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 p-10 text-center">
              <p className="text-2xl font-bold text-orange-700">{calloutTitle}</p>
              <p className="mt-4 text-gray-700">{calloutSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {activeCard ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveCard(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-3xl font-bold text-white"
            onClick={() => setActiveCard(null)}
          >
            x
          </button>

          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <Image src={activeCard.src} alt={activeCard.title} fill className="object-cover" />
            </div>

            <div className="p-6 md:p-8">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                {activeCard.heading || activeCard.title}
              </h2>
              <p className="mb-6 font-semibold text-orange-600">{activeCard.title}</p>

              {activeCard.content?.length ? (
                <div className="space-y-4 leading-relaxed text-gray-700">
                  {activeCard.content.map((paragraph) => (
                    <p key={paragraph} className="text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-justify text-gray-700">
                  This facility image is part of our department gallery.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
