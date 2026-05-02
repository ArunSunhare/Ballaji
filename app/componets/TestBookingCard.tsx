"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";

interface TestBookingCardProps {
    test: any;
}

export function TestBookingCard({ test }: TestBookingCardProps) {
    const { addToCart } = useCart();
    const [selectedCentre, setSelectedCentre] = useState("");
    const [openDropdown, setOpenDropdown] = useState<"centres" | "tests" | null>(null);
    const dropdownAreaRef = useRef<HTMLDivElement | null>(null);
    const centres = Array.isArray(test.centres) ? test.centres : [];
    const activeCentre = selectedCentre || centres[0] || "";

    useEffect(() => {
        const handleOutsideClick = (event: PointerEvent) => {
            if (!dropdownAreaRef.current?.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("pointerdown", handleOutsideClick);
        return () => document.removeEventListener("pointerdown", handleOutsideClick);
    }, []);

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
        <div className="w-full max-w-full min-w-0 overflow-visible bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-6">
            <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-4">
                Visit Type
            </h3>

            <button className="w-full bg-orange-600 text-white py-2.5 sm:py-3 rounded-lg mb-5 sm:mb-6 hover:bg-orange-700 transition-colors text-sm sm:text-base font-semibold">
                Visit Centre
            </button>

            <div ref={dropdownAreaRef}>
                <div className="mb-6 w-full max-w-full min-w-0">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">
                        Centres
                    </h4>
                    <div className="relative w-full min-w-0">
                        <button
                            type="button"
                            onClick={() => setOpenDropdown(openDropdown === "centres" ? null : "centres")}
                            className="flex w-full min-w-0 items-center rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-left text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 sm:px-4 sm:py-3 sm:text-base"
                        >
                            <span className="min-w-0 flex-1 truncate">{activeCentre || "Select centre"}</span>
                        </button>
                        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-transform ${openDropdown === "centres" ? "rotate-180" : ""}`} />
                        {openDropdown === "centres" && (
                            <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                                {centres.map((centre: string, idx: number) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => {
                                            setSelectedCentre(centre);
                                            setOpenDropdown(null);
                                        }}
                                        className="block w-full px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-orange-50 break-words"
                                    >
                                        {centre}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mb-6 w-full max-w-full min-w-0">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">
                        Tests
                    </h4>
                    <div className="relative w-full min-w-0">
                        <button
                            type="button"
                            onClick={() => setOpenDropdown(openDropdown === "tests" ? null : "tests")}
                            className="flex w-full min-w-0 items-center rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-left text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 sm:px-4 sm:py-3 sm:text-base"
                        >
                            <span className="min-w-0 flex-1 truncate" title={test.name}>
                                {test.name}
                            </span>
                        </button>
                        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-transform ${openDropdown === "tests" ? "rotate-180" : ""}`} />
                        {openDropdown === "tests" && (
                            <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                                <button
                                    type="button"
                                    onClick={() => setOpenDropdown(null)}
                                    className="block w-full px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-orange-50 break-words"
                                >
                                    {test.name}
                                </button>
                            </div>
                        )}
                    </div>
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
                <span className="min-w-0 break-words leading-snug">Call {activeCentre}</span>
            </button>

            <button className="w-full border-2 border-orange-600 text-orange-600 px-3 py-2.5 sm:py-3 rounded-lg hover:bg-orange-50 transition-colors text-sm sm:text-base font-semibold">
                Request A Callback
            </button>
        </div>
    );
}
