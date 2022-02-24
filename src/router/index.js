import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import authHelper from '@/utils/auth-helper';

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
	routes,
});

const authWhiteList = ['/login', '/signup', '/home'];
const whiteList = [...authWhiteList, '/articles'];

router.beforeEach((to, from, next) => {
	store
		.dispatch('Auth/getAccessToken')
		.then(() => {
			if (authWhiteList.some((e) => to.path.startsWith(e))) {
				// if is logged in, redirect to feed page

				next('/feed');
			} else {
				next();
			}
		})
		.catch(() => {
			if (whiteList.some((e) => to.path.startsWith(e))) {
				next();
			} else {
				authHelper.reset();
				next('/home');
			}
		});
});

export default router;
