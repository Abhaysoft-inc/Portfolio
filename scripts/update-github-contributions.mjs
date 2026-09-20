import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const username = "Abhaysoft-inc";
const url = `https://github.com/users/${username}/contributions`;
const outputPath = path.join(process.cwd(), "data", "github-contributions.json");

const response = await fetch(url, {
  headers: { "user-agent": "portfolio-github-contributions-updater" },
});

if (!response.ok) {
  throw new Error(`GitHub returned ${response.status}`);
}

const html = await response.text();
const contributions = [];
const cellPattern = /data-date="([^"]+)"[\s\S]*?data-level="(\d+)"[\s\S]*?<\/td>[\s\S]*?<tool-tip[^>]*>([\s\S]*?)<\/tool-tip>/g;
let match;

while ((match = cellPattern.exec(html)) !== null) {
  const [, date, level, tooltip] = match;
  const text = tooltip.replace(/<[^>]+>/g, "");
  const countMatch = text.match(/([\d,]+) contribution/);
  contributions.push({
    t: Date.parse(`${date}T00:00:00Z`),
    value: countMatch ? Number(countMatch[1].replace(/,/g, "")) : Number(level),
  });
}

if (!contributions.length) {
  throw new Error("No contribution cells found");
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(contributions, null, 2)}\n`);
console.log(`Wrote ${contributions.length} contribution days.`);