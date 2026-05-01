"use client";

import { useState } from "react";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";

interface TestBookingCardProps {
    test: any;
}

export function TestBookingCard({ test }: TestBookingCardProps) {
    const { addToCart } = useCart();
    const [selectedCentre, setSelectedCentre] = useState("");

    const handleBookNow = () => {
        const derivedPrice =
            typeof test.Rate === "number"
                ? test.Rate
                : parseInt(String(test.price || "").replace(/[^0-9]/g, ""));

        const priceNumber = Number.isFinite(derivedPrice) ? Number(derivedPrice) : 0;

        addToCart({
            id: test.Item_ID || test.slug || test.name,
            name: test.name,
            price: priceNumber,
            type: "test",
            testPreparation: test.testPreparation,
            reportTat: test.reportTat,
            Item_ID: test.Item_ID || "",
            CategoryID: test.CategoryID || test.categoryid || "",
            SubCategoryID: test.SubCategoryID || test.SubcategoryID || "",
            LabType: test.LabType || ""
        });
    };

    return (
        <div className="w-full max-w-full min-w-0 overflow-hidden bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-6">
            <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-4">
                Visit Type
            </h3>

            <button className="w-full bg-orange-600 text-white py-2.5 sm:py-3 rounded-lg mb-5 sm:mb-6 hover:bg-orange-700 transition-colors text-sm sm:text-base font-semibold">
                Visit Centre
            </button>

 
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">
                    Centres
                </h4>
                <div className="relative">
                    <select
                        value={selectedCentre}
                        onChange={(e) => setSelectedCentre(e.target.value)}
                        className="w-full min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg appearance-none bg-white text-sm sm:text-base text-gray-700 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        {test.centres && test.centres.map((centre: string, idx: number) => (
                            <option key={idx} value={centre}>
                                {centre}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <button className="mt-2 text-orange-600 hover:text-orange-700 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                </button>
            </div>


            <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">
                    Tests
                </h4>
                <div className="relative min-w-0">
                    <select className="w-full min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg appearance-none bg-white text-sm sm:text-base text-gray-700 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option>{test.name}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
            </div>

 
            <div className="mb-6 text-center">
          
                <div className="text-2xl sm:text-3xl font-bold leading-tight text-orange-600 break-words">
                  
                    {test.price}
                </div>
            </div>

   
            <button
                onClick={handleBookNow}
                className="w-full bg-orange-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-orange-700 transition-colors mb-3 text-sm sm:text-base font-semibold"
            >
                Book Now
            </button>

            <button className="w-full min-w-0 border-2 border-orange-600 text-orange-600 px-3 py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors text-sm sm:text-base font-semibold mb-3">
                <Phone className="w-4 h-4" />
                <span className="min-w-0 break-words leading-snug">Call {selectedCentre}</span>
            </button>

            <button className="w-full border-2 border-orange-600 text-orange-600 px-3 py-2.5 sm:py-3 rounded-lg hover:bg-orange-50 transition-colors text-sm sm:text-base font-semibold">
                Request A Callback
            </button>
        </div>
    );
}
