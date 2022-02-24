<template>
	<el-container direction="vertical">
		<main-layout-header />

		<div style="height: calc(100vh - 60px)">
			<div class="pa-6 pt-0 bg-blue-50" style="min-height: calc(100vh - 50px)">
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
