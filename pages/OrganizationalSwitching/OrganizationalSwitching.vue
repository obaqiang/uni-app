<template>
	<view>
		<view class="user_info_list">
			<text>组织编号:</text>
			<!-- <input type="text"> -->
			<picker @change="bindPickerChange" :value="index" :range="orgUnits" range-key="displayName" class="organize_picker">
				<view class="uni-input">{{orgUnits[index].displayName}}</view>
			</picker>
		</view>

		<view class="common_btn_bot_fb" style="margin-top: 200upx;">确认切换</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {

		},

		data() {
			return {
				mine_banner_bg: "../../static/img/mine_banner_bg.jpg",
				currentOrgUnit: '',
				orgUnits: '',
				index: 0,
				current_id: '',
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
			current_version() {
				return this.$store.state.current_version
			},
			post_header() {
				return this.$store.state.post_header
			},
			i18n() {
				return this.$t('mylogin')
			},
			deviceType() {
				return this.$store.state.deviceType
			},
		},

		methods: {
			...mapMutations(['MacInfo']),
			...mapMutations(['changeToken']),
			...mapMutations(['changeOrgId']),
			...mapMutations(['changePostHeader']),
			...mapMutations(['MyLoginSucRes']),
			bindPickerChange: function(e) {
				let that = this
				that.index = e.detail.value
				let new_id = that.orgUnits[that.index].id
				if (new_id != that.current_id) {
					console.log(new_id)
					console.log(that.current_id)
					that.current_id = new_id
					that.ClientChangeOrgainzation()
				}

			},
			ClientChangeOrgainzation() {
				let that = this
				uni.request({
					url: that.connect_url + 'api/Account/ClientChangeOrgainzation', //仅为示例，并非真实接口地址。
					data: {
						OrgId: that.current_id,
						deviceType: that.deviceType
					},
					method: 'POST',
					header: that.post_header,
					success: (res) => {
						that.MyLoginSucRes(res)
						
					}

				});
			}

		},
		onLoad() {
			let that = this
			that.currentOrgUnit = uni.getStorageSync('currentOrgUnit')
			that.orgUnits = uni.getStorageSync('orgUnits')
			console.log(that.currentOrgUnit)
			that.current_id = that.currentOrgUnit.id
			for (let i = 0; i < that.orgUnits.length; i++) {
				if (that.currentOrgUnit.id == that.orgUnits[i].id) {
					that.index = i

				}
			}
			console.log('需要的post_header:' + JSON.stringify(that.post_header))
		}
	}
</script>

<style>
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
	}

	.user_info_list text {
		margin-left: 30upx;
	}

	.user_info_list input {
		margin-left: 30upx;
	}

	.organize_picker {
		width: 500upx !important;
	}

	.organize_picker .uni-input {
		background: none;
	}
</style>
