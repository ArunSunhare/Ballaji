"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (    
    <></>
    
    // <div
    //   className="flex items-center gap-1 rounded-lg border border-orange-200 bg-orange-50 p-1 text-xs font-semibold text-gray-700"
    //   aria-label={t.common.language}
    // >
    //   {/* <Languages className="h-4 w-4 text-orange-600" /> */}
    //   <button
    //     type="button"
    //     onClick={() => setLanguage("en")}
    //     className={`rounded-md px-2 py-1 transition-colors ${
    //       language === "en" ? "bg-orange-500 text-white" : "hover:bg-white"
    //     }`}
    //   >
    //     EN
    //   </button>
    //   <button
    //     type="button"
    //     onClick={() => setLanguage("hi")}
    //     className={`rounded-md px-2 py-1 transition-colors ${
    //       language === "hi" ? "bg-orange-500 text-white" : "hover:bg-white"
    //     }`}
    //   >
    //     हिं
    //   </button>
    // </div>
  );
}
