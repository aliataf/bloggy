<template>
	<el-card shadow="hover" style="background: transparent; border: none">
		<el-row type="flex" justify="space-between">
			<div class="flex items-center">
				<img
					:src="article.author.image"
					class="rounded-full w-12 h-12 mr-2 cursor-pointer"
					@click="$router.push(`/profiles/${article.author.username}`)"
				/>
				<div>
					<h3 class="text-lg font-bold">{{ article.author.username }}</h3>
					<p class="text-xs text-gray-600">{{ article.createdAt.split('T')[0] }}</p>
				</div>
			</div>
		</el-row>
		<el-row type="flex" class="mt-3">
			<div class="px-2">
				<h5 class="text-xl font-bold">{{ article.title }}</h5>
				<div class="text-sm text-gray-400 font-medium">
					{{ article.description }}
				</div>
			</div>
		</el-row>

		<el-row type="flex" class="mt-3">
			<div class="px-2">
				<el-button type="text" @click="$router.push(`/articles/${article.slug}`)">
					Read more</el-button
				>
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
