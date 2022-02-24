import ModuleLayout from './module-layout.vue';

export default {
	path: '/',
	component: ModuleLayout,
	redirect: 'login',
	children: [
		{
			path: 'login',
			component: () => import('./pages/login'),
		},
		{
			path: 'signup',
			component: () => import('./pages/signup'),
		},
		{
			path: 'home',
			component: () => import('@/modules/articles/pages/home'),
		},
	],
};
