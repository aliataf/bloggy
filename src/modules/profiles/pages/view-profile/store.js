import ProfilesService from '@/modules/profiles/service';

export default {
	namespaced: true,
	state() {
		return {
			loading: false,
			profile: [],
		};
	},
	getters: {
		loading(state) {
			return state.loading;
		},
		profile(state) {
			return state.profile;
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
		setProfile(state, value) {
			state.profile = value;
		},
	},
	actions: {
		async getProfileByUsername({ commit }, username) {
			commit('setLoading', true);
			try {
				let { profile } = await ProfilesService.getProfileByUsername(username);
				commit('setProfile', profile);
				return profile;
			} catch (error) {
				throw error;
			} finally {
				commit('setLoading', false);
			}
		},
	},
};
