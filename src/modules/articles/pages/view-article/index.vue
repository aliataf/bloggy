<template>
	<div class="h-full flex flex-col w-full" v-if="article && article.author">
		<div class="bg-gray-600 text-white py-10 px-12">
			<el-row>
				<h1 class="text-3xl">{{ article.title }}</h1>
			</el-row>
			<el-row type="flex" class="mt-3 gap-x-4">
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
			</el-row>
		</div>
		<el-row class="mt-3 py-5 px-12">
			<h1 class="text-lg">{{ article.body }}</h1>
		</el-row>
		<el-row class="mt-3 px-12">
			<el-tag
				size="small"
				type="info"
				effect="plain"
				v-for="(tag, index) in article.tagList"
				:key="index"
				>{{ tag }}</el-tag
			>
		</el-row>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	data() {
		return {
			isLoggedInVar: false,
		};
	},
	computed: {
		...mapGetters('Articles/ViewArticle', ['article', 'loading']),
		...mapGetters('User', ['user']),
	},
	methods: {
		...mapActions('Articles/ViewArticle', ['getArticleBySlug']),
		...mapActions('Auth', ['isLoggedIn']),
		...mapActions('Profiles', ['followUnfollowProfile']),
		followUnfollowProfileHandler() {
			this.followUnfollowProfile(this.article.author);
		},
	},
	async created() {
		this.getArticleBySlug(this.$route.params.slug);
		this.isLoggedInVar = await this.isLoggedIn();
	},
};
</script>

<style></style>
