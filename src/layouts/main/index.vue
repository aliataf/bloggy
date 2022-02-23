<template>
	<el-container>
		<main-layout-header />

		<div style="top: 50px; height: calc(100vh - 50px)">
			<div class="pa-6 pt-0 bg-gray-300" style="min-height: calc(100vh - 50px)">
				<router-view />
			</div>
		</div>
	</el-container>
</template>

<script>
import MainLayoutHeader from './components/header.vue';

export default {
	components: { MainLayoutHeader },
};
</script>
