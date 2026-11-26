import { mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words: The Funniest Epitaph
// One line of famous last words, carved in stone: a dying claim of
// "I'm fine" undercut by the one witness who cannot be argued with.
// Short, quotable, and it turns on a surprise in the final two words.
const EPITAPH = `My last words were "I'm fine." The autopsy disagreed.`;

if (EPITAPH.length > 150 || EPITAPH.length < 1) {
  throw new Error(`Epitaph must be 1-150 characters, got ${EPITAPH.length}`);
}
if (EPITAPH.trim() !== EPITAPH || EPITAPH.includes("\n")) {
  throw new Error("Epitaph must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EPITAPH, "utf8");
console.log(`Wrote ${EPITAPH.length} characters to /output/entry.txt`);
console.log(EPITAPH);
