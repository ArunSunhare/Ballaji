import { notFound } from "next/navigation";
import { LocationDetailPage } from "../LocationDetailPage";
import { getLocationPage, locationPages } from "../locationData";

type LocationSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locationPages.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationSlugPage({ params }: LocationSlugPageProps) {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    notFound();
  }

  return <LocationDetailPage location={location} />;
}
