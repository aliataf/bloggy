import ModuleLayout from './module-layout.vue';

export default {
	path: '/',
	component: ModuleLayout,
	redirect: 'home',
	children: [
		/* {
			path: 'home',
			component: () => import('./pages/home'),
		}, */
		{
			path: 'articles/create',
			component: () => import('./pages/create-article'),
		},
	],
};
