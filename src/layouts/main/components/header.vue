<template>
	<el-header class="w-screen flex justify-between items-center">
		<h5>BLOGGY</h5>
		<el-menu mode="horizontal" style="border: none">
			<el-submenu index="2">
				<template slot="title">
					<div class="flex items-center">
						<el-button type="text">
							<div class="w-10 h-10">
								<img :src="user.image" />
							</div>
						</el-button>
						<span class="mx-4">{{ user && user.username }}</span>
						<i class="el-icon-arrow-down" />
					</div>
				</template>
				<el-menu-item @click="logoutHandler">Logout</el-menu-item>
			</el-submenu>
		</el-menu>
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

<style></style>
