import { getMainRailGauge } from "../../../lib/connect";
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const data = await getMainRailGauge();
        console.log(data, "data");
        // // return new Response(JSON.parse(JSON.stringify(data)))
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error });
    }
}


