import ArticlesService from '@/modules/articles/service';

export default {
	namespaced: true,
	state() {
		return {
			loading: false,
			articles: [],
		};
	},
	getters: {
		loading(state) {
			return state.loading;
		},
		articles(state) {
			return state.articles;
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
		setArticles(state, value) {
			state.articles = value;
		},
	},
	actions: {
		async createArticle({ commit }, article) {
			commit('setLoading', true);
			try {
				let response = await ArticlesService.createArticle(article);
				return response;
			} catch (error) {
				throw error;
			} finally {
				commit('setLoading', false);
			}
		},
	},
};
