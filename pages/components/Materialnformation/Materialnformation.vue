<template>
	<view>
		<view class="head_text">物料信息</view>
		<view class="body_list">
			<text class="text_a">目的库位码:</text>
			<view class="text_right_area">
				<input class="text_right_input" type="text" placeholder="请输入所要入库的库位码/扫描库位码">
				<image class="text_right_area_icon" :src="text_right_area_icon"></image>
			</view>
		</view>
		<view class="body_list">
			<text class="text_a">目的库位码:</text>
			<view class="text_right_area">
				<input class="text_right_input" type="text" placeholder="请输入所要入库的库位码/扫描库位码">
				<image class="text_right_area_icon" :src="text_right_area_icon"></image>
			</view>
		</view>
		<view class="footer_area">
			<view class="footer_list">
				<text>物料编码:</text>
				<text class="footer_text_b">WL000001</text>
			</view>
			<view class="footer_list">
				<text>物料数量:</text>
				<text class="footer_text_b">WL000001</text>
			</view>
			<view class="footer_list">
				<text>物料名称:</text>
				<text class="footer_text_b">WL000001</text>
			</view>
			<view class="footer_list">
				<text>规格型号:</text>
				<text class="footer_text_b">WL000001</text>
			</view>

		</view>
		<view class="create_btn">生成入库单</view>

	</view>
</template>

<script>
	import {} from 'vuex'
	export default {
		components: {

		},

		data() {
			return {
				text_right_area_icon: "../../static/img/text_right_area_icon.png",
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
	.head_text {
		font-weight: bold;
		border-bottom: 1px solid #DDDDDD;
		padding: 20upx 50upx;
		margin-bottom: 20upx;
	}

	.body_list {
		display: flex;
		line-height: 60upx;
		padding-left: 30upx;
		align-items: center;
		margin-top: 20upx;
	}

	.text_a {
		width: 150upx;
		text-align: right;
	}

	.text_b {
		padding-left: 50upx;
	}

	.bg_line {
		height: 20upx;
		background: #f2f2f2;
		width: 750upx;
		margin-top: 50upx;
	}

	.text_right_area {
		display: flex;
		border: 1px solid #DDDDDD;
		align-items: center;
		padding: 10upx;
		margin-left: 10upx;
		border-radius: 10upx;
	}

	.text_right_area_icon {
		width: 50upx;
		height: 50upx;
	}

	.text_right_input {
		width: 450upx;
		font-size: 20upx;
	}

	.footer_area {
		padding-top: 30upx;
	}

	.footer_list {
		display: flex;
		margin-left: 50upx;
	}

	.footer_text_b {
		margin-left: 30upx;
	}

	.create_btn {
		position: fixed;
		width: 750upx;
		background: #FFB700;
		bottom: 0;
		text-align: center;
		color: #FFFFFF;
		line-height: 100upx;
	}
</style>
