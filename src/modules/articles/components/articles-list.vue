<template>
	<el-row class="px-12">
		<el-col
			v-for="(article, index) in articles"
			:key="index"
			:span="24"
			class="border-b border-gray-300 mb-2"
		>
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
