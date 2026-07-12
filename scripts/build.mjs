import { cp, mkdir, readFile, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "dist");
const sources = [
  "index.html",
  "src",
  "个人作品集",
  "个人头像.jpg",
  "左涛-三维设计师简历.pdf",
  "_redirects"
];
const pagesAssetLimit = 25 * 1024 * 1024;

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const source of sources) {
  await cp(path.join(root, source), path.join(output, source), {
    recursive: true,
    force: true
  });
}

const referencedSource = [
  await readFile(path.join(root, "index.html"), "utf8"),
  await readFile(path.join(root, "src", "site.js"), "utf8")
].join("\n");

async function pruneUnusedVideos(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  let removed = 0;

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      removed += await pruneUnusedVideos(filePath);
      continue;
    }

    if (!/\.(mp4|m4v|webm)$/i.test(entry.name)) continue;
    const relativePath = path.relative(output, filePath).replaceAll("\\", "/");
    if (!referencedSource.includes(relativePath)) {
      await rm(filePath);
      removed += 1;
    }
  }

  return removed;
}

const removedVideos = await pruneUnusedVideos(output);

async function findLargeFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findLargeFiles(filePath));
      continue;
    }

    const fileStat = await stat(filePath);
    if (fileStat.size > pagesAssetLimit) {
      results.push({ filePath, size: fileStat.size });
    }
  }

  return results;
}

const largeFiles = await findLargeFiles(output);
console.log(`Built static portfolio to ${path.relative(root, output)}`);
console.log(`Excluded ${removedVideos} unreferenced video file(s) from the deployment output.`);

if (largeFiles.length) {
  console.warn("Cloudflare Pages warning: these assets exceed the 25 MiB per-file limit:");
  for (const file of largeFiles) {
    const relativePath = path.relative(output, file.filePath);
    console.warn(`- ${(file.size / 1024 / 1024).toFixed(1)} MiB  ${relativePath}`);
  }
  console.warn("Move these videos to Cloudflare R2 or compress each file below 25 MiB before deploying.");
}
