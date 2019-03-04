<template>
	<view class="minepage">
		<image class="homebanner" :src="mine_banner_bg"></image>

		<view class="mes_area">
			<view class="mes_list" @tap="gotoUserInfo">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_userinfo"></image>
					<text>用户信息</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
			<view class="mes_list" @tap="gotoDeviceInfo">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_device"></image>
					<text>设备信息</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
			<view class="mes_list" @tap="gotochangePwd">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_password"></image>
					<text>修改密码</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
			<view class="mes_list" @tap="gotoOrganizationalSwitching">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_team"></image>
					<text>组织切换</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
		</view>

		<view class="mes_area">
			<view class="mes_list">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_language"></image>
					<text>选择语言</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
			<view class="mes_list">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_server"></image>
					<text>服务设置</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
		</view>

		<view class="mes_area">
			<view class="mes_list" @tap="gotochooslan">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_language"></image>
					<text>选择语言</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
			<view class="mes_list" @tap="gotoSetService">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_server"></image>
					<text>服务设置</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
		</view>

		<view class="mes_area">
			<view class="mes_list">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_about"></image>
					<text>关于软件</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
			<view class="mes_list" @tap="GetCSVersion">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_update"></image>
					<text>版本更新</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
		</view>

		<view class="mes_area">
			<view class="mes_list">
				<view class="mes_list_left">
					<image class="mes_list_icon" :src="set_exit"></image>
					<text>退出登陆</text>
				</view>
				<image class="mes_list_right_icon" :src="set_next_page"></image>
			</view>
		</view>

		<showModal v-if="ifshowmodal" v-bind:show_modal_header="show_modal_header" v-bind:show_modal_body="show_modal_body"
		 v-bind:show_modal_from="show_modal_from" v-on:showModalsuccess="showModalsuccess()" />
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import showModal from "../components/showModal/showModal.vue"
	export default {
		components: {
			showModal
		},

		data() {
			return {
				mine_banner_bg: "../../static/img/mine_banner_bg.jpg",
				set_userinfo: "../../static/img/set_userinfo.png",
				set_device: "../../static/img/set_device.png",
				set_password: "../../static/img/set_password.png",
				set_team: "../../static/img/set_team.png",
				set_language: "../../static/img/set_language.png",
				set_server: "../../static/img/set_server.png",
				set_about: "../../static/img/set_about.png",
				set_update: "../../static/img/set_update.png",
				set_exit: "../../static/img/set_exit.png",
				set_next_page: "../../static/img/set_next_page.png",
				TenantId: '1',
				ClientCode: 'WPDA',
				deviceType: 8,
				ifshowmodal:false,
				show_modal_header:'服务设置',
				show_modal_body:'重新配置服务将退出登陆',
				show_modal_from:'mine'

			};
		},
		onNavigationBarButtonTap() {

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
			OrgId() {
				return this.$store.state.OrgId
			}
		},

		methods: {
			
			gotochangePwd() {
				uni.navigateTo({
					url: '../changePwd/changePwd'
				});
			},
			gotoUserInfo() {
				uni.navigateTo({
					url: '../UserInfo/UserInfo'
				});
			},
			gotoDeviceInfo() {
				uni.navigateTo({
					url: '../DeviceInfo/DeviceInfo'
				});
			},
			gotochooslan() {
				uni.navigateTo({
					url: '../chooslan/chooslan'
				});
			},
			gotoOrganizationalSwitching(){
				uni.navigateTo({
					url: '../OrganizationalSwitching/OrganizationalSwitching'
				});
			},
			gotoSetService() {
				let that = this
				that.ifshowmodal = true
			},
			showModalsuccess(){
				let that = this
				that.ifshowmodal = false
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
						'Abp.Localization.CultureName': that.current_language
					},
					success: (res) => {
						console.log(res.data);
						if (res.data.result.updateMode == 1) {
							uni.showToast({
								title: "可升级",
							})
						} else if (res.data.result.updateMode == 1) {
							uni.showToast({
								title: "强制性升级",
							})
						}

					}

				});
			},
			ClientChangeOrgainzation() {
				let that = this
				uni.request({
					url: that.connect_url + 'api/services/app/ClientVersion/GetCSVersion', //仅为示例，并非真实接口地址。
					data: {
						OrgId: that.OrgId,
						deviceType: that.deviceType
					},
					method: 'POST',
					header: {
						'Content-Type': 'application/json', //自定义请求头信息
						'Authorization': 'Bearer ' + that.token,
						'Abp.Localization.CultureName': that.current_language
					},
					success: (res) => {
						console.log(res.data);
						console.log(that.OrgId)
						console.log(that.deviceType)

					}

				});
			}
		},
		onLoad() {


		}
	}
</script>

<style>
	.homebanner {
		width: 750upx;
		height: 300upx;
		margin-top: -100upx;
	}

	.minepage {
		background: #F2F2F2;
	}

	.mes_area {
		background: #FFFFFF;
		margin-top: 20upx;
	}

	.mes_list_icon {
		width: 50upx;
		height: 50upx;
		margin: 0 20upx;
	}

	.mes_list_right_icon {
		width: 25upx;
		height: 50upx;
		margin: 0 20upx;
	}

	.mes_list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		border-bottom: 1px solid #DDDDDD;
	}

	.mes_list_left {
		display: flex;

	}
</style>
