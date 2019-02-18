<template>
	<view>
		<view class="DetailsOfDocumentsHead_head_area">
			<text class="DetailsOfDocumentsHead_head_text">来料入库单据信息</text>
			<view class="DetailsOfDocumentsHead_head_area_head_right">
				<text class="head_right_text">显示全部</text>
				<switch checked @change="switch1Change" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},

		data() {
			return {

			};
		},
		computed: {},

		methods: {
			switch1Change: function(e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},

		},
		onLoad() {
			// this.MacInfo();

		}
	}
</script>

<style scoped="scoped">
	.DetailsOfDocumentsHead_head_area {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 750upx;
		align-items: center;
		height: 80upx;
		background: #FFFFFF;
	}


	.head_right_text {
		margin-right: 10upx;
	}
	.DetailsOfDocumentsHead_head_text{
		margin-left: 10upx;
	}
</style>
