import { NextResponse } from "next/server";
import { getGithubContributions } from "@/lib/github-contributions";

export const revalidate = 3600;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username") || "Abhaysoft-inc";

    const contributions = await getGithubContributions(username);
    if (!contributions) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub contributions" },
        { status: 502 }
      );
    }

    const total = contributions.reduce((sum, item) => sum + item.value, 0);

    return NextResponse.json({
      username,
      total,
      days: contributions.length,
      contributions,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error fetching GitHub contributions" },
      { status: 500 }
    );
  }
}
