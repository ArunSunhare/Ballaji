"use client";

import { FacilityLayout } from "./facility-layout";

const pathologyCards = [
  {
    src: "/assets/pathology/virtos_5600.webp",
    title: "VITROS 5600",
    heading: "Fully Automated Biochemistry Analyzer",
    content: [
      "Advanced system for high-volume biochemical testing.",
      "Ensures fast and accurate results for routine and specialized diagnostics.",
    ],
  },
  {
    src: "/assets/pathology/OrthoClinicalDiagnosticsVitros4600Chemistry.webp",
    title: "Vitros 4600",
    heading: "Biochemistry Analyzer",
    content: [
      "Reliable platform for routine clinical chemistry tests.",
      "Supports tests like LFT, KFT, glucose, and electrolytes.",
    ],
  },
  {
    src: "/assets/pathology/OrthoClinicalDiagnosticsVitrosECiQimmunodiagnostics.webp",
    title: "Vitros ECiQ",
    heading: "Immunoassay Analyzer",
    content: [
      "Used for hormone, infection, and serology testing.",
      "Provides precise and consistent immunodiagnostic results.",
    ],
  },
  {
    src: "/assets/pathology/HoribaABXPentraXL.webp",
    title: "Horiba 5 Parts Analyser",
    heading: "Hematology Analyzer",
    content: [
      "Performs complete blood count (CBC) with 5-part differential.",
      "Delivers fast and accurate blood analysis.",
    ],
  },
  {
    src: "/assets/pathology/1693658538-D-10 Bio-Rad.webp",
    title: "BIO-RAD D-10",
    heading: "HbA1c Analyzer",
    content: [
      "Used for diabetes monitoring through HbA1c testing.",
      "Ensures reliable long-term glucose assessment.",
    ],
  },
  {
    src: "/assets/pathology/uri_200.jpg",
    title: "URI-PLUS 200",
    heading: "Urine Analyzer",
    content: [
      "Automates urine routine and microscopic analysis.",
      "Improves efficiency in clinical pathology testing.",
    ],
  },
  {
    src: "/assets/pathology/I-chroma2.webp",
    title: "I-Chroma",
    heading: "Immunofluorescence Analyzer",
    content: [
      "Used for rapid testing of cardiac and infection markers.",
      "Provides quick results for emergency diagnostics.",
    ],
  },
  {
    src: "/assets/pathology/ERBAMANNHEIMECL105.webp",
    title: "Erba Microtom",
    heading: "Microtome for Histopathology",
    content: [
      "Used for precise tissue sectioning in histopathology.",
      "Essential for microscopic examination and diagnosis.",
    ],
  },
];

export function PathologyFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/pathology.jpeg"
      heroAlt="Pathology laboratory"
      heroTitle="Advanced Pathology Services"
      heroSubtitle="Reliable Testing • Accurate Reporting • Patient-focused Care"
      intro="The Pathology Department at Shri Hanuman Balaji Charitable Diagnostic Centre is equipped with modern laboratory systems to support timely, dependable, and comprehensive diagnostic testing across major pathology disciplines."
      highlight="Comprehensive pathology services at affordable cost with dependable lab support"
      services="Our pathology services include biochemistry, immunology, serology, hematology, clinical pathology, and histopathology workflows handled by trained professionals under quality-focused processes."
      sectionTitle="Pathology Lab Infrastructure"
      cards={pathologyCards}
      closing="We focus on diagnostic accuracy, smooth sample handling, efficient reporting, and accessible services so patients and clinicians receive dependable support throughout the care journey."
      calloutTitle="Trusted Laboratory Diagnostics • Modern Systems • Affordable Access"
      calloutSubtitle="Pathology support designed for precision, speed, and compassionate service"
    />
  );
}
