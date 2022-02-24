import ProfilesService from '@/modules/profiles/service';

function getState() {
	return {
		loading: false,
	};
}

export default {
	namespaced: true,
	state: getState,
	getters: {
		loading(state) {
			return state.loading;
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
		resetState(state) {
			Object.assign(state, getState());
		},
	},
	actions: {
		async followUnfollowProfile({ commit }, author) {
			commit('setLoading', true);
			try {
				if (author.following) {
					await ProfilesService.unfollowProfile(author.username);
				} else {
					await ProfilesService.followProfile(author.username);
				}
			} catch (error) {
				throw error;
			}
		},
		resetState({ commit }) {
			commit('resetState');
		},
	},
};
