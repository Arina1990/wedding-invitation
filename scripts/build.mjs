import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'out');
if (!output.startsWith(root)) throw new Error('Invalid output directory');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, 'static-src', 'index.html'), resolve(output, 'index.html'));
await cp(resolve(root, 'public', 'save-the-date-bg.png'), resolve(output, 'save-the-date-bg.png'));
console.log('Static site built in out/');
