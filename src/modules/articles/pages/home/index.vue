<template>
	<el-card body-style="background: lightblue; height: 100%">
		<el-row>
			<h1 class="text-3xl">Bloggy Feed</h1>
		</el-row>

		<el-row class="mt-6">
			<articles-feed v-if="articles.length > 0" :articles="articles" />
			<div v-else>
				<p class="text-center">No articles found.</p>
			</div>
		</el-row>
	</el-card>
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
	},
	methods: {
		...mapActions('Articles/Home', ['getArticlesFeed']),
	},
	created() {
		this.getArticlesFeed();
	},
};
</script>

<style></style>
