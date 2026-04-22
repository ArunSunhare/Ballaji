"use client";

import { FacilityLayout } from "./facility-layout";

const pharmacyCards = [
  {
    src: "/assets/pharmacy/IMG_20260402_145124.jpg.jpeg",
    title: "24*7 Pharmacy",
    heading: "Cost to Cost Medicine",
    content: [
      "24*7 pharmacy.",
      "All medicine sold to everyone at cost price to the pharmacy.",
    ],
  },
  {
    src: "/assets/pharmacy/IMG20260201082517.jpg.jpeg",
    title: "Affordable Medicine Access",
    heading: "Cost to Cost Support",
    content: [
      "Cost to cost medicine.",
      "All medicine sold to everyone at cost price to the pharmacy.",
    ],
  },
];

export function PharmacyFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/pharmacy/IMG20260201082517.jpg.jpeg"
      heroAlt="Pharmacy facility"
      heroTitle="24*7 Pharmacy"
      heroSubtitle="Cost to Cost Medicine"
      intro="24*7 pharmacy. All medicine sold to everyone at cost price to the pharmacy."
      highlight="Cost to cost medicine."
      services="Cost to cost medicine. All medicine sold to everyone at cost price to the pharmacy."
      sectionTitle="Pharmacy Highlights"
      cards={pharmacyCards}
      closing="24*7 pharmacy with cost to cost medicine for everyone."
      calloutTitle="24*7 Pharmacy"
      calloutSubtitle="Cost to cost medicine"
    />
  );
}
