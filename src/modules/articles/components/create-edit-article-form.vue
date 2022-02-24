<template>
	<el-card v-loading="isLoading" class="form-container mt-6">
		<div class="text-xl text-center mb-6">Create a new article</div>
		<el-form ref="form" :model="form" :rules="rules" class="custom-form" label-width="250px">
			<el-form-item label="Article Title" prop="title">
				<el-input v-model="form.title"></el-input>
			</el-form-item>
			<el-form-item label="What's this article about?" prop="description">
				<el-input v-model="form.description"></el-input>
			</el-form-item>
			<el-form-item label="Write your article (in markdown)" prop="body">
				<el-input v-model="form.body" type="textarea" :rows="5"></el-input>
			</el-form-item>
			<el-form-item label="Choose tags for your article">
				<el-select
					v-model="form.tagList"
					multiple
					filterable
					allow-create
					default-first-option
					placeholder="Please select tags"
				>
					<el-option
						v-for="(item, index) in form.tagList"
						:key="index"
						:label="item"
						:value="item"
					>
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item class="mt-10 flex justify-center" label-width="0">
				<el-button type="primary" class="w-[250px]" @click="onSubmit">Create</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
import { isNotEmpty } from '@/utils/validators';
import { mapGetters } from 'vuex';

export default {
	props: {
		isLoading: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			form: {
				title: '',
				description: '',
				body: '',
				tagList: [],
			},
			rules: {
				title: [{ validator: isNotEmpty, trigger: 'blur' }],
				description: [{ validator: isNotEmpty, trigger: 'blur' }],
				body: [{ validator: isNotEmpty, trigger: 'blur' }],
			},
		};
	},
	computed: {
		...mapGetters('Auth/Login', ['loading']),
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate(async (valid) => {
				if (valid) {
					this.$emit('submit', { article: this.form });
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.form-container {
	width: 100%;
	max-width: 700px;
	border-radius: 20px;
	box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
}
</style>
