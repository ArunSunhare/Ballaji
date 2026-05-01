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
      heroTitle="Satya Sheel Gupta Dialysis Hall"
      heroSubtitle="Supportive Care • Safe Environment • Patient Comfort"
      intro="Under the aegis of Shri Hanuman Balaji Charitable Diagnostic Centre we run 8 Bedded Dialysis Centre where we are using best in class and technology, the latest technology Haemodialysis 710200A machine of B Braun Dialog + (German machines) (capacity with all machines 32 dialysis per day)."
      highlight="Comfort-focused dialysis support with compassionate patient care"
      sectionTitle="Dialysis Facility Gallery"
      cards={dialysisCards}
      closing="People with failed or damaged kidneys may have difficulty eliminating waste and unwanted water from the blood. Dialysis is an artificial way of carrying out this process. Dialysis substitutes the natural work of the kidneys."
      calloutTitle="Comfort • Continuity • Compassionate Support"
      calloutSubtitle="A dialysis setting designed around patient reassurance and everyday care"
    />
  );
}
