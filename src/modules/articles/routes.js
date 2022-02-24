import ModuleLayout from './module-layout.vue';

export default {
	path: '/',
	component: ModuleLayout,
	redirect: 'home',
	children: [
		{
			path: 'home',
			component: () => import('./pages/home'),
		},
	],
};
