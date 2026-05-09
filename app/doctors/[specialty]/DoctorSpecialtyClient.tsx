"use client";

import { Award, GraduationCap, Stethoscope } from "lucide-react";
import { Footer } from "@/app/componets/footer";
import { MainNavbar } from "@/app/componets/MainNavbar";
import { TopHeader } from "@/app/componets/top_header";
import { TopNavbar } from "@/app/componets/TopNavbar";
import { useLanguage } from "@/app/i18n/LanguageContext";
import type { Doctor } from "@/app/data/doctors";

type DoctorSpecialtyClientProps = {
  doctors: Doctor[];
  specialty: string;
};

export function DoctorSpecialtyClient({ doctors, specialty }: DoctorSpecialtyClientProps) {
  const { language, t } = useLanguage();

  const localizedDoctors = doctors.map((doctor) => ({
    ...doctor,
    ...(t.home.doctorCards.find((item) => item.id === doctor.id) ?? {}),
  }));

  const localizedSpecialty =
    localizedDoctors[0]?.specialization ||
    t.home.doctorCards.find((item) => item.specialization === specialty)?.specialization ||
    specialty;

  const description =
    t.doctorsPage.specialtyDescriptions[
      specialty as keyof typeof t.doctorsPage.specialtyDescriptions
    ] ?? t.doctorsPage.defaultDescription;

  const formatExperience = (experience: string) => {
    if (language === "en") return experience;
    if (experience === "Experienced Specialist") return "अनुभवी विशेषज्ञ";
    return experience.replace("Years", "वर्ष");
  };

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <section className="bg-gradient-to-r from-orange-600 to-red-600 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/80">
            {t.doctorsPage.eyebrow}
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {localizedSpecialty}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
            {description}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {localizedSpecialty} {t.doctorsPage.doctorsSuffix}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {doctors.length}{" "}
              {doctors.length === 1 ? t.doctorsPage.specialistSingular : t.doctorsPage.specialistPlural}{" "}
              {t.doctorsPage.availableInDepartment}
            </p>
          </div>
          <a
            href="/#doctors"
            className="inline-flex w-full items-center justify-center rounded-lg border border-orange-600 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50 sm:w-auto"
          >
            {t.doctorsPage.viewAllDoctors}
          </a>
        </div>

        {localizedDoctors.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {localizedDoctors.map((doctor) => (
              <article
                key={doctor.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4 p-4">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-orange-100 bg-orange-50">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold leading-snug text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-orange-600">
                      {doctor.specialization}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {language === "hi" ? t.doctorsPage.defaultDescription : doctor.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span className="min-w-0 break-words">{doctor.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 shrink-0 text-orange-600" />
                    <span>{formatExperience(doctor.experience)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
            <Stethoscope className="mx-auto mb-3 h-10 w-10 text-orange-600" />
            <h3 className="text-lg font-bold text-gray-900">{t.doctorsPage.noDoctorsTitle}</h3>
            <p className="mt-2 text-sm text-gray-600">
              {t.doctorsPage.noDoctorsDescription}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
