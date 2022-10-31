import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
import fs from 'fs';
import path from 'path';
export const markdown = (md: MarkdownIt) => {
	md.use(mdContainer, 'demo', {
		validate(params) {
			return !!params.trim().match(/^demo\s*(.*)$/);
		},
		render(tokens, idx) {
			const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
			if (tokens[idx].nesting === 1 /* means the tag is opening */) {
				const sourceFileToken = tokens[idx + 2];
				let source = '';
				const sourceFile = sourceFileToken.children?.[0].content ?? '';
				if (sourceFileToken.type === 'inline') {
					source = fs.readFileSync(path.resolve('./', 'docs/examples', `${sourceFile}.vue`), 'utf-8');
				}
				if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);
				return `<demo :demos="demos" path="${sourceFile}" source="${encodeURIComponent(source)}">`;
			} else {
				return '</demo>';
			}
		}
	});
};
