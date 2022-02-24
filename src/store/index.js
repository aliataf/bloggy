import Vue from 'vue';
import Vuex from 'vuex';

import User from './modules/user';
import Auth from '@/modules/auth/store';
import Articles from '@/modules/articles/store';
import Profiles from '@/modules/profiles/store';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: { User, Auth, Articles, Profiles },
});
