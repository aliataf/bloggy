<template>
	<div class="p-6">
		<signup-form @submit="handleSubmit" @login="$router.push('/login')" />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import SignupForm from '@/modules/auth/components/signup-form.vue';

export default {
	components: {
		SignupForm,
	},
	methods: {
		...mapActions('Auth/Signup', ['signup']),
		handleSubmit(payload) {
			this.signup(payload)
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
