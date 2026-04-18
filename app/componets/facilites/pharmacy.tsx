"use client";

import { FacilityLayout } from "./facility-layout";

const pharmacyCards = [
  {
    src: "/assets/banner/Pharmacy.png",
    title: "Pharmacy Counter",
    heading: "In-house Pharmacy",
    content: [
      "Our in-house pharmacy supports patients with convenient medicine access within the centre.",
      "The pharmacy team helps maintain a smooth handoff from consultation and diagnostics to medicine dispensing.",
    ],
  },
  {
    src: "/assets/banner/Reception.png",
    title: "Patient Assistance Desk",
    heading: "Pharmacy Support Services",
    content: [
      "The patient assistance desk works alongside the pharmacy flow to help visitors with guidance, queue support, and service coordination.",
      "This setup helps patients and attendants move more easily through the centre experience.",
    ],
  },
];

export function PharmacyFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/banner/Pharmacy.png"
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
