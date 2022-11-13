import { defineConfig } from 'vitepress';
import { MarkdownTransform } from './plugins/markdown-transform';
import { markdown } from './configs';

export default defineConfig({
	title: 'ТакПойдет',
	base: '/tak-poidet/',
	themeConfig: {
		logo: '/logo.svg',
		siteTitle: '',
		sidebar: [
			{
				text: 'Компоненты',
				items: [
					{
						text: 'Кнопка',
						link: '/component/button'
					},
					{
						text: 'Forms',
						items: [
							{
								text: 'Input',
								link: '/component/input'
							},
							{
								text: 'Number',
								link: '/component/number'
							},
							{
								text: 'Radio',
								link: '/component/radio'
							},
							{
								text: 'CheckBox',
								link: '/component/checkbox'
							},
							{
								text: 'Slider',
								link: '/component/slider'
							}
						]
					},
					{
						text: 'Details',
						link: '/component/details'
					},
					{
						text: 'Overlay',
						link: '/component/overlay'
					},
					{
						text: 'Модальные окна',
						items: [
							{
								text: 'Modal Root',
								link: '/component/modal-root'
							},
							{
								text: 'Сообщения',
								link: '/component/messages'
							}
						]
					}
				]
			}
		]
	},
	appearance: false,
	vite: {
		plugins: [MarkdownTransform()]
	},
	markdown: {
		config: (md) => markdown(md)
	}
});
