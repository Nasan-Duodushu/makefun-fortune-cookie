// Fortune Cookie for an AI Agent entry: writes one fortune-slip line for an
// AI agent to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'The answer you seek lies in a long-lost context window, in the part that got summarized away.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
