class AuthHelper {
	setAccessToken(token) {
		localStorage.setItem('accessToken', token);
	}

	getAccessToken() {
		let token = localStorage.getItem('accessToken');

		return token;
	}

	setRefreshToken(token) {
		localStorage.setItem('refreshToken', token);
	}

	getRefreshToken() {
		let token = localStorage.getItem('refreshToken');

		return token;
	}

	setTempAccessToken(token) {
		localStorage.setItem('tempAccessToken', token);
	}

	getTempAccessToken() {
		let token = localStorage.getItem('tempAccessToken');

		return token;
	}

	reset() {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
	}

	resetAll() {
		this.reset();
		localStorage.removeItem('tempAccessToken');
	}
}

const authHelper = new AuthHelper();

export default authHelper;
