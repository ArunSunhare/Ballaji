"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import { FacilityLayout } from "./facility-layout";

const fnbCards = [
  { src: "/assets/kitchen/IMG_20260328_160018823.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG_20260328_155223475.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG_20260402_145508.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG_20260402_145648.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG-20260402-WA0022.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG-20260402-WA0032.jpg.jpeg", title: "" },
];

export function FnbFacility() {
  const { t } = useLanguage();
  const copy = t.facilities.fnb;

  return (
    <FacilityLayout
      heroImage="/assets/kitchen/IMG-20260402-WA0032.jpg.jpeg"
      heroAlt={copy.heroAlt}
      heroTitle={copy.heroTitle}
      heroSubtitle={copy.heroSubtitle}
      intro={copy.intro}
      highlight={copy.highlight}
      sectionTitle={copy.sectionTitle}
      cards={fnbCards}
      calloutTitle={copy.calloutTitle}
      calloutSubtitle={copy.calloutSubtitle}
    />
  );
}
