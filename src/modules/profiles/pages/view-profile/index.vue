<template>
	<div class="h-full flex flex-col w-full" v-if="profile">
		<div class="bg-gray-600 text-white py-10 px-12">
			<el-row>
				<el-col :span="24" class="flex justify-center">
					<img :src="profile.image" class="rounded-full w-20 h-20" />
				</el-col>
				<el-col :span="24" class="mt-6">
					<h1 class="text-3xl text-center">{{ profile.username }}</h1>
				</el-col>
			</el-row>
			<!-- <el-row type="flex" class="mt-3 gap-x-4">
				<div class="flex items-center">
					<img :src="article.author.image" class="rounded-full w-8 h-8 mr-2" />
					<div>
						<h3 class="text-md">{{ article.author.username }}</h3>
						<p class="text-xs text-gray-200">{{ article.createdAt.split('T')[0] }}</p>
					</div>
				</div>
				<div v-if="isLoggedInVar">
					<el-button
						type="primary"
						:plain="article.author.following"
						@click="followUnfollowProfileHandler"
						>{{ article.author.following ? 'UnFollow' : 'Follow' }}
						{{ article.author.username }}</el-button
					>
				</div>
			</el-row> -->
		</div>
		<el-row class="mt-3 py-5 px-12">
			<h1 class="text-lg">My Articles</h1>
			<articles-list :articles="articles" />
		</el-row>
	</div>
</template>

<script>
import ArticlesList from '@/modules/articles/components/articles-list.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	components: { ArticlesList },
	computed: {
		...mapGetters('Profiles/ViewProfile', ['profile', 'loading']),
		...mapGetters('Articles', ['articles']),
	},
	methods: {
		...mapActions('Profiles/ViewProfile', ['getProfileByUsername']),
		...mapActions('Articles', ['getArticles']),
	},
	created() {
		this.getProfileByUsername(this.$route.params.username);
		this.getArticles({ author: this.$route.params.username, limit: 5, offset: 0 });
	},
};
</script>

<style></style>
