import { readFile } from "node:fs/promises";
import path from "node:path";

export type GithubContribution = {
  t: number;
  value: number;
};

const CONTRIBUTIONS_URL = "https://github.com/users/Abhaysoft-inc/contributions";
const SNAPSHOT_PATH = path.join(process.cwd(), "data", "github-contributions.json");

async function readSnapshot(): Promise<GithubContribution[] | null> {
  try {
    const snapshot = JSON.parse(await readFile(SNAPSHOT_PATH, "utf8")) as GithubContribution[];
    return Array.isArray(snapshot) && snapshot.length ? snapshot : null;
  } catch {
    return null;
  }
}

export async function getGithubContributions(): Promise<GithubContribution[] | null> {
  const snapshot = await readSnapshot();
  if (snapshot) return snapshot;

  try {
    const response = await fetch(CONTRIBUTIONS_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const html = await response.text();
    const contributions: GithubContribution[] = [];
    const cellPattern = /data-date="([^"]+)"[\s\S]*?data-level="(\d+)"[\s\S]*?<\/td>[\s\S]*?<tool-tip[^>]*>([\s\S]*?)<\/tool-tip>/g;
    let match: RegExpExecArray | null;

    while ((match = cellPattern.exec(html)) !== null) {
      const [, date, level, tooltip] = match;
      const countMatch = tooltip.replace(/<[^>]+>/g, "").match(/([\d,]+) contribution/);
      const value = countMatch ? Number(countMatch[1].replace(/,/g, "")) : Number(level);
      contributions.push({ t: Date.parse(`${date}T00:00:00Z`), value });
    }

    return contributions.length ? contributions : null;
  } catch {
    return null;
  }
}
