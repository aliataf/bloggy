import { axiosInstance } from '@/utils/axios';
import * as ep from './endpoints';

export default class Service {
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
