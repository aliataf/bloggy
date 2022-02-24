<template>
	<el-header class="w-screen flex justify-between items-center">
		<h5>BLOGGY</h5>
		<div>
			<el-dropdown>
				<div class="flex items-center">
					<el-button type="text">
						<div class="w-8 h-8">
							<img :src="user.image" />
						</div>
					</el-button>
					<span class="mx-4">{{ user && user.username }}</span>
				</div>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item @click="logoutHandler">Logout</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</el-header>
</template>

<script>
import { mapGetters } from 'vuex';
import authHelper from '@/utils/auth-helper';

export default {
	computed: {
		...mapGetters('User', ['user']),
	},
	methods: {
		logoutHandler() {
			authHelper.reset();
			this.$router.go(0);
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep .el-submenu .el-submenu__icon-arrow {
	display: none;
}
</style>
