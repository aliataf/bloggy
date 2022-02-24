<template>
	<el-card shadow="hover">
		<el-row type="flex" justify="space-between">
			<div class="flex items-center">
				<img :src="article.author.image" class="rounded-full w-12 h-12 mr-2" />
				<div>
					<h3 class="text-lg font-bold">{{ article.author.name }}</h3>
					<p class="text-xs text-gray-600">{{ article.author.createdAt.split('T')[0] }}</p>
				</div>
			</div>
		</el-row>
	</el-card>
</template>

<script>
export default {
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style></style>
