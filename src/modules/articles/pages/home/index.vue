<template>
	<div class="h-full flex flex-col justify-between w-full">
		<el-row type="flex" justify="end">
			<el-button type="primary" @click="$router.push('/login')"> Login </el-button>
			<el-button type="primary" @click="$router.push('/signup')"> Signup </el-button>
		</el-row>
		<el-row v-loading="loading" class="flex-1 flex flex-col justify-center text-center">
			<el-row class="px-4">
				<h1 class="text-3xl">General articles</h1>
			</el-row>

			<el-row class="mt-6">
				<articles-list v-if="articles.length > 0" :articles="articles" />
				<div v-else>
					<p>No articles found.</p>
				</div>
			</el-row>
		</el-row>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ArticlesList from '@/modules/articles/components/articles-list.vue';

export default {
	components: {
		ArticlesList,
	},
	computed: {
		...mapGetters('Articles/Home', ['articles', 'loading']),
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
