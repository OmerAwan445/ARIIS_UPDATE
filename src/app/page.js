import Home from "@/components/HomePage/Home";
import { fetchMapCoordinatesSections } from "./services/fetchMapCoordinatesSections";

export default async function HomePage() {
  const data = await fetchMapCoordinatesSections() ?? [];

  return (
    <Home mapCoordinatesSections = { data } />
  );
}