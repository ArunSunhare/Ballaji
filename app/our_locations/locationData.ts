export type LocationPageData = {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  intro: string;
  highlights: string[];
  coverage: string[];
};

export const locationPages: LocationPageData[] = [
  {
    slug: "delhi-ncr",
    name: "Delhi / NCR",
    subtitle: "Charitable diagnostics and cancer care support for Delhi and NCR families.",
    image: "/assets/Header.jpg",
    imageAlt: "Shri Hanuman Balaji charitable diagnostic centre in Delhi NCR",
    intro:
      "Our Delhi / NCR service area is anchored by Shri Hanuman Balaji Charitable Diagnostic Centre at Karkardooma Institutional Area, New Delhi. The centre supports patients with affordable diagnostic services, consultation support, home blood sample collection, and advanced cancer care facilities.",
    highlights: [
      "Central access from East Delhi, Shahdara, Ghaziabad, Noida, Greater Noida, Faridabad, and Gurgaon.",
      "Radiology, pathology, dialysis, pharmacy, F&B, and radiation therapy support under one care network.",
      "Home blood collection and patient coordination through the centre contact numbers.",
    ],
    coverage: ["New Delhi", "East Delhi", "Noida", "Ghaziabad", "Greater Noida", "Gurgaon"],
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    subtitle: "Accessible diagnostic support for nearby Uttar Pradesh cities.",
    image: "/assets/diagnostics/CT.jpg",
    imageAlt: "Diagnostic imaging equipment supporting Uttar Pradesh patients",
    intro:
      "For patients from Uttar Pradesh, the location support is focused on convenient coordination from Noida, Ghaziabad, Greater Noida, and adjoining areas. Patients can access investigations, imaging, pathology, and referral support through the Delhi NCR charitable diagnostic network.",
    highlights: [
      "Support for patients travelling from Noida, Greater Noida, Ghaziabad, and nearby districts.",
      "Diagnostics and treatment planning assistance connected with the main Karkardooma centre.",
      "Home sample collection coordination where service coverage is available.",
    ],
    coverage: ["Noida", "Greater Noida", "Ghaziabad", "Raj Nagar", "Indirapuram", "Nearby UP districts"],
  },
  {
    slug: "haryana",
    name: "Haryana",
    subtitle: "Diagnostic and patient-care access for Gurgaon and nearby Haryana regions.",
    image: "/assets/dialysis.jpeg",
    imageAlt: "Dialysis and diagnostic care support for Haryana patients",
    intro:
      "The Haryana location page helps patients from Gurgaon and nearby areas connect with the charitable diagnostic network for tests, imaging, dialysis-related support, and cancer-care coordination. The aim is to make appointment planning simpler for families travelling into Delhi NCR.",
    highlights: [
      "Patient support for Gurgaon, Faridabad, and nearby Haryana areas.",
      "Diagnostic coordination for radiology, pathology, and day-care service needs.",
      "Clear route back to the main centre for advanced treatment planning and follow-up.",
    ],
    coverage: ["Gurgaon", "Faridabad", "Sector 14", "Manesar", "Bahadurgarh", "Nearby Haryana areas"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    subtitle: "Care guidance for Rajasthan patients, including Mehndipur Balaji visitors.",
    image: "/assets/machine photo/machine photo/TRUEBEAM MACHINE.jpeg",
    imageAlt: "Radiation therapy machine supporting advanced cancer care",
    intro:
      "The Rajasthan location page is designed for patients and families from Mehndipur Balaji and nearby Rajasthan regions who need affordable diagnostics, cancer-care guidance, and coordinated referral support through Shri Hanuman Balaji Charitable Diagnostic Centre.",
    highlights: [
      "Patient coordination for families travelling from Mehndipur Balaji and nearby Rajasthan cities.",
      "Access guidance for diagnostics, pathology, radiology, and advanced radiation therapy services.",
      "Supportive care planning for appointments, reports, and follow-up visits.",
    ],
    coverage: ["Mehndipur Balaji", "Dausa", "Jaipur", "Alwar", "Bharatpur", "Nearby Rajasthan areas"],
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}
