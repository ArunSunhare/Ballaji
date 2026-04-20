"use client";

import { FacilityLayout } from "./facility-layout";

const dialysisCards = [
  {
    src: "/assets/dialysis.jpeg",
    title: "Dialysis Care Unit",
    heading: "Dialysis Facility",
    content: [
      "Equipped for routine dialysis with continuous patient monitoring.",
      "Focused on comfort, hygiene, and safe treatment delivery.",
    ],
  },
];

export function DialysisFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/dialysis.jpeg"
      heroAlt="Dialysis care facility"
      heroTitle="Dedicated Dialysis Facility"
      heroSubtitle="Supportive Care • Safe Environment • Patient Comfort"
      intro="Our Dialysis Facility is designed to support patients with a calm treatment environment, attentive care, and dependable infrastructure for routine dialysis sessions."
      highlight="Comfort-focused dialysis support with compassionate patient care"
      sectionTitle="Dialysis Facility Gallery"
      cards={dialysisCards}
      closing="The dialysis unit experience is centered on patient dignity, careful monitoring, and a supportive environment for recurring treatment needs."
      calloutTitle="Comfort • Continuity • Compassionate Support"
      calloutSubtitle="A dialysis setting designed around patient reassurance and everyday care"
    />
  );
}
