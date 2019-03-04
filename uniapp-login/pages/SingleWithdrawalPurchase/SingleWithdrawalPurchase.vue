<template>
	<view class="mes_area">
		<view class="mes_list">
			<text>物料编码:</text>
			<text>fsfdsfsfsfsfsfdsfds</text>
		</view>
		<view class="mes_list">
			<text>物料名称:</text>
			<text>2017-08-09</text>
		</view>
		<view class="mes_list">
			<text>规格型号:</text>
			<text>深圳超燃股份有限公司</text>
		</view>
		<view class="mes_list">
			<text>采购数:</text>
			<text>王坤</text>
		</view>
		<view class="mes_list">
			<text>到货数:</text>
			<text>王坤</text>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.mes_area{
		padding-top: 50upx;
	}
	.mes_list{
		display: flex;
		width: 750upx;
		line-height: 60upx;
	}
	.mes_list text:nth-child(1){
		width: 200upx;
		text-align: right;
	}
	.mes_list text:nth-child(2){
		padding-left: 60upx;
	}
	.bg_line{
		height: 20upx;
		background: #e7e7ed;
		margin-top: 50upx;
	}
</style>
