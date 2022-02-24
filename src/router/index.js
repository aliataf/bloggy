import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import authHelper from '@/utils/auth-helper';

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
	routes,
});

const whiteList = ['/login', '/signup', '/home'];

router.beforeEach((to, from, next) => {
	store
		.dispatch('Auth/getAccessToken')
		.then(() => {
			if (whiteList.includes(to.path)) {
				// if is logged in, redirect to the home page
				next('/home');
			} else {
				next();
			}
		})
		.catch(() => {
			if (whiteList.includes(to.path)) {
				next();
			} else {
				authHelper.reset();
				next('/login');
			}
		});
});

export default router;
