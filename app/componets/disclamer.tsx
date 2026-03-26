"use client";
import React from "react";

export function Disclaimer() {
  const hindiText = "सनातनी शपथ (शपथ) लेने पर चिकित्सा सेवाओं पर 10-20% की छूट प्राप्त करें";
  const englishText = "Avail 10–20% discount on medical services by taking the Sanatani Oath (Shapath)";

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 marquee-wrapper">
      <div className="marquee-track">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="marquee-item md:text-base font-medium">
            <div className="flex gap-5">
              <div>{hindiText}</div>
              <div>{englishText}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}