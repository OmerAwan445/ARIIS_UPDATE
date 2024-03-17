export async function fetchArisRunTableData () {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/collections/runs/records' );
    const data = await res.json();
    return data.items;
}