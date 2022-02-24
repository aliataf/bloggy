<template>
	<el-row v-loading="loading" class="pt-4">
		<el-row class="px-4">
			<h1 class="text-3xl">My articles</h1>
		</el-row>

		<el-row class="mt-6">
			<articles-feed v-if="articles.length > 0" :articles="articles" />
			<div v-else>
				<p class="text-center">No articles found.</p>
			</div>
		</el-row>

		<el-row class="mt-6 pb-[200px] flex justify-center">
			<el-pagination
				@size-change="handleSizeChange"
				:current-page.sync="pagination.offset"
				:page-sizes="[5, 10, 15, 20]"
				:page-size="pagination.limit"
				layout="total, sizes, prev, pager, next"
				:total="articlesCount"
			>
			</el-pagination>
		</el-row>
	</el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ArticlesFeed from '@/modules/articles/components/articles-feed.vue';

export default {
	components: {
		ArticlesFeed,
	},
	data() {
		return {
			pagination: {
				offset: 1,
				limit: 5,
			},
		};
	},
	computed: {
		...mapGetters('Articles/Home', ['articles', 'articlesCount', 'loading']),
		...mapGetters('User', ['user']),
	},
	methods: {
		...mapActions('Articles/Home', ['getArticlesFeed']),
		handleSizeChange(val) {
			this.pagination.limit = val;
			this.fetchData();
		},
		fetchData() {
			this.getArticlesFeed(this.pagination);
		},
	},
	created() {
		this.fetchData();
	},
	watch: {
		pagination: {
			handler() {
				this.fetchData();
			},
			deep: true,
			immediate: true,
		},
	},
};
</script>

<style></style>
