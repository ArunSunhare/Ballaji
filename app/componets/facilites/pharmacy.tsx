"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import { FacilityLayout } from "./facility-layout";

const pharmacyCardImages = [
  { src: "/assets/pharmacy/IMG_20260402_145124.jpg.jpeg" },
  { src: "/assets/pharmacy/IMG20260201082517.jpg.jpeg" },
];

export function PharmacyFacility() {
  const { t } = useLanguage();
  const copy = t.facilities.pharmacy;
  const pharmacyCards = pharmacyCardImages.map((card, index) => ({
    ...card,
    ...copy.cards[index],
  }));

  return (
    <FacilityLayout
      heroImage="/assets/pharmacy/IMG20260201082517.jpg.jpeg"
      heroAlt={copy.heroAlt}
      heroTitle={copy.heroTitle}
      heroSubtitle={copy.heroSubtitle}
      intro={copy.intro}
      highlight={copy.highlight}
      services={copy.services}
      sectionTitle={copy.sectionTitle}
      cards={pharmacyCards}
      calloutTitle={copy.calloutTitle}
      calloutSubtitle={copy.calloutSubtitle}
    />
  );
}
