import AuthService from '@/modules/auth/service';

export default {
	namespaced: true,
	state() {
		return {
			loading: false,
		};
	},
	getters: {
		loading(state) {
			return state.loading;
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
	},
	actions: {
		async login({ commit, dispatch }, payload) {
			commit('setLoading', true);
			try {
				const { data } = await AuthService.login(payload);
				dispatch('User/storeUser', data.user, { root: true });
				commit('Auth/setAccessToken', data.token, { root: true });
			} catch (error) {
				throw error;
			} finally {
				commit('setLoading', false);
			}
		},
	},
};
