// gta6-clipper-01 entry: hand in the YouTube Short that clips GTA 6 and pitches
// make.fun. This program does one thing: copy VIDEO.json from this repository
// to the output directory. No network, no wall clock, no files outside the repo,
// so two runs write the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
