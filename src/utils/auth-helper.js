import { axiosInstance } from '@/utils/axios';

class AuthHelper {
	setAccessToken(token) {
		localStorage.setItem('accessToken', token);
		axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}

	getAccessToken() {
		let token = localStorage.getItem('accessToken');

		return token;
	}

	reset() {
		localStorage.removeItem('accessToken');
	}
}

const authHelper = new AuthHelper();

export default authHelper;
