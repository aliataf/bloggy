import ArticlesService from '@/modules/articles/service';

export default {
	namespaced: true,
	state() {
		return {
			loading: false,
			articles: [],
			articlesCount: 0,
		};
	},
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
		async getArticlesFeed({ commit }) {
			commit('setLoading', true);
			try {
				let response = await ArticlesService.getArticlesFeed();
				commit('setArticles', response.articles);
				return response;
			} catch (error) {
				throw error;
			} finally {
				commit('setLoading', false);
			}
		},
	},
};
