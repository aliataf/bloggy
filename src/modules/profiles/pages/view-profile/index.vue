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
				<el-col :span="24" class="flex justify-center">
					<div v-if="isLoggedInVar">
						<el-button
							type="primary"
							:plain="profile.following"
							@click="followUnfollowProfileHandler"
							>{{ profile.following ? 'UnFollow' : 'Follow' }}
							{{ profile.username }}</el-button
						>
					</div>
				</el-col>
			</el-row>
		</div>
		<el-row class="mt-3 py-5 px-12">
			<h1 class="text-lg mb-6">Profile Articles</h1>
			<articles-list :articles="articles" />
		</el-row>
	</div>
</template>

<script>
import ArticlesList from '@/modules/articles/components/articles-list.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	components: { ArticlesList },
	data() {
		return {
			isLoggedInVar: false,
		};
	},
	computed: {
		...mapGetters('Profiles/ViewProfile', ['profile', 'loading']),
		...mapGetters('Articles', ['articles']),
	},
	methods: {
		...mapActions('Profiles/ViewProfile', ['getProfileByUsername', 'resetState']),
		...mapActions('Articles', ['getArticles']),
		...mapActions('Auth', ['isLoggedIn']),
		...mapActions('Profiles', ['followUnfollowProfile']),
		followUnfollowProfileHandler() {
			this.followUnfollowProfile(this.profile);
		},
	},
	async created() {
		this.getProfileByUsername(this.$route.params.username);
		this.getArticles({ author: this.$route.params.username, limit: 5, offset: 0 });
		this.isLoggedInVar = await this.isLoggedIn();
	},
	watch: {
		'$route.params.username'() {
			this.getProfileByUsername(this.$route.params.username);
			this.getArticles({ author: this.$route.params.username, limit: 5, offset: 0 });
		},
	},
	destroyed() {
		this.resetState();
	},
};
</script>

<style></style>
