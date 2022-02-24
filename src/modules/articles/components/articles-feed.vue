<template>
	<el-row>
		<el-col v-for="(article, index) in articles" :key="index" :span="24">
			<article-card :article="article" />
		</el-col>
	</el-row>
</template>

<script>
import ArticleCard from './article-card.vue';

export default {
	components: {
		ArticleCard,
	},
	props: {
		articles: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style></style>
