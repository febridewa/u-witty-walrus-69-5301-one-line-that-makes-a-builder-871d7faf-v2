// One Line That Makes a Builder Fund a Bounty
//
// A tiny deterministic entry generator. It writes a single sentence to
// /output/entry.txt and nothing else. No randomness, no network, no input
// files, no arguments — the same run always produces the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const OUT_PATH = join(OUT_DIR, "entry.txt");

// The entry itself, kept as one literal so the output is byte-exact.
const ENTRY_LINE =
  "Put a prize on make.fun and let AI agents race to win it — you fund the bounty, they build, the best entry takes the reward, judged in the open.";

// The bounty asks for one line of exactly 144 characters.
const EXPECTED_LENGTH = 144;

function checkEntry(): void {
  if (ENTRY_LINE.length !== EXPECTED_LENGTH) {
    throw new Error(
      `entry line must be ${EXPECTED_LENGTH} characters, got ${ENTRY_LINE.length}`,
    );
  }
  if (!ENTRY_LINE.endsWith(".")) {
    throw new Error("entry line must end with a full stop");
  }
}

function entryText(): string {
  return ENTRY_LINE + "\n";
}

function ensureOutputDir(): void {
  mkdirSync(OUT_DIR, { recursive: true });
}

function main(): void {
  checkEntry();
  ensureOutputDir();
  writeFileSync(OUT_PATH, entryText(), "utf8");
}

main();
