import * as path from 'path';
import { readFile, writeFile } from 'fs/promises';
import { format } from 'prettier';
import type { BuiltInParserName } from 'prettier';
import { emptyDir, ensureDir } from 'fs-extra';
import glob from 'fast-glob';
import consola from 'consola';
import chalk from 'chalk';
import camelcase from 'camelcase';

// @ts-ignore
import { default as prettierConfig } from '@taknepoidet-config/prettier';
import { pathComponents, pathSvg } from './paths';

async function getSvgFiles() {
	return await glob('*.svg', {
		cwd: pathSvg,
		absolute: true
	});
}

const getName = (file: string) => {
	const filename = path.basename(file).replace('.svg', '');
	const name = filename;
	const componentName = camelcase(name, { pascalCase: true });

	return {
		name,
		filename,
		componentName
	};
};

function formatCode(code: string, parser: BuiltInParserName = 'typescript') {
	return format(code, {
		...prettierConfig,
		parser
	});
}

async function transformToVueComponent(file: string) {
	const content = await readFile(file, 'utf-8');
	const { filename, componentName } = getName(file);
	const code = `<template>
${content.replace(/stroke-width="([0-9.]+)"/g, ":stroke-width='strokeWidth'")}
</template>
<script lang="ts">
import {PropType, defineComponent} from 'vue';

export default defineComponent({
name: '${componentName}',
 props: {
 strokeWidth: {
 type: Number as PropType<number>,
 default: 1.5
 }
 }
})
</script>`;

	await writeFile(path.resolve(pathComponents, `${filename}.vue`), formatCode(code, 'vue'), 'utf-8');
}

const generateEntry = async (files: string[]) => {
	const code = formatCode(
		files
			.map((file) => {
				const { filename, componentName } = getName(file);

				return `export { default as ${componentName} } from './${filename}.vue'`;
			})
			.join('\n')
	);

	await writeFile(path.resolve(pathComponents, 'index.ts'), code, 'utf-8');
};

consola.info(chalk.blue('generating vue components'));
await ensureDir(pathComponents);
await emptyDir(pathComponents);
const files = await getSvgFiles();

await Promise.all(files.map((file) => transformToVueComponent(file)));
await generateEntry(files);
consola.info(chalk.blue('generating entry file'));
