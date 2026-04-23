"use client";

import { FacilityLayout } from "./facility-layout";

const fnbCards = [
  { src: "/assets/kitchen/IMG_20260328_160018823.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG_20260328_160018823.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG_20260402_145508.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG_20260402_145648.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG-20260402-WA0022.jpg.jpeg", title: "" },
  { src: "/assets/kitchen/IMG-20260402-WA0032.jpg.jpeg", title: "" },
];

export function FnbFacility() {
  return (
    <FacilityLayout
      heroImage="/assets/kitchen/IMG-20260402-WA0032.jpg.jpeg"
      heroAlt="F and B facility"
      heroTitle="F&B Facility"
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
