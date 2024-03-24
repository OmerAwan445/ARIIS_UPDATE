import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_API_BASE_URL);

export async function fetchAnalysisAgainstThresholds(apiRoute) {
 

  const records = await pb.collection(apiRoute).getFullList({
    sort: "-created",
  });
  return records;
}
// array of objects
