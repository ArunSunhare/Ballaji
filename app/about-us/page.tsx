"use client";

import Image from "next/image";
import { Navigation } from "../componets/navbar";
import { Footer } from "../componets/footer";
import { TopHeader } from "../componets/top_header";
import { TopNavbar } from "../componets/TopNavbar";
import { MainNavbar } from "../componets/MainNavbar";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function AboutUsPage() {
  const { t } = useLanguage();
  const a = t.aboutUs;

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-600 py-12 md:py-16">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/hero.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-white md:mb-4 md:text-5xl">
              {a.heroTitle}
            </h1>
            <p className="text-base text-white/90 md:text-xl">
              {a.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 md:py-16">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="space-y-8 p-5 text-base leading-7 text-gray-800 md:space-y-10 md:p-12 md:text-lg md:leading-relaxed lg:p-16">
            {/* Opening Blessing Paragraph */}
            <p className="text-left md:text-justify">
              {a.openingPart1}{" "}
              <strong>{a.openingTemple}</strong> {a.openingAnd}{" "}
              <strong>{a.openingSociety}</strong> {a.openingMiddle}{" "}
              <strong>{a.openingCentre}</strong> {a.openingIn}{" "}
              <strong>{a.openingBuilding}</strong> {a.openingAt}{" "}
              <strong>{a.openingAddress}</strong>.
            </p>

            {/* Primary Focus */}
            <div className="rounded-r-xl border-l-4 border-orange-600 bg-orange-50 p-5 md:p-8">
              <p className="text-center text-lg font-semibold italic text-orange-800 md:text-xl">
                {a.primaryFocus}
              </p>
            </div>

            {/* Services & Commitment */}
            <p className="text-left md:text-justify">
              {a.servicesPrefix && <>{a.servicesPrefix} </>}
              <strong>{a.servicesCentre}</strong>
              {a.servicesSuffix}
            </p>

            {/* Dedication */}
            <p className="text-left md:text-justify">
              {a.dedicationPrefix} <strong>{a.dedicationLabel}</strong> {a.dedicationSuffix}
            </p>

            {/* Closing Statement */}
            <div className="mt-10 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 p-6 text-center md:mt-12 md:p-10">
              <p className="text-xl font-bold leading-tight text-orange-700 md:text-2xl">
                {a.closingTitle}
              </p>
              <p className="mt-3 text-sm text-gray-700 md:mt-4 md:text-base">
                {a.closingSubtitle}
              </p>
            </div>

            {/* Address Card */}
            <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-8">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6 md:col-span-2">
                <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">
                  {a.locationTitle}
                </h3>
                <p className="text-sm leading-7 text-gray-700 md:text-base">
                  {a.locationLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < a.locationLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
