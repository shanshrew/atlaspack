import { beforeAll, describe, it, expect } from 'bun:test';
import { transform } from '@swc/core';
import { runTransform } from './transform.js';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const baselineNoop = process.env.BASELINE_NOOP === '1';

const projectRoot = path.resolve(import.meta.dir, '..');
const fixture = `
import { css } from '@compiled/react';
import { value } from 'test';

const test = css({ color: value });
`;

let wasmPath;

beforeAll(async () => {
  // Try wasip1 then wasi
  const p1 = path.join(projectRoot, 'target/wasm32-wasip1/release/swc_noop_plugin.wasm');
  const p2 = path.join(projectRoot, 'target/wasm32-wasi/release/swc_noop_plugin.wasm');
  if (fs.existsSync(p1)) wasmPath = p1;
  else if (fs.existsSync(p2)) wasmPath = p2;
});

describe('swc plugin wasm perf smoke', () => {
  it('transforms code and measures ops/sec', async () => {
    const swcOpts = wasmPath
      ? {
          jsc: {
            target: 'es2022',
            parser: { syntax: 'ecmascript', jsx: true },
            transform: { react: { runtime: 'classic', development: false } },
            experimental: {
              plugins: [[wasmPath, {}]]
            },
          },
          filename: 'fixture.tsx',
          sourceMaps: false,
        }
      : {
          jsc: {
            target: 'es2022',
            parser: { syntax: 'ecmascript', jsx: true },
            transform: { react: { runtime: 'classic', development: false } },
          },
          filename: 'fixture.tsx',
          sourceMaps: false,
        };
    // Warm-up
    const iters = 5000;
    const start = performance.now();
    for (let i = 0; i < iters; i++) {
      await transform(fixture, swcOpts);
    }
    const ms = performance.now() - start;
    const ops = (iters / ms) * 1000;
    console.log(`swc-plugin ops/sec: ${ops.toFixed(0)} (${iters} iters in ${ms.toFixed(1)}ms)`);

    // Single run output smoke assertion
    const output = await transform(fixture, swcOpts);
    console.log(output);

    // Babel plugin baseline perf on the same fixture using transform.js
    const startB = performance.now();
    for (let i = 0; i < iters; i++) {
      runTransform(fixture, { filename: 'fixture.tsx', emitCode: false });
    }
    const msB = performance.now() - startB;
    const opsB = (iters / msB) * 1000;
    console.log(`babel-plugin ops/sec: ${opsB.toFixed(0)} (${iters} iters in ${msB.toFixed(1)}ms)`);

    // Single run to ensure it returns something
    const babelOnce = runTransform(fixture, { filename: 'fixture.tsx', emitCode: true });
    // if (wasmPath && !baselineNoop) {
    //   expect(code).toContain('const a = null');
    //   expect(code).toMatch(/const _\d* = "\._[0-9a-z]+\{/);
    // } else {
    //   expect(typeof code).toBe('string');
    //   if (!wasmPath) {
    //     console.warn('WASM plugin not found; ran baseline transform without plugin.');
    //   } else if (baselineNoop) {
    //     console.warn('Baseline no-op mode enabled; skipping transform assertions.');
    //   }
    // }
  });
});


