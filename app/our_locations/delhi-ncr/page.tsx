import { notFound } from "next/navigation";
import { LocationDetailPage } from "../LocationDetailPage";
import { getLocationPage } from "../locationData";

export default function DelhiNcrLocationPage() {
  const location = getLocationPage("delhi-ncr");

  if (!location) {
    notFound();
  }

  return <LocationDetailPage location={location} />;
}
