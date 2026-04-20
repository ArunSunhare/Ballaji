"use client";

import { FacilityLayout } from "./facility-layout";

const pharmacyCards = [
  {
    src: "/assets/pharmacy/IMG_20260402_145124.jpg.jpeg",
    title: "Medicine Dispensing Counter",
    heading: "In-house Pharmacy",
    content: [
      "Provides quick access to prescribed medicines within the centre.",
      "Ensures safe dispensing and availability of essential drugs.",
    ],
  },
  {
    src: "/assets/pharmacy/IMG20260201082517.jpg.jpeg",
    title: "Patient Assistance Desk",
    heading: "Pharmacy Assistance",
    content: [
      "Guides patients with prescriptions, billing, and medicine queries.",
      "Helps streamline the pharmacy process for a smoother experience.",
    ]
  },
];

export function PharmacyFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/pharmacy/IMG20260201082517.jpg.jpeg"
      heroAlt="Pharmacy facility"
      heroTitle="Accessible Pharmacy Services"
      heroSubtitle="Convenience • Availability • Everyday Patient Support"
      intro="The Pharmacy Facility at Shri Hanuman Balaji Charitable Diagnostic Centre is planned to make medicine access convenient for patients and attendants within the same campus."
      highlight="In-house pharmacy support that complements consultation, diagnostics, and patient care"
      services="Our pharmacy experience focuses on medicine availability, guided support, and smooth coordination so patients can complete their care journey more comfortably."
      sectionTitle="Pharmacy Facility Highlights"
      cards={pharmacyCards}
      closing="We aim to keep the pharmacy journey simple, responsive, and helpful for patients who need dependable support after consultation or investigation."
      calloutTitle="Simple Access • Helpful Guidance • Integrated Care"
      calloutSubtitle="An in-house pharmacy experience built around patient convenience"
    />
  );
}
