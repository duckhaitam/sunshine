// scripts/make-images.mjs
import sharp from "sharp";
import { globby } from "globby";
import fs from "fs-extra";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

/** Nơi chứa ảnh gốc (jpg/png) */
const INPUT_GLOB = "src/assets/**/*.{jpg,jpeg,png}";

/** Ảnh đầu ra. Với Vite, mọi file trong /public có thể dùng trực tiếp /img/... */
const OUTPUT_DIR = path.resolve(__dirname, "../public/img");

/** Tạo 4 cỡ + 2 định dạng mới */
const WIDTHS = [480, 768, 1200, 1600];
const FORMATS = ["avif", "webp"]; // có thể thêm "jpeg" nếu muốn fallback nữa

const QUALITY = {
  avif: 50,  // 40–60 là đẹp
  webp: 72,  // 70–80 là ổn
};

async function run() {
  const files = await globby(INPUT_GLOB);
  if (!files.length) {
    console.log("Không tìm thấy ảnh nguồn:", INPUT_GLOB);
    return;
  }

  await fs.ensureDir(OUTPUT_DIR);

  for (const file of files) {
    const name = path.parse(file).name; // ten-anh
    const relDir = path.relative("src/assets", path.dirname(file)); // thu-muc-con
    const outDir = path.join(OUTPUT_DIR, relDir);
    await fs.ensureDir(outDir);

    const buf = await fs.readFile(file);
    for (const w of WIDTHS) {
      for (const fmt of FORMATS) {
        const outFile = path.join(outDir, `${name}-${w}.${fmt}`);
        await sharp(buf)
          .resize({ width: w, withoutEnlargement: true })
          [fmt]({ quality: QUALITY[fmt] })
          .toFile(outFile);
        console.log("→", path.relative(process.cwd(), outFile));
      }
    }
  }

  console.log("✅ Done. Ảnh optimized nằm trong /public/img");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
