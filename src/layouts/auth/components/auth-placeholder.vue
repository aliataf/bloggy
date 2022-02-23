<template>
	<inline-svg :src="url" />
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
