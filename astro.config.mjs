// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightKbd from 'starlight-kbd'
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
				starlightKbd({
					globalPicker: false,
					types: [
						{ id: 'minecraft', label: 'Minecraft', default: true },
					],
				}),
				// starlightSidebarTopics([
				// 	{
				// 		label: '虾仁漫游 RIA 指南 V1.0',
				// 		link: '/main/preface',
				// 		icon: 'open-book',
				// 		items: [
				// 			{
				// 				label: '虾仁漫游 RIA 指南 V1.0',
				// 				autogenerate: { directory: 'main' },
				// 			},
				// 		],
				// 	},
				// ]),
			],
			title: 'RIA 虾仁漫游指南',
			logo: {
				light: './src/assets/ria-logo-white.png',
				dark: './src/assets/ria-logo-white.png',
				replacesTitle: false,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/TapuzH/RIA-exploration-guide'
				},
				{
					icon: 'information',
					label: 'RIA Wiki',
					href: 'https://wiki.ria.red'
				},
				{
					icon: 'rocket',
					label: 'RIA 红一号卫星',
					href: 'https://satellite.ria.red'
				},
			],
			sidebar: [
				{
					label: '虾仁漫游 RIA 指南 V1.0',
					items: [
						{ slug: 'preface' },
						{ slug: 'preparation' },
						{
							label: '初入 RIA',
							autogenerate: { directory: 'discovering' },
						},
						{
							label: '漫游 RIA',
							autogenerate: { directory: 'wandering' },
						},
						{ slug: 'conclusion' },
					]
				},
				{
					label: '附录',
					items: [
						{ slug: 'appendix/rating' },
					]
				},
			],
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN', // lang 是 root 语言必须的
				},
			},
			components: {
				// Override the default `Sidebar` component with a custom one.
				// Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
