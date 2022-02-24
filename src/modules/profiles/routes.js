import ModuleLayout from './module-layout.vue';

export default {
	path: '/',
	component: ModuleLayout,
	children: [
		{
			path: 'profiles/:username',
			component: () => import('./pages/view-profile'),
		},
	],
};
