export type LocationPageData = {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  address: string;
  intro: string;
  highlights: string[];
  coverage: string[];
};

export const locationPages: LocationPageData[] = [
  {
    slug: "delhi-loc",
    name: "Delhi",
    subtitle:
      "Shri Hanuman Balaji Charitable Diagnostic Centre (SHBCDC)",
    image: "/assets/banner/banner_3.jpeg",
    imageAlt:
      "Shri Hanuman Balaji Charitable Diagnostic Centre (SHBCDC)",
    address:
      "Plot No : X-24 Karkardooma Institutional Area, Near Karkardooma Court Metro Station, New Delhi - 110092",

    intro:
      "The Delhi centre of Shri Hanuman Balaji Charitable Diagnostic Centre (SHBCDC) provides affordable diagnostic and healthcare support services for patients across Delhi NCR. Located near Karkardooma Court Metro Station, the centre offers radiology, pathology, dialysis support, cancer diagnostics, and patient-focused healthcare coordination under one charitable care network.",

    highlights: [
      "Conveniently located near Karkardooma Court Metro Station for easy patient access.",
      "Affordable diagnostic services including pathology, radiology, and advanced imaging.",
      "Support for cancer care coordination, dialysis assistance, and patient consultation services.",
    ],

    coverage: [
      "New Delhi",
      "East Delhi",
      "Shahdara",
      "Laxmi Nagar",
      "Noida",
      "Ghaziabad",
      "Greater Noida",
    ],
  },

  {
    slug: "delhi-ncr",
    name: "Delhi / NCR",
    subtitle:
      "SHB-MDH Cancer & Multi-Speciality Charitable Hospital",
    image: "/assets/cancer_hospital.jpeg",
    imageAlt:
      "SHB-MDH Cancer & Multi-Speciality Charitable Hospital",

    address:
      "X-25 Karkardooma Institutional Area, Near Karkardooma Court Metro Station, New Delhi - 110092",

    intro:
      "The Delhi NCR facility of SHB-MDH Cancer & Multi-Speciality Charitable Hospital supports patients seeking affordable cancer care, diagnostics, imaging, pathology, and multi-speciality healthcare services. The centre is designed to help families from Delhi NCR access coordinated treatment planning and advanced healthcare support.",

    highlights: [
      "Multi-speciality healthcare support with cancer-care coordination services.",
      "Advanced diagnostic imaging, CT scans, pathology, and laboratory services.",
      "Easy accessibility for patients travelling from Noida, Ghaziabad, Faridabad, and nearby NCR regions.",
    ],

    coverage: [
      "Delhi NCR",
      "Noida",
      "Greater Noida",
      "Ghaziabad",
      "Faridabad",
      "Indirapuram",
      "Vaishali",
    ],
  },

  {
    slug: "ghaziabad-loc",
    name: "Ghaziabad",
    subtitle:
      "Shri Hanuman Balaji Bhartiya Chikitsa Charitable Swasthyavardhak Sansthan",

    image: "/assets/modi_nagar.jpeg",

    imageAlt:
      "Shri Hanuman Balaji Bhartiya Chikitsa Charitable Swasthyavardhak Sansthan",

    address:
      "Khasra No: 92, 259, 275 and 276, Village Ishaknagar, Tehsil Modinagar, District Ghaziabad - 245304",

    intro:
      "The Ghaziabad charitable healthcare centre focuses on affordable patient care, dialysis support, diagnostic coordination, and wellness services for families in Modinagar and nearby Ghaziabad regions. The institution aims to provide accessible healthcare support with charitable medical assistance and patient-centered services.",

    highlights: [
      "Healthcare support services for patients from Modinagar and nearby Ghaziabad areas.",
      "Dialysis-related coordination, diagnostics, and charitable patient care initiatives.",
      "Connected support network for diagnostics, treatment planning, and follow-up care.",
    ],

    coverage: [
      "Ghaziabad",
      "Modinagar",
      "Muradnagar",
      "Raj Nagar",
      "Meerut Road",
      "Hapur",
      "Nearby Uttar Pradesh regions",
    ],
  },

  {
    slug: "gurugram-loc",
    name: "Gurugram",

    subtitle:
      "Shri Hanuman Balaji Aashrit Rogi Sewa Grah",

    image:
      "/assets/gurugram/main.jpeg",

    imageAlt:
      "Shri Hanuman Balaji Aashrit Rogi Sewa Grah in Gurugram",

    address:
      "Plot No 7P, Sector 38, Gurugram, Haryana",

    intro:
      "The Gurugram patient support centre provides accommodation assistance, supportive healthcare coordination, and access guidance for patients and families seeking treatment within the Delhi NCR charitable healthcare network. The centre especially supports patients travelling for advanced diagnostics, radiation therapy, and cancer-care services.",

    highlights: [
      "Supportive stay and patient assistance services for families visiting Gurugram and Delhi NCR.",
      "Guidance for radiation therapy, diagnostics, pathology, and advanced healthcare services.",
      "Convenient connectivity from HUDA City Centre Metro Station, Sohna, and nearby Haryana regions.",
    ],

    coverage: [
      "Gurugram",
      "Sector 38",
      "Sohna",
      "Manesar",
      "Faridabad",
      "HUDA City Centre",
      "Nearby Haryana areas",
    ],
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}