// Entry generator for the Useful Mods List
// Pulls from ./useful-mods/useful_mods.json
// Not ran on site build, ran manually through VSCode terminal or NodeJS

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, "useful_mods.json");
const OUTPUT_DIR = __dirname;

const START = "<!-- AUTO-GENERATED:START -->";
const END = "<!-- AUTO-GENERATED:END -->";

const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
const mods = data.mods;

function formatLinks(link) {
  return [
    link?.curseforge ? `[CF](${link.curseforge})` : "",
    link?.modrinth ? `[MR](${link.modrinth})` : ""
  ].filter(Boolean).join(" / ");
}

function buildTable(modList) {
  const sorted = [...modList].sort((a, b) =>
    a.display_name.localeCompare(b.display_name)
  );

  const header =
`| Name | Links | Description | Additional Notes | Alternatives |
|------|-------|-------------|------------------|--------------|`;

  const rows = sorted.map(mod =>
    `| ${mod.display_name} | ${formatLinks(mod.link)} | ${mod.description} | ${mod.additional_notes || "-"} | ${mod.alternatives || "-"} |`
  ).join("\n");

  return `${header}\n${rows}`;
}

const grouped = {};

for (const mod of mods) {
  for (const category of mod.categories) {
    for (const version of mod.versions) {
      for (const loader of mod.loaders) {
        const key = `${category}/${version}/${loader}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(mod);
      }
    }
  }
}

console.log("Grouped keys:", Object.keys(grouped));

for (const key in grouped) {
  const filePath = path.join(OUTPUT_DIR, key, "+page.svx");

  if (!fs.existsSync(filePath)) {
    console.warn(`Missing file: ${filePath}`);
    continue;
  }
    const original = fs.readFileSync(filePath, "utf-8");
    grouped[key].sort((a, b) =>
  a.display_name.localeCompare(b.display_name)
);
  const table = buildTable(grouped[key]);

  const updated = original.replace(
    new RegExp(`${START}[\\s\\S]*?${END}`, "g"),
    `${START}\n${table}\n${END}`
  );

  fs.writeFileSync(filePath, updated);
  console.log(`Updated: ${filePath}`);
}


