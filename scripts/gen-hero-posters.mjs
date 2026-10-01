/**
 * Generate hero poster placeholders (navy blue 1920×1080 desktop, 390×844 mobile).
 * These show instantly while the video buffers.
 * Replace with real first-frame exports if/when ffmpeg becomes available:
 *   ffmpeg -i public/hero-image-bg.MOV -vframes 1 -q:v 2 -vf scale=1920:-2 public/images/hero/hero-desktop-poster.webp
 *   ffmpeg -i public/hero-image-bg-2.MOV -vframes 1 -q:v 2 -vf scale=390:-2 public/images/hero/hero-mobile-poster.webp
 *
 * Run: node scripts/gen-hero-posters.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "hero");
mkdirSync(outDir, { recursive: true });

const posters = [
  { name: "hero-desktop-poster.webp", width: 1920, height: 1080 },
  { name: "hero-mobile-poster.webp",  width: 390,  height: 844  },
];

for (const { name, width, height } of posters) {
  await sharp({
    create: { width, height, channels: 3, background: { r: 15, g: 12, b: 40 } },
  })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, name));
  console.log(`✓ ${name} (${width}×${height})`);
}
console.log("Done — swap with real first frames when ffmpeg is available.");
