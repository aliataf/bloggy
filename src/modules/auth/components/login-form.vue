<template>
	<el-card class="form-container">
		<div class="text-xl text-center mb-6">Login to your account</div>
		<el-form ref="form" :model="loginForm" :rules="rules" class="custom-form">
			<el-form-item label="Email" prop="email">
				<el-input v-model="loginForm.email"></el-input>
			</el-form-item>
			<el-form-item label="Password" prop="password">
				<el-input v-model="loginForm.password" type="password"></el-input>
			</el-form-item>

			<el-form-item class="mt-10">
				<el-button type="primary" @click="onSubmit">Login</el-button>
			</el-form-item>

			<div class="flex justify-end items-center gap-x-1 text-sm">
				<span class="text-gray-500">Don't have an account?</span>
				<!-- Doesn't have account yet -->
				<el-button type="text" @click="$emit('signup')"> Signup </el-button>
			</div>
		</el-form>
	</el-card>
</template>

<script>
import { isValidEmail, isValidPassword } from '@/utils/validators';
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			loginForm: {
				email: '',
				password: '',
			},
			rules: {
				email: [{ validator: isValidEmail, trigger: 'blur' }],
				password: [{ validator: isValidPassword, trigger: 'blur' }],
			},
			passwordVisible: false,
		};
	},
	computed: {
		...mapGetters('Auth/Login', ['loading']),
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate(async (valid) => {
				if (valid) {
					this.$emit('submit', { user: this.loginForm });
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
