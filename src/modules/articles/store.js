import Home from './pages/home/store';

function getState() {
	return {
		loading: false,
	};
}

export default {
	namespaced: true,
	modules: { Home },
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
		resetState({ commit }) {
			commit('resetState');
		},
	},
};
