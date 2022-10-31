import DefaultTheme from 'vitepress/theme';
import Demo from '../components/demo.vue';
import { define } from '../utils';
import type { Theme } from 'vitepress';

export default define<Theme>({
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component('demo', Demo);
	}
});

import './style.scss';
