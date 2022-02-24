import { Notification } from 'element-ui';

export function addNotificationInterceptor(axiosInstance) {
	axiosInstance.interceptors.response.use(
		(response) => {
			handleResponseStatus(response);
			return Promise.resolve(response);
		},
		(error) => {
			if (error.response) {
				handleResponseStatus(error.response);
			}
			return Promise.reject(error);
		},
	);

	function handleResponseStatus(response) {
		if (response.config.hideNotification) return;
		let text = Object.entries(response.data?.errors ?? {})?.[0]?.join(' ') ?? '',
			type;
		if (
			text === '' ||
			response.status < 200 ||
			(response.status >= 300 && response.status < 400)
		) {
			return;
		}
		if (response.status >= 200 && response.status < 300) {
			type = 'success';
		} else if (response.status >= 400) {
			type = 'error';
		}
		showNotification(text, type);
	}
}

function showNotification(text, type) {
	Notification({
		message: `${text}`,
		type,
		duration: 5 * 1000,
	});
}
