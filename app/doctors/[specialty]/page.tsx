import { notFound } from "next/navigation";
import {
  doctorsData,
  doctorSpecialties,
  getSpecialtyBySlug,
  slugifySpecialty,
} from "@/app/data/doctors";
import { DoctorSpecialtyClient } from "./DoctorSpecialtyClient";

type DoctorSpecialtyPageProps = {
  params: Promise<{
    specialty: string;
  }>;
};

export function generateStaticParams() {
  return doctorSpecialties.map((specialty) => ({
    specialty: slugifySpecialty(specialty),
  }));
}

export default async function DoctorSpecialtyPage({ params }: DoctorSpecialtyPageProps) {
  const { specialty: specialtySlug } = await params;
  const specialty = getSpecialtyBySlug(specialtySlug);

  if (!specialty) {
    notFound();
  }

  const doctors = doctorsData.filter((doctor) => doctor.specialization === specialty);

  return <DoctorSpecialtyClient doctors={doctors} specialty={specialty} />;
}
