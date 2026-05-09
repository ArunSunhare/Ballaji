"use client";

import { Footer } from "@/app/componets/footer";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { MainNavbar } from "../componets/MainNavbar";
import { TopNavbar } from "../componets/TopNavbar";
import { TopHeader } from "../componets/top_header";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="space-y-12">
          {t.privacyPage.sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-bold text-blue-600">
                {index + 1}. {section.title}
              </h2>
              <div className="space-y-4 text-gray-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {"groups" in section ? (
                  <div className="ml-6 space-y-4">
                    {section.groups.map((group) => (
                      <div key={group.title}>
                        <h4 className="mb-2 font-semibold">{group.title}</h4>
                        {"description" in group ? <p>{group.description}</p> : null}
                        {"items" in group ? (
                          <ul className="ml-4 space-y-1">
                            {group.items.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-1 text-blue-600">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}

                {"bullets" in section ? (
                  <ul className="ml-6 space-y-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {"cards" in section ? (
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {section.cards.map((card) => (
                      <div key={card.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <h4 className="mb-2 font-semibold">{card.title}</h4>
                        <p className="text-sm">{card.description}</p>
                      </div>
                    ))}
                  </div>
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
