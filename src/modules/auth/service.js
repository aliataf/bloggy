import { unauthenticatedAxiosInstance } from '@/utils/axios';
import * as ep from './endpoints';

export default class Service {
	static login(qp = {}) {
		return unauthenticatedAxiosInstance.post(ep.LOGIN, qp).then((res) => {
			return res.data;
		});
	}

	static signup(qp = {}) {
		return unauthenticatedAxiosInstance.post(ep.SIGNUP, qp).then((res) => {
			return res.data;
		});
	}
}
