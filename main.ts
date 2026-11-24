import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 1-199 characters: a text to a friend on her wedding week,
// where autocorrect turns "wife" into "wifi" at the worst possible moment.
const entry =
  "Congrats!! I can't wait to see you walk down the aisle and officially become husband and wifi";

if (entry.length < 1 || entry.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
