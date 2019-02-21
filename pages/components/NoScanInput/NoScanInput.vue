<template>
	<view class="body_list">
		<text class="text_a">{{scan_input_text}}:</text>
		<view class="text_right_area">
			<input class="text_right_input" type="text" :placeholder="placeholder_text">
			<!-- <image class="text_right_area_icon" :src="text_right_area_icon"></image> -->
		</view>
	</view>
</template>

<script>
	import {} from 'vuex'
	export default {
		props: ['placeholder_text', 'scan_input_text'],
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
			console.log(this.placeholder_text)
		}
	}
</script>

<style>
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

	.text_right_area {
		display: flex;
		border: 1px solid #DDDDDD;
		align-items: center;
		padding: 10upx;
		margin-left: 10upx;
		border-radius: 10upx;
	}
	.text_right_area:hover{
		border: 1px solid #ffb700;
	}

	.text_right_area_icon {
		width: 50upx;
		height: 50upx;
	}

	.text_right_input {
		width: 450upx;
		font-size: 20upx;
	}
</style>
