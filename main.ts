import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);

// Verify the copy byte-for-byte with a SHA-256 check after writing.
const hash = (p: string) =>
  createHash("sha256").update(readFileSync(p)).digest("hex");
const srcHash = hash(src);
const destHash = hash(dest);
if (srcHash !== destHash) {
  throw new Error(`SHA-256 mismatch: ${src} != ${dest}`);
}
console.log("wrote", dest);
console.log("sha256", destHash);
