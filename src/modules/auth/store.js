import Login from './pages/login/store';
import Signup from './pages/signup/store';
import authHelper from '@/utils/auth-helper';
import { axiosInstance } from '@/utils/axios';

function getState() {
	return {
		loading: false,
		accessToken: authHelper.getAccessToken(),
		gettingAccessTokenPromise: null,
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
			if (accessToken) {
				return Promise.resolve(accessToken);
			} else {
				return Promise.reject(new Error('No access token'));
			}
		},
	},
};
