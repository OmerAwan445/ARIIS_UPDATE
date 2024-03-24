import PocketBase from "pocketbase";
export const fetchPrioritySectionsData = async () => {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_API_BASE_URL);

 const records = await pb.collection("section_priority").getFullList({
   sort: "-created",
 });

  return [...records];
};
