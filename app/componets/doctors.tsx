"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, User, Stethoscope } from "lucide-react";

const doctorsData = [
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
  }
];

// Double the list for seamless loop
const loopedDoctors = [...doctorsData, ...doctorsData];

export function DoctorsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleDoctors, setVisibleDoctors] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = loopedDoctors.length; // 40 cards

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleDoctors(1);
      } else if (window.innerWidth < 1024) {
        setVisibleDoctors(2);
      } else {
        setVisibleDoctors(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setStartIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Jab startIndex doctorsData.length pe pahunche (20),
  // transition off karke silently 0 pe reset karo — koi jump nahi dikhega
  useEffect(() => {
    if (startIndex === doctorsData.length) {
      // Transition complete hone ke baad (500ms) silent reset
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [startIndex]);

  // Transition off hone ke bagle frame mein wapas on karo
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  return (
    <section id="doctors" className="py-10 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our Expert Doctors
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced medical professionals dedicated to providing accurate diagnostics and quality healthcare.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleDoctors)}%)`,
                transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
              }}
            >
              {loopedDoctors.map((doctor, index) => (
                <div
                  key={`${doctor.id}-${index}`}
                  className="flex-shrink-0 text-center hover:bg-orange-50 hover:scale-105 transition-all duration-300 rounded-lg p-2 cursor-pointer"
                  style={{ width: `${100 / visibleDoctors}%`, padding: "0 6px" }}
                >
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          doctor.name
                        )}&background=ea580c&color=fff&size=400`;
                      }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mt-3">
                    {doctor.name}
                  </h3>

                  <p className="text-orange-600 font-medium text-sm mt-1">
                    {doctor.specialization}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {doctor.qualification}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons hidden */}
        </div>
      </div>
    </section>
  );
}