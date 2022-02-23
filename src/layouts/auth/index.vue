<template>
	<div class="row h-screen w-screen">
		<div class="hidden md:block w-12/12 md:w-6/12 h-full relative">
			<auth-placeholder class="absolute-center" />
			<h5 class="absolute-bottom q-pb-lg text-white text-center app-title">Bloggy</h5>
		</div>
		<div class="w-12/12 md:w-6/12 q-pa-md">
			<router-view />
		</div>
	</div>
</template>

<script>
import AuthPlaceholder from './components/auth-placeholder';

export default {
	components: {
		AuthPlaceholder,
	},
};
</script>

<style lang="scss">
.app-title {
	font-size: 2rem;
	font-weight: 900;
	text-transform: uppercase;
}
</style>
