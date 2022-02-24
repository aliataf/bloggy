import ArticlesService from '@/modules/articles/service';

import Home from './pages/home/store';
import Feed from './pages/feed/store';
import CreateArticle from './pages/create-article/store';
import ViewArticle from './pages/view-article/store';

function getState() {
	return {
		loading: false,

		articles: [],
		articlesCount: 0,
	};
}

export default {
	namespaced: true,
	modules: { Home, Feed, CreateArticle, ViewArticle },
	state: getState,
	getters: {
		loading(state) {
			return state.loading;
		},
		articles(state) {
			return state.articles;
		},
		articlesCount(state) {
			return state.articlesCount;
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
		setArticles(state, value) {
			state.articles = value;
		},
		setArticlesCount(state, value) {
			state.articlesCount = value;
		},
		resetState(state) {
			Object.assign(state, getState());
		},
	},
	actions: {
		async getArticles({ commit }, qp = {}) {
			commit('setLoading', true);
			try {
				let response = await ArticlesService.getAllArticles(qp);
				commit('setArticles', response.articles);
				commit('setArticlesCount', response.articlesCount);
				return response;
			} catch (error) {
				throw error;
			} finally {
				commit('setLoading', false);
			}
		},
		resetState({ commit }) {
			commit('resetState');
		},
	},
};
