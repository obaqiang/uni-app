<template>
		<view class="MaterialInformation_area">
			<view class="MaterialInformation_title">
				物料信息
			</view>
			<view class="MaterialInformation_body">
				<view class="MaterialInformation_list">
					<text>到货单号:</text>
					<text>3232324324323232</text>
				</view>
				<view class="MaterialInformation_list">
					<text>到货单号:</text>
					<text>3232324324323232</text>
				</view>
				<view class="MaterialInformation_list">
					<text>订单号:</text>
					<text>3232324324323232</text>
				</view>
				<view class="MaterialInformation_list">
					<text>供应商:</text>
					<text>3232324324323232</text>
				</view>
			</view>
			
			<view class="MaterialInformation_foot">
				<view class="MaterialInformation_list">
					<text>供应商:</text>
					<text>3232324324323232</text>
				</view>
				<view class="MaterialInformation_list">
					<text>供应商:</text>
					<text>3232324324323232</text>
				</view>
			</view>
			
		</view>

</template>

<script>
</script>

<style>
	.MaterialInformation_area {
		background: #FFFFFF;
		width: 700upx;
		display: block;
		margin: 25upx;
		border-radius: 10upx;
	}

	.MaterialInformation_title {
		font-size: 28upx;
		font-weight: bold;
		border-bottom: 1px solid #DDDDDD;
		line-height: 72upx;
		padding-left: 30upx;
	}
	.MaterialInformation_list{
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 26upx;
		height: 50upx;
	}
	.MaterialInformation_list text:nth-child(1){
		width: 20%;
		text-align: right;
	}
	.MaterialInformation_list text:nth-child(2){
		width: 70%;
		text-align: left;
	}
	.MaterialInformation_body{
		border-bottom: 1px solid #DDDDDD;
		padding: 20upx 0;
	}
	.MaterialInformation_foot{
		padding: 20upx 0;
	}
</style>
