<template>
	<div class="flex justify-center">
		<create-edit-article-form @submit="createArticleHandler" :is-loading="loading" />
	</div>
</template>

<script>
import createEditArticleForm from '@/modules/articles/components/create-edit-article-form.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	components: { createEditArticleForm },
	computed: {
		...mapGetters('Articles/CreateArticle', ['loading']),
	},
	methods: {
		...mapActions('Articles/CreateArticle', ['createArticle']),
		createArticleHandler(article) {
			this.createArticle(article).then(() => {
				this.$router.push('/home');
			});
		},
	},
};
</script>

<style lang="scss" scoped></style>
