import PocketBase from "pocketbase";
export const fetchSectionsData = async () => {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_API_BASE_URL);

  const records = await pb.collection("sections").getFullList({
    sort: "-created",
  });

  return [...records];
};

