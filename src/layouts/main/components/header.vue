<template>
	<el-header class="w-screen flex justify-between items-center">
		<h5 @click="$router.push('/')" class="cursor-pointer">BLOGGY</h5>
		<div v-if="isLoggedInVar" class="flex items-center gap-x-6">
			<el-button type="text" icon="el-icon-edit" @click="$router.push('/articles/create')">
				Create Article
			</el-button>
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
					<el-dropdown-item @click.native="logoutHandler">Logout</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div v-else>
			<el-row type="flex" justify="end">
				<el-button type="primary" @click="$router.push('/login')"> Login </el-button>
				<el-button type="primary" @click="$router.push('/signup')"> Signup </el-button>
			</el-row>
		</div>
	</el-header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import authHelper from '@/utils/auth-helper';

export default {
	data() {
		return {
			isLoggedInVar: false,
		};
	},
	computed: {
		...mapGetters('User', ['user']),
	},
	methods: {
		...mapActions('Auth', ['isLoggedIn']),
		logoutHandler() {
			authHelper.reset();
			this.$router.go(0);
		},
	},
	async created() {
		this.isLoggedInVar = await this.isLoggedIn();
	},
};
</script>

<style lang="scss" scoped>
::v-deep .el-submenu .el-submenu__icon-arrow {
	display: none;
}
</style>
