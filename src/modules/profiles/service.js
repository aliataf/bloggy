import { axiosInstance, unauthenticatedAxiosInstance } from '@/utils/axios';
import * as ep from './endpoints';

export default class Service {
	static getProfileByUsername(username) {
		return unauthenticatedAxiosInstance.get(ep.PROFILES_BY_USERNAME(username)).then((res) => {
			return res.data;
		});
	}

	static followProfile(username) {
		return axiosInstance.post(ep.FOLLOW_UNFOLLOW_PROFILE(username)).then((res) => {
			return res.data;
		});
	}

	static unfollowProfile(username) {
		return axiosInstance.delete(ep.FOLLOW_UNFOLLOW_PROFILE(username)).then((res) => {
			return res.data;
		});
	}
}
