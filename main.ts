// SPDX-License-Identifier: MIT
// The Funniest Sick-Day Excuse — program/v1 entry (node22, stdlib only).
//
// Writes one original sick-day excuse, under 200 characters, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The line is a fixed string: the program is deterministic by construction.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, written fresh for this bounty. It leans on something a boss
// might half believe — a smartwatch sleep score — and lands the joke on
// the last two words, the way a real text message would.
const EXCUSE =
  "My smartwatch says I need fourteen more hours of sleep, and I have decided to stop arguing with medical devices.";

function main(): void {
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
}

main();
