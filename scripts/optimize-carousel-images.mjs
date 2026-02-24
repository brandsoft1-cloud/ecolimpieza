/**
 * Genera versiones optimizadas (WebP, max 1920px) de las imágenes del carrusel.
 * Ejecutar: node scripts/optimize-carousel-images.mjs
 * Requiere: npm install sharp (devDependency)
 */

import sharp from "sharp";
import { mkdir, readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const IMAGES_DIR = join(ROOT, "public", "images");
const CAROUSEL_DIR = join(ROOT, "public", "carousel");
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 82;

const CAROUSEL_SOURCES = [
  "camion-vactor-nocturno-iluminado.png",
  "camion-vaccon-servicios-bogota.png",
  "operacion-limpieza-alcantarillado-calle.png",
];

async function optimize() {
  await mkdir(CAROUSEL_DIR, { recursive: true });

  for (let i = 0; i < CAROUSEL_SOURCES.length; i++) {
    const name = CAROUSEL_SOURCES[i];
    const srcPath = join(IMAGES_DIR, name);
    const destPath = join(CAROUSEL_DIR, `hero-${i + 1}.webp`);

    try {
      const info = await sharp(srcPath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(destPath);

      console.log(`✓ ${name} → carousel/hero-${i + 1}.webp (${(info.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ ${name}:`, err.message);
    }
  }

  console.log("\nListo. Actualiza HeroCarousel para usar /carousel/hero-1.webp, hero-2.webp, hero-3.webp");
}

optimize();
