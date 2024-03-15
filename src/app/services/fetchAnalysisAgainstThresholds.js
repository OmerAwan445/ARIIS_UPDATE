export async function fetchAnalysisAgainstThresholds (apiRoute) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + apiRoute );
    const data = await res.json();
    return data.items;
}