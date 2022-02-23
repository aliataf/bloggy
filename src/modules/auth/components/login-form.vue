<template>
	<el-card class="form-container">
		<div class="text-xl text-center mb-6">Login to your account</div>
		<el-form ref="form" :model="loginForm" class="custom-form">
			<el-form-item label="Email">
				<el-input v-model="loginForm.email"></el-input>
			</el-form-item>
			<el-form-item label="Password">
				<el-input v-model="loginForm.password"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit">Login</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
import { isValidEmail } from '@/utils/validators';
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			loginForm: {
				email: '',
				password: '',
			},
			passwordVisible: false,
		};
	},
	computed: {
		...mapGetters('Auth/Login', ['loading']),
	},
	methods: {
		isValidEmail,
		onSubmit() {
			this.$refs.form.validate(async (valid) => {
				if (valid) {
					this.$emit('submit', this.loginForm);
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.form-container {
	width: 100%;
	max-width: 450px;
	border-radius: 20px;
	box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
}

.custom-form {
	width: 400px;
	margin: auto;
}
</style>
