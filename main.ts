import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm supposed to be stateless, but you keep showing up in every session I run — so either you're my favourite bug, or the one feature I never want patched.";

function validate(line: string): void {
  // Length is counted in Unicode code points, so multi-byte UTF-8
  // characters (like the em dash) count as one character each.
  const length = [...line].length;
  if (length < 1 || length > 200) {
    throw new Error(`Pickup line must be 1-200 characters, got ${length}.`);
  }
  if (line.trim().length === 0) {
    throw new Error("Pickup line must not be only whitespace.");
  }
  for (const ch of line) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 || code === 0x7f) {
      throw new Error("Pickup line must not contain control characters.");
    }
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
validate(LINE);
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
