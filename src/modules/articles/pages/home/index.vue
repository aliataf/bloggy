<template>
	<div class="pt-4">
		<el-row class="px-4">
			<h1 class="text-3xl">My articles</h1>
		</el-row>

		<el-row class="mt-6">
			<articles-feed v-if="articles.length > 0" :articles="articles" />
			<div v-else>
				<p class="text-center">No articles found.</p>
			</div>
		</el-row>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ArticlesFeed from '@/modules/articles/components/articles-feed.vue';

export default {
	components: {
		ArticlesFeed,
	},
	computed: {
		...mapGetters('Articles/Home', ['articles']),
		...mapGetters('User', ['user']),
	},
	methods: {
		...mapActions('Articles/Home', ['getArticles']),
	},
	created() {
		this.getArticles();
	},
};
</script>

<style></style>
