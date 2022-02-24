import axios from 'axios';
import { addNotificationInterceptor } from './axios-helpers';
import authHelper from '@/utils/auth-helper';
const axiosInstance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL + 'api/',
	headers: {
		Authorization: `Bearer ${authHelper.getAccessToken()}`,
	},
});
const unauthenticatedAxiosInstance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL + 'api/',
});

addNotificationInterceptor(axiosInstance);
addNotificationInterceptor(unauthenticatedAxiosInstance);

export { axiosInstance, unauthenticatedAxiosInstance };
