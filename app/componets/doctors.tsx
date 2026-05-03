"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, User, Stethoscope } from "lucide-react";
import { doctorsData } from "@/app/data/doctors";

// Double the list for seamless loop
const loopedDoctors = [...doctorsData, ...doctorsData];

export function DoctorsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleDoctors, setVisibleDoctors] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = loopedDoctors.length; // doubled list for seamless looping

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

  // Jab startIndex doctorsData.length pe pahunche,
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
                      className="w-full h-full object-cover object-top"
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
