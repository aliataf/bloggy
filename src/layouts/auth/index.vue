<template>
	<div class="flex h-screen w-screen">
		<div class="hidden lg:block w-full lg:w-6/12 h-full relative placeholder-container">
			<auth-placeholder class="absolute-center" />
			<h4
				class="absolute bottom-0 pb-16 text-center app-title w-full cursor-pointer"
				@click="$router.push('/home')"
			>
				Bloggy
			</h4>
		</div>
		<div class="w-full lg:w-6/12 p-6">
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

.placeholder-container {
	background-color: #f2f2f2;
	padding-left: 20px;
	padding-right: 40px;
}
</style>
