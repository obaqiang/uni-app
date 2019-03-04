<template>
	<view class="alert_modal">
		<text>
			{{alert_modal}}
		</text>

	</view>
</template>

<script>
	export default {
		props: ['alert_modal'],
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
	.alert_modal {
		position: absolute;
		text-align: center;
		width: 750upx;
		bottom: 200upx;
	}

	.alert_modal text {
		background: #000000;
		opacity: 0.8;
		color: #FFFFFF;
		padding: 20upx;
		border-radius: 10upx;
	}
</style>
