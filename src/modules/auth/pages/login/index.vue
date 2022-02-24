<template>
	<div class="p-6">
		<login-form :is-loading="loading" @submit="handleSubmit" @signup="$router.push('/signup')" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LoginForm from '@/modules/auth/components/login-form.vue';

export default {
	components: {
		LoginForm,
	},
	computed: {
		...mapGetters('Auth/Login', ['loading']),
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
