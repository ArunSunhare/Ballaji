import { notFound } from "next/navigation";
import { LocationDetailPage } from "../LocationDetailPage";
import { getLocationPage } from "../locationData";

export default function UttarPradeshLocationPage() {
  const location = getLocationPage("uttar-pradesh");

  if (!location) {
    notFound();
  }

  return <LocationDetailPage location={location} />;
}
