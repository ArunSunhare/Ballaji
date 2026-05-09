"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Footer } from "@/app/componets/footer";
import { MainNavbar } from "@/app/componets/MainNavbar";
import { TopHeader } from "@/app/componets/top_header";
import { TopNavbar } from "@/app/componets/TopNavbar";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { LocationPageData, locationPages } from "./locationData";

type LocationDetailPageProps = {
  location: LocationPageData;
};

export function LocationDetailPage({ location }: LocationDetailPageProps) {
  const { t } = useLanguage();
  const [activeSlug, setActiveSlug] = useState(location.slug);

  const activeLocation = useMemo(
    () => locationPages.find((item) => item.slug === activeSlug) ?? location,
    [activeSlug, location]
  );
  const activeLocationCopy =
    t.ourLocations.locations.find((item) => item.slug === activeLocation.slug) ?? activeLocation;

  const getLocationName = (slug: string, fallback: string) =>
    t.ourLocations.locations.find((item) => item.slug === slug)?.name || fallback;

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-x-4 gap-y-3 border-b border-stone-300 text-xs font-semibold text-stone-500 sm:gap-x-6 sm:text-sm">
              <Link
                href="/our_locations"
                className="border-b-2 border-transparent pb-3 text-stone-500 transition-colors hover:text-orange-700"
              >
                {t.ourLocations.allLocations}
              </Link>

              {locationPages.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveSlug(item.slug)}
                  className={`border-b-2 pb-3 transition-colors ${
                    item.slug === activeLocation.slug
                      ? "border-orange-600 text-orange-700"
                      : "border-transparent text-stone-500 hover:text-orange-700"
                  }`}
                >
                  {getLocationName(item.slug, item.name)}
                </button>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-stone-200 bg-[#faf8f3] p-4 shadow-[0_20px_48px_-30px_rgba(0,0,0,0.32)] md:p-6">
              <div className="grid items-center gap-6 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px]">
                <div className="space-y-4 text-stone-700">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                      {t.ourLocations.eyebrow}
                    </p>
                    <h1 className="text-2xl font-bold leading-tight text-stone-900 md:text-3xl">
                      {activeLocationCopy.subtitle}
                    </h1>
                    <p className="text-sm font-semibold text-orange-700 md:text-base">
                      {activeLocationCopy.address}
                    </p>
                  </div>

                  <p className="text-sm leading-7 md:text-base md:leading-8">
                    {activeLocationCopy.intro}
                  </p>

                  <div className="grid gap-2 text-sm md:text-base">
                    {activeLocationCopy.highlights.slice(0, 2).map((highlight) => (
                      <p key={highlight} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-700" />
                        <span>{highlight}</span>
                      </p>
                    ))}
                  </div>

                  <div>
                    <h2 className="mb-2 text-sm font-bold text-stone-900 md:text-base">{t.ourLocations.coveredAreas}</h2>
                    <div className="flex flex-wrap gap-2">
                      {activeLocationCopy.coverage.map((area) => (
                        <span
                          key={area}
                          className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                    <a
                      href="tel:+919990867867"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-700"
                    >
                      <Phone className="h-4 w-4" />
                      {t.ourLocations.call}
                    </a>
                    <Link
                      href="/contact_us"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-2.5 text-sm font-bold text-stone-800 transition hover:border-orange-500 hover:text-orange-700"
                    >
                      <MapPin className="h-4 w-4" />
                      {t.ourLocations.reachCentre}
                    </Link>
                  </div>
                </div>

                <div className="relative w-full overflow-hidden rounded-[1.2rem] bg-stone-100 p-3 shadow-xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={activeLocation.image}
                      alt={activeLocationCopy.imageAlt}
                      width={760}
                      height={560}
                      className="h-[220px] w-full object-cover md:h-[280px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
