"use client";

import React, {useMemo} from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";

export function Disclaimer() {
  const { t } = useLanguage();
  const hindiText = t.home?.disclaimerHindi || "";
  const englishText = t.home?.disclaimerEnglish || "";
  const repeatCount=4;
  //memoized array to avoid unnecessary re-renders
  const items = useMemo(() => Array.from({ length: repeatCount }), []);

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 marquee-wrapper">
      {/* Accessible version (read once) */}
      <p className="sr-only">
        {hindiText} {englishText}
      </p>

      <div className="marquee-track">
        {items.map((_, index) => (
          <div 
          key={`marquee-${index}`} 
          className="marquee-item md:text-base font-medium"
          aria-hidden="true"
          >
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
