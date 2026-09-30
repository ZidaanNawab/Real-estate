/**
 * One-shot script: convert upcoming project PNGs → WebP (max 800px wide, quality 80)
 * Run: node scripts/convert-webp.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const files = [
  { src: "mauli-the-arc.png", dest: "images/upcoming/mauli-the-arc.webp" },
  {
    src: "mauli-niwasa-phase-2.png",
    dest: "images/upcoming/mauli-niwasa-phase-2.webp",
  },
  { src: "dongar-gaon.png", dest: "images/upcoming/dongar-gaon.webp" },
];

for (const { src, dest } of files) {
  const srcPath = path.join(publicDir, src);
  const destPath = path.join(publicDir, dest);

  // Ensure parent dir exists
  const { mkdirSync } = await import("fs");
  mkdirSync(path.dirname(destPath), { recursive: true });

  await sharp(srcPath)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(destPath);

  console.log(`✓ ${src} → ${dest}`);
}
console.log("Done.");
