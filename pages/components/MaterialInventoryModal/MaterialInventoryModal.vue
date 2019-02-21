<template>
	<view>
		<view class='show_modal_mask'></view>
		<view class="show_modal_area">
			<view class="show_modal_header">
				{{show_modal_header}}
			</view>
			<view class="show_modal_body">
				{{show_modal_body}}
				<view class="show_modal_body_list">
					<text>物料编码:</text>
					<text>342432432342</text>
				</view>
				<view class="show_modal_body_list">
					<text>物料编码:</text>
					<text>342432432432432432342</text>
				</view>
				<view class="show_modal_body_list">
					<text>采购数:</text>
					<text>342432432432432432342</text>
				</view>
				<view class="show_modal_body_list">
					<text>采购数:</text>
					<input class="show_modal_body_list_input" type="text" placeholder="请输入清点数">
				</view>
				<view class="show_modal_body_list">
					<text>采购数:</text>
					<input class="show_modal_body_list_input" type="text" placeholder="请输入清点数">
				</view>
				
			</view>
			<input type="text">
			<view class="show_modal_footer">
				<button class="show_modal_footer_btn_left" @tap="showModalBtnLeft">取消</button>
				<button class="show_modal_footer_btn_right" @tap="closeModal">保存</button>
			</view>
		</view>
		<view class="common_bot_btn">确认提交</view>
	</view>
</template>

<script>
	export default {
		props: ['ifshowmodal', 'show_modal_header', 'show_modal_body', 'show_modal_from', 'updata_url'],
		components: {

		},

		data() {
			return {

			};
		},


		methods: {
			showModalBtnLeft() {


			},
			closeModal() {


			}
		},
		onLoad() {

		}
	}
</script>

<style>
	.show_modal_mask {
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
	}

	.show_modal_area {
		position: fixed;
		width: 80%;
		left: 10%;
		z-index: 1001;
		background: #FFFFFF;
		top: 400upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10upx;
	}

	.show_modal_header {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100upx;
	}

	.show_modal_body {
		min-height: 100upx;
	}

	.show_modal_footer {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin-bottom: 20upx;
	}

	.show_modal_footer_btn_right {
		background: #FF7200;
		color: #FFFFFF;
		font-size: 25upx;
		width: 200upx;
	}

	.show_modal_footer_btn_left {
		font-size: 25upx;
		width: 200upx;
	}

	.show_modal_body_list {
		display: flex;
		align-items: center;
		font-size: 25upx;
		line-height: 60upx;
	}

	.show_modal_body_list text:nth-child(1) {
		width: 130upx;
		text-align: right;
	}

	.show_modal_body_list text:nth-child(2) {
		margin-left: 50upx;
	}

	.show_modal_body_list_input {
		margin-left: 50upx;
		border: 1px solid #dddddd;
		border-radius: 10upx;
		padding-left: 10upx;
	}

	.show_modal_body_list_input:hover {
		border: 1px solid #FFB700 !important;
	}

</style>
