import { transform } from '@swc/core';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

// Resolve current directory for both Bun and Node
const here = typeof import.meta.dir === 'string' ? import.meta.dir : path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, '..');

// Locate the compiled WASM plugin
const wasmCandidates = [
  path.join(projectRoot, 'target/wasm32-wasip1/release/swc_noop_plugin.wasm'),
  path.join(projectRoot, 'target/wasm32-wasi/release/swc_noop_plugin.wasm'),
];

const wasmPath = wasmCandidates.find((p) => fs.existsSync(p));

if (!wasmPath) {
  console.error('WASM plugin not found. Build it first: "npm run build:wasm"');
  process.exit(2);
}

// The fixture that should trigger an error from the plugin
const fixture = `
import { css, cssMap } from '@compiled/react';
import value from "location";
const styles = cssMap({primary: {color: value()}});
const Element = <div css={styles.primary} />;
`;

const swcOpts = {
  jsc: {
    target: 'es2022',
    parser: { syntax: 'ecmascript', jsx: true },
    transform: { react: { runtime: 'classic', development: false } },
    experimental: {
      plugins: [[wasmPath, {}]],
    },
  },
  filename: 'fixture.tsx',
  sourceMaps: false,
};

async function main() {
  try {
    const out = await transform(fixture, swcOpts);
    console.log('Succeeded. Output code follows.');
    console.log(out.code);
    process.exit(0);
  } catch (e) {
    // Expecting an error with span-rich diagnostics emitted by the plugin/handler
    console.error('Transform failed with diagnostic:');
    // Many SWC errors already include formatted diagnostics in message/stderr
    if (e && e.message) {
      console.error(e.message);
    } else {
      console.error(String(e));
    }
    process.exit(1);
  }
}

main();


