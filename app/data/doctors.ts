export type Doctor = {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  qualification: string;
  image: string;
  description: string;
};

export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Dr. Saurabh Suman",
    specialization: "Radiologist",
    experience: "15+ Years",
    qualification: "M.B.B.S., M.D. Radio-diagnosis",
    image: "/assets/DR. SAURABH SUMAN.png",
    description: "Expert in radiology with extensive experience in diagnostic imaging procedures."
  },
  {
    id: 2,
    name: "Dr. Vinesh Kumar",
    specialization: "Radiologist",
    experience: "12+ Years",
    qualification: "M.B.B.S., M.D. Radio-diagnosis",
    image: "/assets/DR. VINESH KUMAR.png",
    description: "Specialized in diagnostic imaging including CT, MRI, and X-ray interpretations."
  },
  {
    id: 3,
    name: "Dr. Anuj Aggarwal",
    specialization: "Radiologist",
    experience: "10+ Years",
    qualification: "M.B.B.S., M.D. Radio-diagnosis",
    image: "/assets/DR. ANUJ AGGARWAL.png",
    description: "Expertise in clinical radiology and advanced diagnostic procedures."
  },
  {
    id: 4,
    name: "Dr. N. Savita",
    specialization: "Nuclear Medicine",
    experience: "18+ Years",
    qualification: "M.B.B.S., DMRT, CIRTI. (RSO) (NM)",
    image: "/assets/DR. N SAVITA.png",
    description: "Specialized in nuclear medicine and radioactive diagnostic procedures."
  },
  {
    id: 5,
    name: "Dr. Beauty Sarkar",
    specialization: "Pathologist",
    experience: "14+ Years",
    qualification: "M.B.B.S., M.D. Pathology",
    image: "/assets/DR. BEAUTY SARKAR.png",
    description: "Expert in clinical pathology with extensive experience in diagnostic procedures."
  },
  {
    id: 6,
    name: "Dr. Bharat Singh",
    specialization: "Pathologist",
    experience: "8+ Years",
    qualification: "M.B.B.S., M.D. Pathology",
    image: "/assets/DR. BHARAT SINGH.png",
    description: "Specialized in clinical pathology and histopathology examinations."
  },
  {
    id: 7,
    name: "Dr. T. Aruna Sumanthini",
    specialization: "Oncologist",
    experience: "20+ Years",
    qualification: "M.B.B.S., DMRT, D.N.B. (RT)",
    image: "/assets/DR. T. ARUNA SUMANTHINI.png",
    description: "Expert in radiation oncology and cancer treatment therapies."
  },
  {
    id: 8,
    name: "Dr. Raman Narang",
    specialization: "Medical Oncologist",
    experience: "16+ Years",
    qualification: "M.B.B.S., D.N.B. (RT), Dr.N.B. (MEDICAL ONCOLOGY)",
    image: "/assets/DR. RAMAN NARANG.png",
    description: "Specialized in medical oncology and chemotherapy treatments."
  },
  {
    id: 9,
    name: "Dr. Kamaldeep",
    specialization: "General Surgeon",
    experience: "12+ Years",
    qualification: "M.B.B.S., M.S. (GENERAL SURGERY)",
    image: "/assets/DR. KAMAL DEEP.png",
    description: "Expert in general surgery and surgical procedures."
  },
  {
    id: 10,
    name: "Dr. Amit Jaiswal",
    specialization: "Physician",
    experience: "10+ Years",
    qualification: "M.B.B.S., M.D.(PHYSICIAN)",
    image: "/assets/DR. AMIT JAISWAL.png",
    description: "Specialized in internal medicine and general physician services."
  },
  {
    id: 11,
    name: "Dr. Rajeev Saini",
    specialization: "Physician",
    experience: "8+ Years",
    qualification: "M.B.B.S., M.D.(PHYSICIAN)",
    image: "/assets/DR. RAJEEV SAINI.png",
    description: "Expert in internal medicine and patient care."
  },
  {
    id: 12,
    name: "Dr. Santosh Kumari",
    specialization: "Gynaecologist",
    experience: "15+ Years",
    qualification: "M.B.B.S., M.D. (Obst. & Gynae)",
    image: "/assets/DR. SANTOSH KUMARI.png",
    description: "Specialized in obstetrics and gynecology with extensive experience."
  },
  {
    id: 13,
    name: "Dr. Usha Upreti",
    specialization: "Gynaecologist",
    experience: "12+ Years",
    qualification: "M.B.B.S., M.D. (Obst. & Gynae)",
    image: "/assets/DR. USHA UPRETI.png",
    description: "Expert in women's health and gynecological care."
  },
  {
    id: 14,
    name: "Dr. Manju Gupta",
    specialization: "ENT",
    experience: "10+ Years",
    qualification: "M.B.B.S., DLO (L.H.M.C.)",
    image: "/assets/DR. MANJU GUPTA.png",
    description: "Specialized in ear, nose, and throat disorders."
  },
  {
    id: 15,
    name: "Dr. Ritesh Bansal",
    specialization: "Diabetologist",
    experience: "8+ Years",
    qualification: "M.B.B.S., M.D (S.P.M.). M.R.C.P.",
    image: "/assets/DR. RITESH BANSAL.png",
    description: "Expert in diabetes management and preventive care."
  },
  {
    id: 16,
    name: "Dr. Prince Nigam",
    specialization: "Dermatologist",
    experience: "6+ Years",
    qualification: "M.B.B.S., DVD",
    image: "/assets/DR. PRINCE NIGAM.png",
    description: "Specialized in skin diseases and dermatological treatments."
  },
  {
    id: 17,
    name: "Dr. Taruna Mehra",
    specialization: "Paediatrics",
    experience: "10+ Years",
    qualification: "M.B.B.S. M.D. (Paediatrics)",
    image: "/assets/DR. TARUNA MEHRA.png",
    description: "Expert in pediatric care and child health management."
  },
  {
    id: 18,
    name: "Dr. Nitin Singh",
    specialization: "ENT",
    experience: "12+ Years",
    qualification: "M. B. B. S, M. S. (D.N.B)",
    image: "/assets/Dr. Nitin.png",
    description: "Specialized in ear, nose, and throat disorders with advanced surgical expertise."
  },
  {
    id: 19,
    name: "HR. Sanjay Aneja",
    specialization: "Acupressure & Auricular Acupuncture",
    experience: "15+ Years",
    qualification: "NDDY (IFNHY) DNY",
    image: "/assets/HR. SANJAY ANEJA.png",
    description: "Expert in acupressure and auricular acupuncture therapies for holistic healing."
  },
  {
    id: 20,
    name: "DT. Mansi",
    specialization: "Dietician & Nutritionist",
    experience: "8+ Years",
    qualification: "B. SC & M. SC (Food & Nutrition)",
    image: "/assets/DT. mans.jpg",
    description: "Specialized in clinical nutrition and dietary planning for optimal health."
  },
  {
    id: 21,
    name: "Dr. Vivek Kumar Chhimpa",
    specialization: "Orthopedics",
    experience: "Experienced Specialist",
    qualification: "M.B.B.S., D.N.B",
    image: "/assets/Dr. Vivek Chhimpa1.jpeg",
    description: "Specialized in orthopedic care, bone and joint disorders, and musculoskeletal treatment."
  },
  {
    id: 22,
    name: "Dr. Rajendra Pal Midha",
    specialization: "General Physician",
    experience: "Experienced Specialist",
    qualification: "M.B.B.S.",
    image: "/assets/Dr. RAJENDRA.png",
    description: "Expert in general medicine and primary healthcare with a focus on comprehensive patient care."
  },
  {
    id: 23,
    name: "Dr. Ajay Aggarwal",
    specialization: "Urologist",
    experience: "Experienced Specialist",
    qualification: "M.B.B.S., M.S., M.Ch.",
    image: "/assets/Dr. Ajay Agarwal.png",
    description: "Specialized in urology with experience in urinary tract, kidney, and related surgical care."
  },
  {
    id: 24,
    name: "Dr. Navida Batra",
    specialization: "Cardiologist",
    experience: "Experienced Specialist",
    qualification: "M.B.B.S, MD, DM",
    image: "/assets/Dr. Navida.png",
    description: "Expert in cardiology with a focus on heart health, diagnosis, and preventive cardiac care."
  }
];

export const doctorSpecialties = Array.from(
  new Set(doctorsData.map((doctor) => doctor.specialization))
).sort((a, b) => a.localeCompare(b));

export const doctorSpecialtyDescriptions: Record<string, string> = {
  "Acupressure & Auricular Acupuncture":
    "Acupressure and auricular acupuncture support holistic care by applying focused pressure and stimulation to selected body and ear points.",
  Cardiologist:
    "Cardiologists diagnose, treat, and help prevent heart and vascular conditions through clinical evaluation, testing, and long-term cardiac care.",
  Dermatologist:
    "Dermatologists care for skin, hair, and nail concerns, from common rashes and infections to chronic skin conditions and preventive advice.",
  "Diabetologist":
    "Diabetologists focus on blood sugar control, lifestyle guidance, medication planning, and prevention of diabetes-related complications.",
  "Dietician & Nutritionist":
    "Dieticians and nutritionists guide patients with practical food plans for wellness, disease management, recovery, and preventive health.",
  ENT:
    "ENT specialists treat ear, nose, throat, sinus, voice, and related head and neck concerns with medical and procedural care.",
  "General Physician":
    "General physicians provide first-line medical care, diagnosis, chronic disease follow-up, preventive advice, and referrals when needed.",
  "General Surgeon":
    "General surgeons evaluate and manage surgical conditions, offering operative and non-operative guidance across common surgical concerns.",
  Gynaecologist:
    "Gynaecologists provide care for women's reproductive health, pregnancy-related concerns, menstrual problems, and preventive checkups.",
  "Medical Oncologist":
    "Medical oncologists manage cancer care with chemotherapy, targeted medicines, immunotherapy, and coordinated treatment planning.",
  "Nuclear Medicine":
    "Nuclear medicine specialists use radioactive tracers and advanced imaging techniques to diagnose and monitor selected conditions.",
  Oncologist:
    "Oncologists guide cancer diagnosis, treatment planning, radiotherapy coordination, follow-up care, and symptom management.",
  Orthopedics:
    "Orthopedic specialists treat bone, joint, spine, and muscle conditions, including injuries, arthritis, and mobility concerns.",
  Paediatrics:
    "Paediatricians care for infants, children, and adolescents, including growth monitoring, infections, nutrition, and preventive health.",
  Pathologist:
    "Pathologists examine blood, tissue, and body fluid samples to support accurate diagnosis, disease monitoring, and treatment decisions.",
  Physician:
    "Physicians manage adult medical conditions, preventive care, chronic illness follow-up, and coordinated treatment across body systems.",
  Radiologist:
    "Radiologists interpret imaging such as X-ray, CT, MRI, and ultrasound to help clinicians diagnose and plan treatment.",
  Urologist:
    "Urologists treat urinary tract, kidney, bladder, prostate, and male reproductive concerns with medical and surgical expertise."
};

export const slugifySpecialty = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const getSpecialtyBySlug = (slug: string) =>
  doctorSpecialties.find((specialty) => slugifySpecialty(specialty) === slug);
