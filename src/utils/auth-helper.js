class AuthHelper {
	setAccessToken(token) {
		localStorage.setItem('accessToken', token);
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
