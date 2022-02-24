import { axiosInstance, unauthenticatedAxiosInstance } from '@/utils/axios';
import * as ep from './endpoints';

export default class Service {
	static getArticlesFeed(qp = {}) {
		return axiosInstance.get(ep.ARTICLES_FEED, { params: qp }).then((res) => {
			return res.data;
		});
	}

	static getAllArticles(qp = {}) {
		return unauthenticatedAxiosInstance.get(ep.ARTICLES, { params: qp }).then((res) => {
			return res.data;
		});
	}

	static createArticle(qp = {}) {
		return axiosInstance.post(ep.ARTICLES, qp).then((res) => {
			return res.data;
		});
	}

	static getArticleBySlug(id, qp = {}) {
		return unauthenticatedAxiosInstance.get(ep.ARTICLES_BY_SLUG(id), qp).then((res) => {
			return res.data;
		});
	}
}
