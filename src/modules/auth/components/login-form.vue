<template>
	<q-card class="form-container">
		<div class="text-caption2 text-center q-mb-lg text-grey-7">
			{{ $t('sentences.loginPhrase') }}
		</div>
		<q-form @submit="$emit('submit', loginForm)" class="custom-form">
			<q-input
				filled
				v-model="loginForm.email"
				type="email"
				:label="$t('fields.email')"
				:rules="[(val) => !!val || '* Required', (val) => isValidEmail(val) || 'Invalid email']"
				lazy-rules
			/>
			<q-input
				filled
				v-model="loginForm.password"
				:type="!passwordVisible ? 'password' : 'text'"
				:label="$t('fields.password')"
				:rules="[
					(val) => !!val || '* Required',
					(val) => val.length >= 8 || 'Minimum 8 characters',
				]"
				lazy-rules
				class="q-mt-sm"
			>
				<template v-slot:append>
					<q-icon
						:name="!passwordVisible ? 'visibility_off' : 'visibility'"
						class="cursor-pointer"
						@click="passwordVisible = !passwordVisible"
					/>
				</template>
			</q-input>

			<q-btn
				type="submit"
				color="primary"
				:label="$t('actions.login')"
				class="q-mt-xl full-width"
				size="lg"
				no-caps
			/>
		</q-form>

		<q-inner-loading :showing="loading">
			<q-spinner-gears size="50px" color="primary" />
		</q-inner-loading>
	</q-card>
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

.line {
	height: 2px;
	background: #aaa;
	flex: 1 auto;
}

.icon {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: black;
}

.icon-small {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: black;
}

.text-small {
	font-size: 10px;
}
</style>
