<template>
	<inline-svg :src="url" width="100%" height="100%" />
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
	components: { InlineSvg },
	computed: {
		url() {
			try {
				return require('@/assets/img/auth-background.svg');
			} catch (error) {
				console.warn('Icon not found');
				return undefined;
			}
		},
	},
};
</script>

<style></style>
