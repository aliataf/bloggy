<template>
	<div class="flex flex-center column full-height">
		<inline-svg :src="url" />
		<router-view />
	</div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
	components: { InlineSvg },
	computed: {
		url() {
			try {
				return require('@/assets/img/logo.svg');
			} catch (error) {
				console.warn('Icon not found');
				return undefined;
			}
		},
	},
};
</script>

<style></style>
