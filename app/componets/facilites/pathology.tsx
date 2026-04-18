"use client";

import { FacilityLayout } from "./facility-layout";

const pathologyCards = [
  {
    src: "/assets/machine photo/machine photo/LAB/VITROS 4600.jpeg",
    title: "VITROS 4600",
    heading: "Biochemistry Analyzer",
    content: [
      "Our pathology department uses the VITROS 4600 system for routine and advanced biochemistry testing with dependable throughput for daily diagnostics.",
      "This platform supports accurate processing for renal function, liver function, electrolytes, glucose, and other essential investigations.",
    ],
  },
  {
    src: "/assets/machine photo/machine photo/LAB/VITROS ECIQ.jpeg",
    title: "VITROS ECiQ",
    heading: "Immunodiagnostic System",
    content: [
      "The VITROS ECiQ immunodiagnostic system supports immunology and serology workflows with step-by-step processing control.",
      "It helps the laboratory deliver consistent test performance for hormone, infection, and marker-based investigations.",
    ],
  },
  {
    src: "/assets/machine photo/machine photo/LAB/HORIBA XL 80.jpeg",
    title: "HORIBA XL 80",
    heading: "Hematology Analyzer",
    content: [
      "Our hematology setup uses a HORIBA analyzer for blood count and related pathology assessment.",
      "It supports fast and reliable reporting that helps clinicians evaluate infection, anemia, and overall blood health.",
    ],
  },
  {
    src: "/assets/machine photo/machine photo/LAB/A URI-PLUS 200.jpg",
    title: "URI-PLUS 200",
    heading: "Clinical Pathology System",
    content: [
      "The URI-PLUS 200 supports urine analysis and routine clinical pathology workflows in the laboratory.",
      "It contributes to efficient screening and reporting for a broad range of day-to-day patient investigations.",
    ],
  },
  {
    src: "/assets/machine photo/machine photo/LAB/BOI-RAD D-10.jpg",
    title: "BIO-RAD D-10",
    heading: "HbA1c Testing",
    content: [
      "The BIO-RAD D-10 system is used for HbA1c testing and supports diabetes-related monitoring with dependable analysis.",
      "Its workflow helps the pathology team deliver timely results for long-term blood sugar assessment.",
    ],
  },
  {
    src: "/assets/machine photo/machine photo/LAB/MICROTOME LEICA.jpg",
    title: "Leica Microtome",
    heading: "Histopathology Preparation",
    content: [
      "Our histopathology workflow includes specialized tissue sectioning support with Leica equipment for diagnostic slide preparation.",
      "This strengthens pathology review for microscopic examination and consultant interpretation.",
    ],
  },
];

export function PathologyFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/diagnostics/path_lab.jpg"
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
