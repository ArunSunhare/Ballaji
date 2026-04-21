"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Menu, X } from "lucide-react";

const slides = [
  { id: 1, backgroundImage: "/assets/banner/temp.png" },
  { id: 2, backgroundImage: "/assets/banner/banner_3.jpeg" },
  // { id: 3, backgroundImage: "/assets/banner/banner_4.jpeg" },
  // { id: 4, backgroundImage: "/assets/banner/banner5.jpeg" },
  { id: 5, backgroundImage: "/assets/banner/banner_6.jpeg" },
  // { id: 6, backgroundImage: "/assets/banner/dialysis.png" },
  // { id: 7, backgroundImage: "/assets/banner/dialysis.png" }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="bg-gray-20">
      <section 
        className="relative w-full overflow-hidden transition-all duration-700 ease-in-out z-0"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "1280/400",
          width: "100%"
        }}
      >
        {/* Navigation buttons */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? "w-8 h-2 bg-white" 
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}