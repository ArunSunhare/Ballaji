"use client";

import { useRouter } from "next/navigation";
import { ImageWithFallback } from "./figma/callbackimgs";
import { useLanguage } from "@/app/i18n/LanguageContext";

type Facility = {
  name: string;
  image: string;
  path: string;
};

const facilitiesData: Facility[] = [
  {
    name: "Radiation Therapy",
    image: "/assets/machine photo/machine photo/TRUEBEAM MACHINE.jpeg",
    path: "/componets/facilites/pathology",
  },
  {
    name: "Radiology",
    image: "/assets/diagnostics/CT.jpg",
    path: "/componets/facilites/ct-scan",
  },
  {
    name: "Pathology",
    image: "/assets/pathology.jpeg",
    path: "/componets/facilites/x-ray",
  },
  {
    name: "Dialysis",
    image: "/assets/dialysis.jpeg",
    path: "/componets/facilites/ultrasound",
  },
  {
    name: "Pharmacy",
    image: "/assets/pharmacy/IMG_20260402_145124.jpg.jpeg",
    path: "/componets/facilites/pharmacy",
  },
  {
    name: "F&B",
    image: "/assets/kitchen/IMG-20260402-WA0032.jpg.jpeg",
    path: "/componets/facilites/fnb",
  },
];

export function Facilities() {
  const router = useRouter();
  const { t } = useLanguage();
  const facilityNames: Record<string, string> = {
    "Radiation Therapy": t.home.radiationTherapy,
    Radiology: t.home.radiology,
    Pathology: t.home.pathology,
    Dialysis: t.home.dialysis,
    Pharmacy: t.home.pharmacy,
    "F&B": t.home.fnb,
  };

  return (
    <section id="facilities" className="bg-white py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-center text-xl font-bold text-gray-900 md:text-2xl">{t.home.facilities}</h2>
        <div className="mx-auto mb-6 h-1 w-16 bg-red-600 md:mb-8 md:w-20" />

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:gap-6">
          {facilitiesData.map((facility) => (
            <div key={facility.name} className="w-full">
              <div
                onClick={() => router.push(facility.path)}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3]">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facilityNames[facility.name] || facility.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                  <h3 className="text-center text-xs font-semibold leading-snug text-white sm:text-sm md:text-base lg:text-lg">
                    {facilityNames[facility.name] || facility.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
