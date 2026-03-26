"use client";


import { useRouter } from "next/navigation";
import { ImageWithFallback } from "./figma/callbackimgs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";




type Facility = {
 name: string;
 image: string;
};


const facilitiesData: Facility[] = [
 {
   name: "Radiation Therapy",
   image:
     "/assets/diagnostics/Ortho Clinical Diagnostics Vitros ECiQ immunodiagnostics.jpg",
 },
 {
   name: "Radiology",
   image:
     "/assets/diagnostics/CT.jpg",
 },
 {
   name: "Pathology",
   image:
     "/assets/diagnostics/X-RAY.jpg",
 },
 {
   name: "Dialysis",
   image:
     "/assets/diagnostics/CT.jpg",
 },
 {
   name: "Pharmacy",
   image:
     "/assets/diagnostics/X-RAY.jpg",
 },
 {
   name: "F&B",
   image:
     "/assets/diagnostics/USG.jpg",
 },

];

export function Facilities() {
 const router = useRouter();
 const [startIndex, setStartIndex] = useState(0);
 const visibleFacilities = 4;


 const handleFacilityClick = (name: string) => {
   switch (name) {
     case "Radiation Therapy":
       router.push("/componets/facilites/pathology");
       break;


     case "Radiology":
       router.push("/componets/facilites/ct-scan");
       break;


     case "Pathology":
       router.push("/componets/facilites/x-ray");
       break;


     case "Dialysis":
       router.push("/componets/facilites/ultrasound");
       break;

        case "Pharmacy":
       router.push("/componets/facilites/ultrasound");
       break;
       case "F&B":
        router.push("/componets/facilites/ultrasound");
        break;


     default:
       break;
   }
 };


 const handlePrev = () => {
   setStartIndex((prev) => Math.max(prev - 1, 0));
 };


 const handleNext = () => {
   setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
 };


 const maxStartIndex = Math.max(0, facilitiesData.length - visibleFacilities);


 return (
   <section id="facilities" className="py-10 bg-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
         Facilities
       </h2>
       <div className="w-20 h-1 bg-red-600 mb-8 mx-auto"></div>


       <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto">
         {facilitiesData.map((facility, index) => (
           <div
             key={index}
             className="w-full"
           >
             <div
               onClick={() => handleFacilityClick(facility.name)}
               className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
             >
               <div className="aspect-[4/3] relative">
                 <ImageWithFallback
                   src={facility.image}
                   alt={facility.name}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                 <h3 className="text-white text-sm md:text-lg font-semibold">
                   {facility.name}
                 </h3>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
}




