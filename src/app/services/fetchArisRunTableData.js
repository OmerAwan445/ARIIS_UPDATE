import PocketBase from 'pocketbase';

export const fetchArisRunTableData = async () => {
const pb = new PocketBase(process.env.NEXT_PUBLIC_API_BASE_URL);

const records = await pb.collection('runs').getFullList({
    sort: '-created',
});

 return [...records];
}