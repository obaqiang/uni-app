<template>
	<view class="loading_wait_area">	
		<image class="loading_icon" :src="loading_icon"></image>
		<view class="loading_mask"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				loading_icon: "../../static/img/loading17.gif",
			}
		}
	}
</script>

<style>
	.loading_icon{
		width: 100upx;
		height: 100upx;
		z-index: 2;
	}
	.loading_wait_area{
		text-align: center;
		position: fixed;
		top: 700upx;
		width: 100%;
	
	}
	.loading_mask{
		width: 100%;
		height: 100%;
		background: #000000;
		position: fixed;
		top: 0;
		left:0;
		opacity: 0.2;
		z-index: 1;
	}
</style>
