<template>
	<view>

		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<input class="uni-input" focus v-model="oldpwd" placeholder="输入原密码" />
			</view>
			<view class="uni-form-item uni-column">
				<input class="uni-input" v-model="newpwd" placeholder="输入新密码" />
			</view>
		</view>
	</view>

</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				oldpwd: '',
				newpwd: ''
			};
		},
		computed: {
			connect_url() {
				return this.$store.state.connect_url
			},
			current_language() {
				return this.$store.state.current_language
			},
			token() {
				return this.$store.state.token
			},
		},
		onNavigationBarButtonTap: function(e) {
			// console.log(JSON.stringify(e))

			let that = this
			if (that.oldpwd == '' || that.newpwd == '') {
				uni.showToast({
					title: '输入不能为空',
					duration: 2000
				});
			} else {
				uni.request({
					url: that.connect_url + 'api/services/app/profile/ChangePassword', //仅为示例，并非真实接口地址。
					data: {
						currentPassword: that.oldpwd,
						newPassword: that.newpwd

					},
					method: 'POST',
					header: {
						'Content-Type': 'application/json', //自定义请求头信息
						'Authorization': 'Bearer ' + that.token,
						'Abp.Localization.CultureName': that.current_language
					},
					success: (res) => {
						console.log(res.data);
						if (res.data.success == true) {
							uni.showToast({
								title: '修改密码成功',
								duration: 2000
							});
							uni.switchTab({
								url: '../homepage/homepage'
							})
						} else {
							uni.showToast({
								title: res.data.error.message,
								duration: 2000
							});
						}
						// 					if(res.data.result!=null){
						// 						uni.showToast({
						// 							title: '修改密码成功',
						// 							duration: 2000
						// 						});
						// 					}else{
						// 						uni.showToast({
						// 							title: res.data.error.message,
						// 							duration: 2000
						// 						});
						// 					}

					}

				});
			}

		},
	}
</script>

<style>
	.pwd_list {
		line-height: 50upx !important;
	}
</style>
