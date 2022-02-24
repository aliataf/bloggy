import { unauthenticatedAxiosInstance } from '@/utils/axios';
import * as ep from './endpoints';

export default class Service {
	static getProfileByUsername(username) {
		return unauthenticatedAxiosInstance.get(ep.PROFILES_BY_USERNAME(username)).then((res) => {
			return res.data;
		});
	}
}
