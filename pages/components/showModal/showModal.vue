<template>
	<view>
		<view class='show_modal_mask'></view>
		<view class="show_modal_area">
			<view class="show_modal_header">
				{{show_modal_header}}
			</view>
			<view class="show_modal_body">
				{{show_modal_body}}
			</view>
			<view class="show_modal_footer">
				<button class="show_modal_footer_btn_left" @tap="closeModal">确定</button>
				<button class="show_modal_footer_btn_right" @tap="closeModal">取消</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['ifshowmodal','show_modal_header','show_modal_body'],
		components: {

		},

		data() {
			return {

			};
		},


		methods: {
			closeModal(){
				this.$emit('success',true);
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
	.show_modal_body{
		min-height: 200upx;
	}
	.show_modal_footer{
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin-bottom: 20upx;
	}
	.show_modal_footer_btn_left{
		background: #FF7200;
		color: #FFFFFF;
	}
</style>
