import Home from "@/components/HomePage/Home";
import { fetchMapCoordinatesSections } from "./services/fetchMapCoordinatesSections";
import { fetchPrioritySectionsData } from "./services/fetchPrioritySectionsData";
import { fetchSectionsData } from "./services/fetchSectionsData";

export default async function HomePage() {
  const data = await fetchMapCoordinatesSections() ?? [];
  const priorityData = await fetchPrioritySectionsData() ?? [];
  const sectionData  = await fetchSectionsData() ?? [];
  

  return (
    <Home mapCoordinatesSections = { data } sectionData={sectionData} sectionPriorityData={priorityData} />
  );
}