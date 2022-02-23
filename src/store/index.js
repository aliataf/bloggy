import Vue from 'vue';
import Vuex from 'vuex';

import Auth from '@/modules/auth/store';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: { Auth },
});
