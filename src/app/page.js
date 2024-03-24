import Home from "@/components/HomePage/Home";
import { fetchMapCoordinatesSections } from "./services/fetchMapCoordinatesSections";
import { fetchPrioritySectionsData } from "./services/fetchPrioritySectionsData";

export default async function HomePage() {
  const data = await fetchMapCoordinatesSections() ?? [];
  const priorityData = await fetchPrioritySectionsData() ?? [];

  return (
    <Home mapCoordinatesSections = { data } sectionPriorityData={priorityData} />
  );
}