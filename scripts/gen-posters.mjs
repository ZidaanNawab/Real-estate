/**
 * Creates solid-colour placeholder poster images for the video showcase.
 * Replace with actual first-frame exports (using ffmpeg or screenshot) once available:
 *   ffmpeg -i public/showcase-1.mp4 -vframes 1 -q:v 2 public/images/posters/showcase-1-poster.jpg
 *   ffmpeg -i public/showcase-2.mp4 -vframes 1 -q:v 2 public/images/posters/showcase-2-poster.jpg
 */
import sharp from "sharp";
import { mkdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "posters");
mkdirSync(outDir, { recursive: true });

// Navy blue: rgb(15, 30, 60)
const width = 1280;
const height = 720;

for (const name of ["showcase-1-poster", "showcase-2-poster"]) {
  const outPath = path.join(outDir, `${name}.jpg`);
  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 15, g: 30, b: 60 },
    },
  })
    .jpeg({ quality: 80 })
    .toFile(outPath);
  console.log(`✓ ${name}.jpg created`);
}
console.log("Done — replace these with real first-frame exports when ffmpeg is available.");
