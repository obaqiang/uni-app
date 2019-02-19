<template>
	<view>
		<view class="switch_title_head_area">
			<text class="switch_title_head_text">{{switchtitletext}}</text>
			<view class="switch_title_head_area_head_right">
				<text class="switch_title_head_right_text">显示全部</text>
				<switch checked @change="switch1Change" />
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props: ['switchtitletext'],
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
	.switch_title_head_area {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 750upx;
		align-items: center;
		height: 90upx;
		background: #FFFFFF;
	}


	.switch_title_head_right_text {
		margin-right: 10upx;
	}

	.switch_title_head_text {
		margin-left: 20upx;
		font-weight: bold;
	}
</style>
