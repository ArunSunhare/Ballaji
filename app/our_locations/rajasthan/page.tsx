import { notFound } from "next/navigation";
import { LocationDetailPage } from "../LocationDetailPage";
import { getLocationPage } from "../locationData";

export default function RajasthanLocationPage() {
  const location = getLocationPage("rajasthan");

  if (!location) {
    notFound();
  }

  return <LocationDetailPage location={location} />;
}
