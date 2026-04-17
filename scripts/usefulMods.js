// Entry generator for the Useful Mods List
// Pulls from ./useful-mods/useful_mods.json
// Not ran on site build, ran manually through VSCode terminal or NodeJS

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, "useful_mods.json");
const OUTPUT_DIR = path.join(path.join(__dirname, '..'), "src/routes/wiki/useful-mods");

const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
const mods = data.mods;

function formatLinks(link) {
  return [
    link?.curseforge ? `[CF](${link.curseforge})` : "",
    link?.modrinth ? `[MR](${link.modrinth})` : ""
  ].filter(Boolean).join(" / ");
}

function formatLoader(loader) {
  switch (loader) {
    case "forge": return "Forge";
    case "neoforge": return "NeoForge";
    case "fabric": return "Fabric";
  }
  return `BAD LOADER!! ${loader} DOESN'T EXIST!!`
}
function formatCategory(category) {
  switch (category) {
    case "performance": return "Performance";
    case "bug_fixes": return "Bug Fixes";
    case "profiling": return "Profiling/Debugging";
    case "documentation": return "Documentation";
    case "multiplayer": return "Free Multiplayer"
  }
  return `BAD CATEGORY!! ${category} DOESN'T EXIST!!`
}

function getTableDescriptor(category) {
  switch (category) {
    case "performance": return "These mods directly improve modpack performance through code optimizations.";
    case "bug_fixes": return "These mods fix bugs present in Vanilla Minecraft, other mods, or in loaders.";
    case "profiling": return "These mods help profile and diagnose issues for modpacks, so that issues can be found and fixed.";
    case "documentation": return "These mods help provide information to the player and guide them through content in the modpack.";
    case "multiplayer": return "These mods allow for free multiplayer without the cost or hassle of setting up a server."
  }
  return `BAD CATEGORY!! ${category} DOESN'T EXIST!!`
}
function getFrontMatter(key) {
  let splitKey = key.split("/")
  let category = splitKey[0];
  let version = splitKey[1];
  let loader = formatLoader(splitKey[2]);
  return `---
title: ${formatCategory(category)} mods for ${loader} ${version}
tags: mods, ${loader}, ${version}
description: ${formatCategory(category)} mods for ${loader} ${version}
---

<script lang="ts">
import { Discord } from '$lib/reusables';
</script>

# ${formatCategory(category)} mods for ${loader} ${version}

${getTableDescriptor(category)}\n\n
`
}
function writeFile(newPath, contents, cb) {
  fs.mkdir(path.dirname(newPath), { recursive: true }, function (err) {
    if (err) return cb(err);

    fs.writeFile(newPath, contents, cb);
  });
}
function buildTable(modList) {
  const sorted = [...modList].sort((a, b) =>
    a.display_name.localeCompare(b.display_name)
  );

  const header =
    `| Name | Links | Description | Alternatives |
|------|-------|-------------| --------------|`;

  const rows = sorted.map(mod =>
    `| ${mod.display_name} | ${formatLinks(mod.link)} | ${mod.description} | ${mod.alternatives || "-"} |`
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
const footer = `\n\n\\* - A must-have mod for nearly any modpack. Only in very rare circumstances should you not use this mod or an equivalent.

\** - Prone to issues or conflicts with other mods`
for (const key in grouped) {
  const filePath = path.join(OUTPUT_DIR, key, "+page.svx");

  // if (!fs.existsSync(filePath)) {
  //   console.warn(`Missing file: ${filePath}`);
  //   continue;
  // }
  grouped[key].sort((a, b) =>
    a.display_name.localeCompare(b.display_name)
  );
  const table = buildTable(grouped[key]);

  const finalContent = getFrontMatter(key) + table + footer

  // console.log(updated)
  try {

    writeFile(filePath, finalContent, e => console.log(`Updated: ${filePath}`));
  } catch (err) {
    console.error('Update failed:', err.message);
  }
}

