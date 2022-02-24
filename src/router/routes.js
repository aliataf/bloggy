import AuthModuleRoutes from '@/modules/auth/routes';
import ArticlesModuleRoutes from '@/modules/articles/routes';
import ProfilesModuleRoutes from '@/modules/profiles/routes';

const routes = [
	{
		path: '/',
		component: () => import(/* webpackChunkName: "MainLayout" */ '@/layouts/main'),
		children: [ArticlesModuleRoutes, ProfilesModuleRoutes],
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
