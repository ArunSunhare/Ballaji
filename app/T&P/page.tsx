"use client";

import { CheckCircle } from "lucide-react";
import { Footer } from "@/app/componets/footer";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { MainNavbar } from "../componets/MainNavbar";
import { TopNavbar } from "../componets/TopNavbar";
import { TopHeader } from "../componets/top_header";

export default function TermsConditions() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="space-y-12">
          {t.termsPage.sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-bold text-red-600">
                {index + 1}. {section.title}
              </h2>
              <div className="space-y-4 text-gray-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {"checkItems" in section ? (
                  <ul className="ml-6 space-y-2">
                    {section.checkItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {"bullets" in section ? (
                  <ul className="ml-6 space-y-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-red-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
