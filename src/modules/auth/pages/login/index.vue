<template>
	<div class="q-pa-md flex column">
		<login-form @submit="handleSubmit" />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import LoginForm from '@/modules/auth/components/login-form.vue';

export default {
	components: {
		LoginForm,
	},
	methods: {
		...mapActions('Auth/Login', ['login']),
		handleSubmit(payload) {
			this.login(payload)
				.then(() => {
					this.$router.push('/');
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>

<style></style>
