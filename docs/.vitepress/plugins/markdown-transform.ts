import type { Plugin } from 'vite';
import path from 'path';

type Append = Record<'scriptSetups', string[]>;
export function MarkdownTransform(): Plugin {
	return {
		name: 'poidet-md-transform',
		enforce: 'pre',
		async transform(code, id) {
			if (!id.endsWith('.md')) return;
			const componentId = path.basename(id, '.md');

			const append: Append = {
				// headers: [],
				// footers: [],
				scriptSetups: [`const demos = import.meta.globEager('../examples/${componentId}/*.vue')`]
			};

			const header = combineScriptSetup(append.scriptSetups);
			return [header, code].join('\n');
		}
	};
}

const combineScriptSetup = (codes: string[]) =>
	`\n<script setup lang="ts">
${codes.join('\n')}
</script>
`;
