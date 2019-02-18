<template>
	<view class="table_area">
		<view class="head_area">
			<text>行号</text>
			<text>物料编码</text>
			<text>采购</text>
			<text>到货</text>
			<text>入库</text>
			<text>清点</text>
			<text>备品</text>
		</view>
		<view class="head_area">
			<text>1</text>
			<text>dsadsadsadsada</text>
			<text>50</text>
			<text>50</text>
			<text>0</text>
			<text>0</text>
			<text>0</text>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.head_area{
		display: flex;
		width: 750upx;
		border-bottom: 1px solid #DDDDDD;
		line-height: 100upx;
	}
	.head_area text{
		width: 90upx;
		text-align: center;
	}
	.head_area text:nth-child(2){
		width: 210upx;
		text-align: center;
	}
</style>
