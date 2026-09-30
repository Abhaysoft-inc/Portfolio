import { readFile } from "node:fs/promises";
import path from "node:path";

export type GithubContribution = {
  t: number;
  value: number;
};

const USERNAME = "Abhaysoft-inc";
const SNAPSHOT_PATH = path.join(process.cwd(), "data", "github-contributions.json");

interface JogruberApiResponse {
  total?: Record<string, number>;
  contributions?: Array<{
    date: string;
    count: number;
    level: number;
  }>;
}

interface GraphQLContributionsResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks?: Array<{
            contributionDays?: Array<{
              date: string;
              contributionCount: number;
            }>;
          }>;
        };
      };
    };
  };
}

async function fetchFromOfficialGraphQL(username: string, token: string): Promise<GithubContribution[] | null> {
  try {
    const query = `
      query($login: String!) {
        user(login: $login) {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "portfolio-github-contributions",
      },
      body: JSON.stringify({ query, variables: { login: username } }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const json = (await response.json()) as GraphQLContributionsResponse;
    const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    if (!weeks || !Array.isArray(weeks)) return null;

    const contributions: GithubContribution[] = [];
    for (const week of weeks) {
      if (!week.contributionDays) continue;
      for (const day of week.contributionDays) {
        contributions.push({
          t: Date.parse(`${day.date}T00:00:00Z`),
          value: day.contributionCount,
        });
      }
    }

    return contributions.length ? contributions : null;
  } catch {
    return null;
  }
}

async function fetchFromContributionsApi(username: string): Promise<GithubContribution[] | null> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      {
        headers: {
          "User-Agent": "portfolio-github-contributions",
          Accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) return null;

    const data = (await response.json()) as JogruberApiResponse;
    if (!data.contributions || !Array.isArray(data.contributions) || data.contributions.length === 0) {
      return null;
    }

    return data.contributions.map((item) => ({
      t: Date.parse(`${item.date}T00:00:00Z`),
      value: item.count,
    }));
  } catch {
    return null;
  }
}

async function fetchFromHtmlScrape(username: string): Promise<GithubContribution[] | null> {
  try {
    const response = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
      headers: {
        "User-Agent": "portfolio-github-contributions",
      },
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

async function readSnapshot(): Promise<GithubContribution[] | null> {
  try {
    const snapshot = JSON.parse(await readFile(SNAPSHOT_PATH, "utf8")) as GithubContribution[];
    return Array.isArray(snapshot) && snapshot.length ? snapshot : null;
  } catch {
    return null;
  }
}

export async function getGithubContributions(username = USERNAME): Promise<GithubContribution[] | null> {
  // 1. Try official GitHub GraphQL API if GITHUB_TOKEN is available
  const githubToken = process.env.GITHUB_TOKEN;
  if (githubToken) {
    const fromGraphQL = await fetchFromOfficialGraphQL(username, githubToken);
    if (fromGraphQL) return fromGraphQL;
  }

  // 2. Fetch from public GitHub contributions REST API
  const fromApi = await fetchFromContributionsApi(username);
  if (fromApi) return fromApi;

  // 3. Fallback to scraping GitHub public contributions page
  const fromHtml = await fetchFromHtmlScrape(username);
  if (fromHtml) return fromHtml;

  // 4. Last resort: read local snapshot file if one exists
  const snapshot = await readSnapshot();
  if (snapshot) return snapshot;

  return null;
}
