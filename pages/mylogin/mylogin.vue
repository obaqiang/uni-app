<template>
	<view>
		<choServerModal v-if="showchoservermodal" v-bind:showchoservermodal="showchoservermodal" v-on:success="success()" />
		<image class="login_head" :src="login_head"></image>
		<view class="head_login_text_area">
			<view class="login_text">
				{{ i18n.login_text }}
			</view>
			<view>
				<view class="login_in">
					<image class="login_username" :src="login_username"></image>
					<input class="login_input" type="text" v-model="account" placeholder="请输入用户名">
					<image class="login_clear" :src="login_clear"></image>
				</view>
				<view class="login_in">
					<image class="login_username" :src="login_password"></image>
					<input class="login_input" type="text" v-model="password" placeholder="请输入密码">
					<image class="login_clear" :src="login_password_show"></image>
				</view>
				<button class="btn_login" @tap="bindLogin">{{ i18n.login_in_now }}</button>
				<button class="btn_server" @tap="choServer">{{ i18n.configure_server }}</button>

			</view>
		</view>
		<copyRightIntro />
	</view>
</template>

<script>
	import copyRightIntro from "../components/copyRightIntro/copyRightIntro.vue"
	import choServerModal from "../components/choServerModal/choServerModal.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			copyRightIntro,
			choServerModal
		},

		data() {
			return {
				login_head: "../../static/img/login_head.png",
				login_username: "../../static/img/login_username.png",
				login_clear: "../../static/img/login_clear.png",
				login_password: "../../static/img/login_password.png",
				login_password_show: "../../static/img/login_password_show.png",
				account: 'Default',
				usernameOrEmailAddress: 'admin',
				password: '123qwe',
				deviceType: '8',
				mac: '02-F4-8D-CB-0A-41',
				showchoservermodal: false
			};
		},
		// computed: mapState(['connect_url']),
		computed: {
			connect_url() {
				return this.$store.state.connect_url
			},
			current_language() {
				return this.$store.state.current_language
			},
			i18n() {
				return this.$t('mylogin')
			}
		},

		methods: {
			...mapMutations(['MacInfo']),
			...mapMutations(['changeToken']),
			...mapMutations(['changeOrgId']),
			bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				this.ClientLogin()

			},
			choServer() {
				this.showchoservermodal = !this.showchoservermodal
			},
			success() {
				this.showchoservermodal = !this.showchoservermodal
			},
			ClientLogin() {

				let that = this
				uni.request({
					url: that.connect_url + 'api/Account/ClientLogin', //仅为示例，并非真实接口地址。
					data: {
						tenancyName: that.account,
						usernameOrEmailAddress: that.usernameOrEmailAddress,
						password: that.password,
						deviceType: that.deviceType,
						mac: that.mac

					},
					method: 'POST',
					header: {
						'Content-Type': 'application/json', //自定义请求头信息
						'Abp.Localization.CultureName': that.current_language
					},
					success: (res) => {
						console.log(res.data);

						// 						if (res.data.result != null) {
						// 							uni.switchTab({
						// 								url: '../homepage/homepage'
						// 							})
						// 						} else {
						// 							uni.showToast({
						// 								title: res.data.error.details,
						// 								duration: 2000
						// 							});
						// 						}
						if (res.data.success == true) {
							if (res.data.result.currentOrgUnit == null) {
								uni.showToast({
									title: '当前用户不属于任何组织，无法登录',
									duration: 2000
								});
							} else if (res.data.result.grantPermission == null) {
								uni.showToast({
									title: '用户未授权',
									duration: 2000
								});
							} else {
								that.changeToken(res.data.result.token)
								that.changeOrgId(res.data.result.currentOrgUnit.id)
								uni.switchTab({
									url: '../homepage/homepage'
								})
							}

						} else {
							uni.showToast({
								title: res.data.error.message,
								duration: 2000
							});
						}

					}

				});
			}
		},
		onLoad() {
			// this.MacInfo();

		}
	}
</script>

<style>
	.login_head {
		width: 750upx;
		display: block;
	}

	page {
		background: #f2f2f2;
	}

	.head_login_text_area {
		width: 700upx;
		background: #FFFFFF;
		margin: auto;
		position: relative;
		top: -104upx;
		border-radius: 10upx;
		padding-bottom: 50upx;
	}

	.login_text {
		font-size: 36upx;
		line-height: 104upx;
		text-align: center;
	}

	.login_username {
		width: 50upx;
		height: 50upx;
	}

	.login_in {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 104upx;
		border-bottom: 1upx solid #DDDDDD;
		width: 650upx;
		margin: auto;
	}

	.login_clear {
		width: 50upx;
		height: 50upx;

	}

	.login_input {
		width: 400upx;
		margin: 50upx;
	}

	.btn_login {
		background: #ffb700;
		color: #FFFFFF;
		width: 600upx;
		margin-top: 100upx;
	}

	.btn_server {
		color: #ffb700;
		background: #FFFFFF;
		border: 1px solid #FFB700;
		width: 600upx;
		margin-top: 20upx;
	}
</style>
