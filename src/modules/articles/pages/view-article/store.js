import ArticlesService from '@/modules/articles/service';

export default {
	namespaced: true,
	state() {
		return {
			loading: false,
			article: [],
		};
	},
	getters: {
		loading(state) {
			return state.loading;
		},
		article(state) {
			return state.article;
		},
	},
	mutations: {
		setLoading(state, value) {
			state.loading = value;
		},
		setArticle(state, value) {
			state.article = value;
		},
	},
	actions: {
		async getArticleBySlug({ commit }, slug) {
			commit('setLoading', true);
			try {
				let { article } = await ArticlesService.getArticleBySlug(slug);
				commit('setArticle', article);
				return article;
			} catch (error) {
				throw error;
			} finally {
				commit('setLoading', false);
			}
		},
	},
};
