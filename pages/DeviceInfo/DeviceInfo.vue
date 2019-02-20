<template>
	<view>
		<view class="user_info_list">
			<text>设备编号:</text>
			<input type="text">
		</view>
		<view class="user_info_list">
			<text>设备MAC:</text>
			<input type="text">
		</view>
		<view class="user_info_list">
			<text>IP地址:</text>
			<input type="text">
		</view>
		
		<view class="common_btn_bot_fb" style="margin-top: 200upx;">确认设置</view>
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

			};
		},
		onNavigationBarButtonTap() {

		},
		computed: {},

		methods: {


		},
		onLoad() {


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
	.user_info_list text{
		margin-left: 30upx;
	}
	.user_info_list input{
		margin-left: 30upx;
	}
</style>
