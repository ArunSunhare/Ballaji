"use client";

import { FacilityLayout } from "./facility-layout";

const fnbCards = [
  { src: "/assets/banner/Reception.png", title: "Facility View 1" },
  { src: "/assets/banner/temp.png", title: "Facility View 2" },
  { src: "/assets/banner/chika.png", title: "Facility View 3" },
  { src: "/assets/banner/New Project (1) copy.png", title: "Facility View 4" },
  { src: "/assets/IMG-20260219-WA0008.jpg.jpeg", title: "Facility View 5" },
  { src: "/assets/IMG-20260219-WA0008.jpg1.jpeg", title: "Facility View 6" },
];

export function FnbFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/banner/Reception.png"
      heroAlt="F and B facility"
      heroTitle="F&B Facility Gallery"
      heroSubtitle="Clean Spaces • Supportive Service • Visual Overview"
      intro="This section presents the F&B facility through a simple visual gallery so visitors can browse the department environment in the same style as the other facility pages."
      highlight="A visual walk-through of the F&B facility space"
      sectionTitle="F&B Gallery"
      cards={fnbCards}
      calloutTitle="Facility Views • Smooth Browsing • Consistent Experience"
      calloutSubtitle="Explore the F&B facility through a clean six-image gallery"
    />
  );
}
