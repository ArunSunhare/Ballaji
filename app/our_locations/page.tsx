"use client";
import React from 'react';
import { TopHeader } from '../componets/top_header';
import { TopNavbar } from '../componets/TopNavbar';
import { MainNavbar } from '../componets/MainNavbar';
import { Footer } from "@/app/componets/footer";

export default function OurLocations() {
    const locations = [
        {
            id: 1,
            name: "Shri Hanuman Balaji Charitable Diagnostic Centre – Vivek Vihar",
            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop",
            rating: 4.8,
        },
        {
            id: 2,
            name: "Balaji Diagnostic – Noida, Sector 18",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
            rating: 4.6,
        },
        {
            id: 3,
            name: "Balaji Diagnostic – Ghaziabad, Raj Nagar",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
            rating: 4.5,
        },
        {
            id: 4,
            name: "Balaji Diagnostic – Greater Noida, Alpha-1",
            image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
            rating: 4.4,
        },
        {
            id: 5,
            name: "Balaji Diagnostic – Gurgaon, Sector 14",
            image: "https://images.unsplash.com/photo-1580281657702-257584239a55?w=600&h=400&fit=crop",
            rating: 4.5,
        },
        {
            id: 6,
            name: "Balaji Diagnostic – Mehndipur Balaji, Rajasthan",
            image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=600&h=400&fit=crop",
            rating: 4.3,
        },
    ];

    const locationFilters = ["All Locations", "Delhi / NCR", "Uttar Pradesh", "Haryana", "Rajasthan"];

    return (
        <div className="min-h-screen bg-white">
            <TopHeader />
            <TopNavbar />
            <MainNavbar />

            {/* Hero Section */}
            {/* <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-2">Our Locations</h1>
                    <p className="text-orange-100 text-lg">
                        Serving Delhi, Noida, Gurgaon, Greater Noida &amp; Ghaziabad
                    </p>
                </div>
            </div> */}

            <div className="bg-white py-12 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">

                    {/* 1. Tabs/Filters Section */}
                    <div className="flex items-center space-x-8 border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
                        {locationFilters.map((filter, index) => (
                            <button
                                key={index}
                                className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
                                    index === 0
                                        ? 'text-orange-700 border-b-2 border-orange-600'
                                        : 'text-gray-500 hover:text-orange-600'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* 2. Main Horizontal Scroll Area */}
                    <div className="relative group">
                        <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar snap-x">

                            {/* THE INTRO CARD */}
                            <div className="min-w-[300px] md:min-w-[380px] bg-gradient-to-br from-orange-700 to-orange-500 rounded-xl p-8 flex flex-col justify-center snap-start">
                                <h2 className="text-2xl font-bold text-white mb-4">Our Diagnostic Network</h2>
                                <p className="text-orange-100 text-sm leading-relaxed mb-8">
                                    Shri Hanuman Balaji Charitable Diagnostic Centre provides affordable,
                                    world-class diagnostics across Delhi NCR. Home sample collection
                                    available at just ₹50/person.
                                </p>
                                <button className="bg-white hover:bg-orange-50 text-orange-700 font-semibold py-3 px-5 rounded-lg flex justify-between items-center transition-all w-full md:w-64">
                                    Find Centre Near You
                                    <span className="text-xl">›</span>
                                </button>
                            </div>

                            {/* LOCATION CARDS */}
                            {locations.map((loc) => (
                                <div
                                    key={loc.id}
                                    className="min-w-[260px] md:min-w-[280px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col snap-start hover:shadow-md transition-shadow"
                                >
                                    <div className="h-48 w-full overflow-hidden">
                                        <img
                                            src={loc.image}
                                            alt={loc.name}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col justify-between flex-grow">
                                        <h3 className="text-[15px] font-bold text-gray-800 leading-tight mb-4">
                                            {loc.name}
                                        </h3>

                                        <div className="flex items-center gap-2">
                                            {/* Google Icon */}
                                            <div className="w-4 h-4 flex items-center justify-center text-[10px] font-bold text-white bg-red-500 rounded-sm">G</div>
                                            <div className="flex text-yellow-400 text-xs">
                                                {"★".repeat(Math.floor(loc.rating))}
                                                <span className="text-gray-300">★</span>
                                            </div>
                                            <span className="text-xs font-semibold text-gray-500">{loc.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow Indicator */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                            <span className="text-orange-600 text-2xl">→</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}