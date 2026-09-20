import { NextResponse } from "next/server";

const COUNTER_WORKSPACE = process.env.COUNTER_WORKSPACE ?? "abhay-vishwakarmas-team-5602";
const COUNTER_NAME = process.env.COUNTER_NAME ?? "first-counter-5602";

export async function GET() {
    const apiKey = process.env.COUNTER_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: "Visitor counter is not configured" }, { status: 503 });
    }

    try {
        const counterPath = process.env.NODE_ENV === "production" ? "/up" : "";
        const counterUrl = `https://api.counterapi.dev/v2/${encodeURIComponent(COUNTER_WORKSPACE)}/${encodeURIComponent(COUNTER_NAME)}${counterPath}`;
        const response = await fetch(counterUrl, {
            headers: { Authorization: `Bearer ${apiKey}` },
            cache: "no-store",
        });

        if (!response.ok) {
            console.error(`CounterAPI returned ${response.status} for ${COUNTER_WORKSPACE}/${COUNTER_NAME}`);
            return NextResponse.json({ error: "Visitor counter unavailable" }, { status: 502 });
        }

        const data = (await response.json()) as { data?: { up_count?: number } };
        return NextResponse.json({ count: data.data?.up_count ?? null });
    } catch {
        return NextResponse.json({ error: "Visitor counter unavailable" }, { status: 502 });
    }
}
