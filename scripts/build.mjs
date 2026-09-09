import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'out');
if (!output.startsWith(root)) throw new Error('Invalid output directory');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, 'static-src', 'index.html'), resolve(output, 'index.html'));
await cp(resolve(root, 'public', 'save-the-date-bg.png'), resolve(output, 'save-the-date-bg.png'));
await cp(resolve(root, 'public', 'caveat-500.ttf'), resolve(output, 'caveat-500.ttf'));
await cp(resolve(root, 'public', 'caveat-600.ttf'), resolve(output, 'caveat-600.ttf'));
await cp(resolve(root, 'public', 'marck-script.ttf'), resolve(output, 'marck-script.ttf'));
await cp(resolve(root, 'public', 'arina-child.jpg'), resolve(output, 'arina-child.jpg'));
await cp(resolve(root, 'public', 'dima-child.jpg'), resolve(output, 'dima-child.jpg'));
await cp(resolve(root, 'public', 'arina-child-enhanced.png'), resolve(output, 'arina-child-enhanced.png'));
await cp(resolve(root, 'public', 'dima-child-enhanced.png'), resolve(output, 'dima-child-enhanced.png'));
console.log('Static site built in out/');
