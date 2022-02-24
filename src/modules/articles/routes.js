import ModuleLayout from './module-layout.vue';

export default {
	path: '/',
	component: ModuleLayout,
	redirect: 'feed',
	children: [
		{
			path: 'feed',
			component: () => import('./pages/feed'),
		},
		{
			path: 'articles/create',
			component: () => import('./pages/create-article'),
		},
		{
			path: 'articles/:slug',
			component: () => import('./pages/view-article'),
		},
	],
};
