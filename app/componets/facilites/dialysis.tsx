"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import { FacilityLayout } from "./facility-layout";

const dialysisCardImages = [{ src: "/assets/dialysis.jpeg" }];

export function DialysisFacility() {
  const { t } = useLanguage();
  const copy = t.facilities.dialysis;
  const dialysisCards = dialysisCardImages.map((card, index) => ({
    ...card,
    ...copy.cards[index],
  }));

  return (
    <FacilityLayout
      heroImage="/assets/dialysis.jpeg"
      heroAlt={copy.heroAlt}
      heroTitle={copy.heroTitle}
      heroSubtitle={copy.heroSubtitle}
      intro={copy.intro}
      highlight={copy.highlight}
      sectionTitle={copy.sectionTitle}
      cards={dialysisCards}
      closing={copy.closing}
      calloutTitle={copy.calloutTitle}
      calloutSubtitle={copy.calloutSubtitle}
    />
  );
}
