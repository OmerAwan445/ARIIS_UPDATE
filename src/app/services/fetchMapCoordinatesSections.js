import PocketBase from 'pocketbase';
export const fetchMapCoordinatesSections = async () => {
const pb = new PocketBase(process.env.NEXT_PUBLIC_API_BASE_URL);

const records = await pb.collection('map_coordinates').getFullList({
    sort: '-created',
});

 return [...records];
}