function initUser() {
	let res;
	try {
		res = JSON.parse(localStorage.getItem('user')) || null;
		return res;
	} catch {
		res = {};
		return res;
	}
}

function getState() {
	return {
		user: initUser(),
	};
}

export default {
	namespaced: true,
	state: getState,
	getters: {
		loading(state) {
			return state.loading;
		},
		user(state) {
			return state.user;
		},
	},
	mutations: {
		setUser(state, value) {
			state.user = value;
		},
		resetState(state) {
			Object.assign(state, getState());
		},
	},
	actions: {
		storeUser({ commit }, user) {
			commit('setUser', user);
			localStorage.setItem('user', JSON.stringify(user));
		},
	},
};
