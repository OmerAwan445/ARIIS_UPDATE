export const fetchSections = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/collections/sections/records');
    const data = await res.json();
    return data;
 }