import AuthModuleRoutes from '@/modules/auth/routes';

const routes = [
	{
		path: '/',
		component: () => import(/* webpackChunkName: "MainLayout" */ '@/layouts/main'),
		children: [],
	},
	{
		path: '/',
		component: () => import(/* webpackChunkName: "AuthLayout" */ '@/layouts/auth'),
		children: [AuthModuleRoutes],
	},
	{
		path: '*',
		component: () => import('@/layouts/404'),
	},
];

export default routes;
