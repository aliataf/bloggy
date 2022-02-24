import { axiosInstance } from '@/utils/axios';
import * as ep from './endpoints';

export default class Service {
	static getArticlesFeed(qp = {}) {
		return axiosInstance.get(ep.ARTICLES_FEED, qp).then((res) => {
			return res.data;
		});
	}

	static getAllArticles(qp = {}) {
		return axiosInstance.get(ep.ARTICLES, qp).then((res) => {
			return res.data;
		});
	}

	static createArticle(qp = {}) {
		return axiosInstance.post(ep.ARTICLES, qp).then((res) => {
			return res.data;
		});
	}
}
