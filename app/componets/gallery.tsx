"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "All Photos" },
  { id: "hospital", name: "Hospital" },
  { id: "equipment", name: "Equipment" },
  { id: "staff", name: "Staff" },
  { id: "patients", name: "Patient Care" }
];

const galleryImages = [
  {
    id: 1,
    category: "hospital",
    title: "Hospital Building",
    description: "Main building view of the diagnostic centre",
    image: "/assets/Header.jpg"
  },
  {
    id: 2,
    category: "equipment",
    title: "MRI Machine",
    description: "Advanced MRI imaging facility",
    image: "/assets/diagnostics/MRI.jpg"
  },
  // {
  //   id: 3,
  //   category: "staff",
  //   title: "Clinical Team",
  //   description: "Dedicated medical professionals serving patients",
  //   image: "/assets/DR. AMIT JAISWAL.png"
  // },
  {
    id: 4,
    category: "patients",
    title: "Reception Area",
    description: "Welcoming patient support and registration desk",
    image: "/assets/banner/Reception.png"
  },
  {
    id: 5,
    category: "hospital",
    title: "Diagnostic Centre",
    description: "Clean and modern infrastructure for visitors",
    image: "/assets/hero.jpg"
  },
  {
    id: 6,
    category: "equipment",
    title: "CT Scanner",
    description: "High-quality CT imaging technology",
    image: "/assets/diagnostics/CT.jpg"
  },
  // {
  //   id: 7,
  //   category: "staff",
  //   title: "Specialist Doctor",
  //   description: "Expert-led diagnostic consultation and care",
  //   image: "/assets/DR. SAURABH SUMAN.png"
  // },
  {
    id: 8,
    category: "patients",
    title: "Patient Care Area",
    description: "Supportive spaces built around patient comfort",
    image: "/assets/dialysis.jpeg"
  },
  {
    id: 9,
    category: "equipment",
    title: "Pathology Lab Equipment",
    description: "Reliable pathology and lab diagnostics setup",
    image: "/assets/diagnostics/path_lab.jpg"
  }
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentImageIndex + 1) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Photo Gallery
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our hospital facilities, advanced equipment, and dedicated healthcare team
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors font-medium ${
                selectedCategory === category.id
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image, index)}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>

              {/* Maximize Icon */}
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-gray-800" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
