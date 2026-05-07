"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import { FacilityLayout } from "./facility-layout";

const pathologyCardImages = [
  { src: "/assets/pathology/virtos_5600.webp" },
  { src: "/assets/pathology/OrthoClinicalDiagnosticsVitros4600Chemistry.webp" },
  { src: "/assets/pathology/OrthoClinicalDiagnosticsVitrosECiQimmunodiagnostics.webp" },
  { src: "/assets/pathology/HoribaABXPentraXL.webp" },
  { src: "/assets/pathology/1693658538-D-10 Bio-Rad.webp" },
  { src: "/assets/pathology/uri_200.jpg" },
  { src: "/assets/pathology/I-chroma2.webp" },
  { src: "/assets/pathology/ERBAMANNHEIMECL105.webp" },
];

export function PathologyFacility() {
  const { t } = useLanguage();
  const copy = t.facilities.pathology;
  const pathologyCards = pathologyCardImages.map((card, index) => ({
    ...card,
    ...copy.cards[index],
  }));

  return (
    <FacilityLayout
      heroImage="/assets/pathology.jpeg"
      heroAlt={copy.heroAlt}
      heroTitle={copy.heroTitle}
      heroSubtitle={copy.heroSubtitle}
      intro={copy.intro}
      highlight={copy.highlight}
      services={copy.services}
      sectionTitle={copy.sectionTitle}
      cards={pathologyCards}
      closing={copy.closing}
      calloutTitle={copy.calloutTitle}
      calloutSubtitle={copy.calloutSubtitle}
    />
  );
}
