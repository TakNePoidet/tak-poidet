import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));

export const pathRoot = resolve(dir, '..');
export const pathSrc = resolve(pathRoot, 'src');
export const pathSvg = resolve(dir, '../../icons-svg/svg');
export const pathComponents = resolve(pathSrc, 'components');
export const pathOutput = resolve(pathRoot, 'dist');
