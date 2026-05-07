import { notFound } from "next/navigation";
import { LocationDetailPage } from "../LocationDetailPage";
import { getLocationPage } from "../locationData";

export default function HaryanaLocationPage() {
  const location = getLocationPage("haryana");

  if (!location) {
    notFound();
  }

  return <LocationDetailPage location={location} />;
}
