import { axiosInstance } from '@/utils/axios';
import * as ep from './endpoints';

export default class Service {
	static getAllArticles(qp = {}) {
		return axiosInstance.post(ep.ARTICLES, qp).then((res) => {
			return res.data;
		});
	}
}
