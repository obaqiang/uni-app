<template>
	<!-- <view>

		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<input class="uni-input" focus v-model="oldpwd" placeholder="输入原密码" />
			</view>
			<view class="uni-form-item uni-column">
				<input class="uni-input" v-model="newpwd" placeholder="输入新密码" />
			</view>
		</view>
	</view> -->
	<view>
		<view class="user_info_list">
			<text>原密码:</text>
			<input :type="pwd_type" class="changepwdinput" v-model="oldpwd" placeholder="输入原密码">
		</view>
		<view class="user_info_list">
			<text>新密码:</text>
			<input :type="pwd_type" class="changepwdinput" v-model="newpwd" placeholder="输入新密码">
		</view>
		<view class="user_info_list">
			<text>再一次密码:</text>
			<input :type="pwd_type" v-model="newpwdagain" class="changepwdinput" placeholder="输入再次新密码">
		</view>
		<view class="changetype_area" @tap="changeInputType">
			<image :src="changepwd_no_hook" class="changepwd_no_hook" v-if="pwd_type=='password'"></image>
			<image :src="changepwd_hook" class="changepwd_no_hook" v-if="pwd_type==''"></image>
			<text>显示密码</text>
		</view>
		<view class="common_btn_bot_fb" style="margin-top: 20upx;" @tap="sureChangePwd">确认设置</view>
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
				newpwd: '',
				newpwdagain: '',
				changepwd_hook: "../../static/img/changepwd_hook.png",
				changepwd_no_hook: "../../static/img/changepwd_no_hook.png",
				pwd_type: 'password'
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
			post_header() {
				return this.$store.state.post_header
			},
		},
		methods: {
			changeInputType() {
				let that = this
				if (that.pwd_type == 'password') {
					that.pwd_type = ''
				} else {
					that.pwd_type = 'password'
				}
			},
			sureChangePwd() {
				let that = this
				if (that.oldpwd == '' || that.newpwd == '' || that.newpwdagain == '') {
					uni.showToast({
						title: '输入不能为空',
						duration: 2000
					});
				} else if (that.newpwd != that.newpwdagain) {
					uni.showToast({
						title: '两次新密码输入不一致',
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
						header: that.post_header,
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
						}

					});
				}
			}

		},
		onNavigationBarButtonTap: function(e) {

		},
	}
</script>

<style>
	/* .pwd_list {
		line-height: 50upx !important;
	} */
	page {
		background: #E7E7E7;
	}

	.user_info_list {
		border: 1px solid #666666;
		width: 700upx;
		margin: 20upx 25upx;
		display: flex;
		align-items: center;
		height: 72upx;
		align-items: center;
	}

	.user_info_list text {
		margin-left: 30upx;
	}

	.user_info_list input {
		margin-left: 30upx;
	}

	.changepwdinput {
		border: none;
		outline: none;
		background: #E7E7E7;
		margin-left: 20upx;
	}

	.changepwd_no_hook {
		width: 50upx;
		height: 50upx;
		margin-right: 20upx;
	}

	.changetype_area {
		display: flex;
		margin-top: 150upx;
		align-items: center;
		padding-left: 30upx;
	}
</style>
