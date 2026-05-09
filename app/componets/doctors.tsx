"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { doctorsData } from "@/app/data/doctors";
import { useLanguage } from "@/app/i18n/LanguageContext";

// Double the list for seamless loop
const TRANSITION_DURATION = 500;
const AUTO_SLIDE_INTERVAL = 3000;

export function DoctorsSection() {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleDoctors, setVisibleDoctors] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<number>>(() => new Set());
  const trackRef = useRef<HTMLDivElement>(null);
  const localizedDoctors = useMemo(
    () =>
      doctorsData.map((doctor) => ({
        ...doctor,
        ...(t.home.doctorCards.find((item) => item.id === doctor.id) ?? {}),
      })),
    [t.home.doctorCards]
  );
  const loopedDoctors = useMemo(
    () => [...localizedDoctors, ...localizedDoctors],
    [localizedDoctors]
  );
  const totalOriginal = localizedDoctors.length;
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleResize = () => {
      setIsPaused(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth < 640) setVisibleDoctors(1);
        else if (window.innerWidth < 1024) setVisibleDoctors(2);
        else setVisibleDoctors(4);

        setIsPaused(false);
      }, 150);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);}
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setStartIndex((prev) => prev + 1);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  // seamless reset logic
  useEffect(() => {
    if (startIndex >= totalOriginal) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(0);
      }, TRANSITION_DURATION + 50);

      return () => clearTimeout(timeout);
    }
  }, [startIndex, totalOriginal]);

  // Re-enable transition next frame
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const getAvatarUrl = (name: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=ea580c&color=fff&size=400`;

  return (
    <section id="doctors" className="py-10 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t.home.ourExpertDoctors}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.home.doctorsIntro}
          </p>
        </div>
        {/* Carousel */}
        <div className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex"
              style={{
                transform: `translateX(-${
                  Math.min(startIndex, totalOriginal - 1) * (100 / visibleDoctors)
                }%)`,
                transition: isTransitioning ? `transform ${TRANSITION_DURATION}ms linear` : "none",
              }}
            >
             
              {loopedDoctors.map((doctor, index) => {
                const isDuplicate = index >= totalOriginal;
                const imageKey = doctor.id;
                const imageSrc = failedImages.has(imageKey)
                  ? getAvatarUrl(doctor.name)
                  : encodeURI(doctor.image);

                return (
                  <div
                    key={`${doctor.id}-${index}`}
                    className="flex-shrink-0 text-center hover:bg-orange-50 hover:scale-105 transition-all duration-300 rounded-lg p-2 cursor-pointer"
                    style={{
                      width: `${100 / visibleDoctors}%`,
                      padding: "0 6px",
                    }}
                    aria-hidden={isDuplicate}
                  >
                    {/* Image */}
                    <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                      <img
                        src={imageSrc}
                        alt={doctor.name}
                        className="h-full w-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          setFailedImages((current) => {
                            const next = new Set(current);
                            next.add(imageKey);
                            return next;
                          });
                        }}
                      />
                    </div>

                    {/* Info */}
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
                );
              })}
            </div>
          </div>

          {/* Navigation buttons hidden */}
        </div>
      </div>
    </section>
  );
}
