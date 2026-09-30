/**
 * Convert hero background images to WebP for faster loading.
 * Run: node scripts/convert-hero-webp.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pub = path.join(__dirname, "..", "public");

const files = [
  { src: "hero-image-bg.jpg",   dest: "hero-image-bg.webp" },
  { src: "hero-image-bg-2.jpg", dest: "hero-image-bg-2.webp" },
];

for (const { src, dest } of files) {
  await sharp(path.join(pub, src))
    .webp({ quality: 82 })
    .toFile(path.join(pub, dest));
  console.log(`✓ ${src} → ${dest}`);
}
console.log("Done.");
