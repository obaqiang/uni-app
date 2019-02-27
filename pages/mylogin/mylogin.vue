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
					<image class="login_clear" :src="login_clear" @tap="DeleteLoginName"></image>
				</view>
				<view class="login_in">
					<image class="login_username" :src="login_password"></image>
					<input class="login_input" :type="password_type" v-model="password" placeholder="请输入密码">
					<image class="login_clear" :src="login_password_show" @tap="ChangeInputType"></image>
				</view>
				<view class="my_login_hook_area" @tap="RemberLogin">
					<image class="ali_icon" :src="ali_no_hook" v-if="rember_login==false"></image>
					<image class="ali_icon" :src="ali_hook" v-if="rember_login"></image>
					<text>记住密码</text>
				</view>

				<button class="btn_login" @tap="bindLogin">{{ i18n.login_in_now }}</button>
				<button class="btn_server" @tap="choServer">{{ i18n.configure_server }}</button>
				{{err}}
			</view>
		</view>
		<copyRightIntro />
		<showModal v-if="ifshowmodal" v-bind:show_modal_header="show_modal_header" v-bind:show_modal_body="show_modal_body"
		 v-bind:show_modal_from="show_modal_from" v-bind:updata_url="updata_url" v-on:showModalsuccess="showModalsuccess()" />
	</view>
</template>

<script>
	import copyRightIntro from "../components/copyRightIntro/copyRightIntro.vue"
	import choServerModal from "../components/choServerModal/choServerModal.vue"
	import showModal from "../components/showModal/showModal.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			copyRightIntro,
			choServerModal,
			showModal
		},

		data() {
			return {
				ali_no_hook: "../../static/img/ali_no_hook.png",
				ali_hook: "../../static/img/ali_hook.png",
				login_head: "../../static/img/login_head.png",
				login_username: "../../static/img/login_username.png",
				login_clear: "../../static/img/login_clear.png",
				login_password: "../../static/img/login_password.png",
				login_password_show: "../../static/img/login_password_show.png",
				// account: 'Default',
				account: '',
				usernameOrEmailAddress: 'admin',
				// password: '123qwe',
				password: '',
				deviceType: '8',
				mac: '02-F4-8D-CB-0A-41',
				showchoservermodal: false,
				TenantId: '1',
				ClientCode: 'WPDA',
				ifshowmodal: false,
				show_modal_header: '版本更新',
				show_modal_body: '',
				show_modal_from: 'mylogin',
				updata_url: '',
				childPermissions: '',
				err: '',
				rember_login: false,
				password_type: 'password'
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
			current_version() {
				return this.$store.state.current_version
			},
			post_header() {
				return this.$store.state.post_header
			},
			i18n() {
				return this.$t('mylogin')
			},
		},

		methods: {
			...mapMutations(['MacInfo']),
			...mapMutations(['changeToken']),
			...mapMutations(['changeOrgId']),
			...mapMutations(['changePostHeader']),
			...mapMutations(['MyLoginSucRes']),
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
			showModalsuccess() {
				this.ifshowmodal = !this.ifshowmodal
			},
			RemberLogin() {
				let that = this
				that.rember_login = !that.rember_login
				if (that.rember_login == true) {
					uni.setStorageSync('account', that.account);
					uni.setStorageSync('password', that.password);
				} else {
					uni.setStorageSync('account', '');
					uni.setStorageSync('password', '');
				}
			},
			DeleteLoginName() {
				let that = this
				that.account = ''
				that.password = ''
			},
			ChangeInputType() {
				let that = this
				console.log(132)
				// that.password_type = 'password' ? 'text':'password'
				if (that.password_type == 'password') {
					that.password_type = 'text'
				} else {
					that.password_type = 'password'
				}
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
						'Abp.Localization.CultureName': that.$i18n.locale
					},
					success: (res) => {
						that.MyLoginSucRes(res,that)
// 						if (res.data.success == true) {
// 							if (res.data.result.currentOrgUnit == null) {
// 								uni.showToast({
// 									title: '当前用户不属于任何组织，无法登录',
// 									duration: 2000
// 								});
// 							} else if (res.data.result.grantPermission == null) {
// 								uni.showToast({
// 									title: '用户未授权',
// 									duration: 2000
// 								});
// 							} else {
// 
// 								that.changeToken(res.data.result.token)
// 								let post_header = {
// 									'Content-Type': 'application/json', //自定义请求头信息
// 									'Authorization': 'Bearer ' + res.data.result.token,
// 									'Abp.Localization.CultureName': that.current_language
// 								}
// 								that.changePostHeader(post_header)
// 								that.changeOrgId(res.data.result.currentOrgUnit.id)
// 								that.childPermissions = res.data.result.grantPermission.childPermissions[0].childPermissions
// 								uni.setStorageSync('childPermissions', that.childPermissions);
// 								uni.setStorageSync('currentOrgUnit', res.data.result.currentOrgUnit);
// 								uni.setStorageSync('orgUnits', res.data.result.orgUnits);
// 								uni.switchTab({
// 									url: '../homepage/homepage'
// 								})
// 							}
// 
// 						} else {
// 							uni.showToast({
// 								title: res.data.error.message,
// 								duration: 2000
// 							});
// 						}
					}

				});
			},
			GetCSVersion() {
				let that = this
				uni.request({
					url: that.connect_url + 'api/services/app/ClientVersion/GetCSVersion', //仅为示例，并非真实接口地址。
					data: {
						TenantId: that.TenantId,
						ClientCode: that.ClientCode

					},
					method: 'POST',
					header: {
						'Content-Type': 'application/json', //自定义请求头信息
						'Authorization': 'Bearer ' + that.token,
						'Abp.Localization.CultureName': that.$i18n.locale
					},
					success: (res) => {
						console.log(res.data)
						if(res.data.result!=null){
							that.updata_url = that.connect_url + res.data.result.path.replace(/\\/g, '/')
							if (that.current_version < res.data.result.version) {
							
								if (res.data.result.updateMode == 1) {
							
									that.ifshowmodal = true
									that.show_modal_body = '可升级'
							
								} else if (res.data.result.updateMode == 1) {
									// that.show_modal_body = '强制性升级'
									plus.runtime.openURL(that.updata_url);
							
								}
							}
						}else{
							uni.showModal({
								title:'缺失apk文件'
							})
						}
						


					},
					fail: (res) => {
						that.err = JSON.stringify(res)
						uni.showToast({
							title: '我擦' + JSON.stringify(),
							duration: 2000
						});
					}

				});
			},
		},
		onLoad() {
			// this.MacInfo();
			let that = this
			this.GetCSVersion()
			that.account = uni.getStorageSync('account');
			that.password = uni.getStorageSync('password');
			if (that.account != '') {
				that.rember_login = true
			}
			console.log(this.$i18n.locale )
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
		border: none;
		outline: none;
	}

	.btn_login {
		background: #ffb700;
		color: #FFFFFF;
		width: 600upx;
		/* margin-top: 100upx; */
	}

	.btn_server {
		color: #ffb700;
		background: #FFFFFF;
		border: 1px solid #FFB700;
		width: 600upx;
		margin-top: 20upx;
	}

	.ali_icon {
		width: 50upx;
		height: 50upx;
		margin-left: 50upx;
	}

	.my_login_hook_area {
		display: flex;
		align-items: center;
		height: 100upx;
	}

	.my_login_hook_area text {
		color: #FFB700;
		margin-left: 30upx;
	}
</style>
