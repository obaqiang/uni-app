<template>
	<view>
		<view class="user_info_list">
			<text>编号:</text>
			<input type="text">
		</view>
		<view class="user_info_list">
			<text>姓名:</text>
			<input type="text">
		</view>
		<view class="user_info_list">
			<text>性别:</text>
			<input type="text">
		</view>
		<view class="user_info_list">
			<text>手机:</text>
			<input type="text">
		</view>
		<view class="user_info_list">
			<text>部门:</text>
			<input type="text">
		</view>
		<view class="user_info_list">
			<text>所属组织:</text>
			<input type="text">
		</view>
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
