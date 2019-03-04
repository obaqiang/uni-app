<template>
	<view class="stock_check_nav_area">
		<view class="stock_check_nav_on">容器库存</view>
		<view>物品库存</view>
	</view>
</template>

<script>
</script>

<style>
	.stock_check_nav_area{
		background: #E7E7E7;
		display: flex;
		height: 100upx;
		align-items: center;
		padding-left: 25upx;
	}
	.stock_check_nav_area view{
		background: #FFFFFF;
		height: 64upx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 350upx;
		border-radius: 4upx;
	}
	.stock_check_nav_on{
		background: #FFB700 !important;
		color: #FFFFFF;
	}
</style>
