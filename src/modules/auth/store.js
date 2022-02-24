import Login from './pages/login/store';
import Signup from './pages/signup/store';
import authHelper from '@/utils/auth-helper';
import { axiosInstance } from '@/utils/axios';

function getState() {
	return {
		loading: false,
		accessToken: authHelper.getAccessToken(),
	};
}

export default {
	namespaced: true,
	modules: {
		Login,
		Signup,
	},
	state: getState,
	getters: {
		loading(state) {
			return state.loading;
		},
		isLoggedIn(state) {
			return state.accessToken;
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
		setAccessToken(state, token) {
			state.accessToken = token;
			authHelper.setAccessToken(token);
			axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + authHelper.getAccessToken();
		},
		resetState(state) {
			Object.assign(state, getState());
		},
	},
	actions: {
		getAccessToken() {
			const accessToken = authHelper.getAccessToken();
			if (accessToken && accessToken !== '') {
				return Promise.resolve(accessToken);
			} else {
				return Promise.reject(new Error('No access token'));
			}
		},
		async isLoggedIn({ dispatch }) {
			try {
				await dispatch('getAccessToken');
				return true;
			} catch (error) {
				return false;
			}
		},
	},
};
