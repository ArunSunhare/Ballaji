"use client";

import { FacilityLayout } from "./facility-layout";

const pharmacyCards = [
  {
    src: "/assets/pharmacy/IMG_20260402_145124.jpg.jpeg",
    title: "24*7 Pharmacy",
    heading: "Shri Hanuman Balaji Pharmacy",
    content: [
      "24*7 pharmacy.",
      "All Medicines including standard generic medicines and other pharmacy products are available absolutely at cost without any mark up, even for the dispensing cost.",
    ],
  },
  {
    src: "/assets/pharmacy/IMG20260201082517.jpg.jpeg",
    title: "Affordable Medicine Access",
    heading: "Shri Hanuman Balaji Pharmacy",
    content: [
      "Affordable Medicine Access.",
      "All Medicines including standard generic medicines and other pharmacy products are available absolutely at cost without any mark up, even for the dispensing cost.",
    ],
  },
];

export function PharmacyFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/pharmacy/IMG20260201082517.jpg.jpeg"
      heroAlt="Pharmacy facility"
      heroTitle="Pharmacy"
      heroSubtitle="Shri Hanuman Balaji Pharmacy"
      intro="The centre is running Shri Hanuman Balaji Pharmacy inside the centre premises, where we are dispensing all types of generic, branded medicines and other pharma products at wholesale rates."
      highlight="Shri Hanuman Balaji Pharmacy - Affordable Medicine Access."
      services="All Medicines including standard generic medicines and other pharmacy products are available absolutely at cost without any mark up, even for the dispensing cost."
      sectionTitle="Pharmacy Highlights"
      cards={pharmacyCards}
      // closing="All Medicines including standard generic medicines and other pharmacy products are available absolutely at cost without any mark up, even for the dispensing cost."
      calloutTitle="24*7 Pharmacy"
      calloutSubtitle="Shri Hanuman Balaji Pharmacy"
    />
  );
}
