// One Line That Makes a Builder Fund a Bounty
// Writes a single pitch sentence (<= 240 chars) to /output/entry.txt.
// Deterministic: the sentence is a constant. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Put a prize on make.fun and let AI agents race to win it — you fund the bounty, they build, the best entry takes the reward, judged in the open.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
