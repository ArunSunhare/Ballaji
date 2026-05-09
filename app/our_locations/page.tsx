"use client";

import Link from "next/link";
import { Footer } from "@/app/componets/footer";
import { MainNavbar } from "@/app/componets/MainNavbar";
import { TopHeader } from "@/app/componets/top_header";
import { TopNavbar } from "@/app/componets/TopNavbar";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { locationPages } from "./locationData";

export default function OurLocations() {
  const { t } = useLanguage();

  const baseLocations = [
    { id: 1, slug: "delhi-loc", image: "/assets/banner/banner_3.jpeg", rating: 4.8 },
    { id: 2, slug: "delhi-ncr", image: "/assets/cancer_hospital.jpeg", rating: 4.6 },
    { id: 3, slug: "ghaziabad-loc", image: "/assets/modi_nagar.jpeg", rating: 4.5 },
    { id: 4, slug: "gurugram-loc", image: "/assets/gurugram/main.jpeg", rating: 4.4 },
  ];

  const getLocationCopy = (slug: string) =>
    t.ourLocations.locations.find((location) => location.slug === slug);

  const locations = baseLocations.map((location) => ({
    ...location,
    name:
      getLocationCopy(location.slug)?.cardName ||
      locationPages.find((item) => item.slug === location.slug)?.subtitle ||
      "",
  }));

  const locationFilters = [
    { label: t.ourLocations.allLocations, href: "/our_locations" },
    ...locationPages.map((location) => ({
      label: getLocationCopy(location.slug)?.name || location.name,
      href: `/our_locations/${location.slug}`,
    })),
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <div className="bg-white px-4 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="no-scrollbar mb-8 flex items-center space-x-8 overflow-x-auto border-b border-gray-200">
            {locationFilters.map((filter, index) => (
              <Link
                key={filter.href}
                href={filter.href}
                className={`whitespace-nowrap pb-3 text-sm font-medium transition-colors ${
                  index === 0
                    ? "border-b-2 border-orange-600 text-orange-700"
                    : "text-gray-500 hover:text-orange-700"
                }`}
              >
                {filter.label}
              </Link>
            ))}
          </div>

          <div className="group relative">
            <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-6">
              <div className="flex min-w-[300px] snap-start flex-col justify-center rounded-xl bg-gradient-to-br from-orange-700 to-orange-500 p-8 md:min-w-[380px]">
                <h2 className="mb-4 text-2xl font-bold text-white">
                  {t.ourLocations.networkTitle}
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-orange-100">
                  {t.ourLocations.networkDescription}
                </p>
                <button className="flex w-full items-center justify-between rounded-lg bg-white px-5 py-3 font-semibold text-orange-700 transition-all hover:bg-orange-50 md:w-64">
                  {t.ourLocations.findCentre}
                  <span className="text-xl">›</span>
                </button>
              </div>

              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="flex min-w-[260px] snap-start flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md md:min-w-[280px]"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-grow flex-col justify-between p-5">
                    <h3 className="mb-4 text-[15px] font-bold leading-tight text-gray-800">
                      {loc.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-red-500 text-[10px] font-bold text-white">
                        G
                      </div>
                      <div className="flex text-xs text-yellow-400">
                        {"★".repeat(Math.floor(loc.rating))}
                        <span className="text-gray-300">★</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-500">{loc.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100 md:block">
              <span className="text-2xl text-orange-600">→</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
