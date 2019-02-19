<template>
	<view class="QualityInspectionOperation_area">
		<view class="QualityInspectionOperation_title">
			质检操作
		</view>
		<view class="QualityInspectionOperation_a">
			<text>实收数:</text>
			<text>30</text>
		</view>
		<view class="QualityInspectionOperation_in">
			<view class="QualityInspectionOperation_in_list">
				<text>抽检数</text>
				<input class="QualityInspectionOperation_input" type="text">
			</view>
			<view class="QualityInspectionOperation_in_list">
				<text>拒收数</text>
				<input class="QualityInspectionOperation_input" type="text">
			</view>
		</view>
		<view class="QualityInspectionOperation_in">
			<view class="QualityInspectionOperation_in_list">
				<text>不良总数</text>
				<input class="QualityInspectionOperation_input" type="text">
			</view>
			<view class="QualityInspectionOperation_in_list">
				<text>不良率</text>
				<input class="QualityInspectionOperation_input" type="text">
			</view>
		</view>
		<view class="QualityInspectionOperation_table">
			<view class="QualityInspectionOperation_table_head">
				<text>不良代码</text>
				<text>不良原因</text>
				<text>不良数</text>
			</view>
			<view class="QualityInspectionOperation_table_body">
				<text>001</text>
				<text>表面不平</text>
				<text>0</text>
			</view>
			<view class="QualityInspectionOperation_table_body">
				<text>001</text>
				<text>表面不平</text>
				<text>0</text>
			</view>
			<view class="QualityInspectionOperation_table_body">
				<text>001</text>
				<text>表面不平</text>
				<text>0</text>
			</view>
		</view>
		<view class="QualityInspectionOperation_foot">
			<text>质检结果</text>
			<text>合格</text>
			<text>不合格</text>
		</view>

	</view>

</template>

<script>
</script>

<style>
	.QualityInspectionOperation_area {
		background: #FFFFFF;
		width: 700upx;
		display: block;
		margin: 25upx;
		border-radius: 10upx;
		padding-bottom: 30upx;
	}

	.QualityInspectionOperation_title {
		font-size: 28upx;
		font-weight: bold;
		border-bottom: 1px solid #DDDDDD;
		line-height: 72upx;
		padding-left: 30upx;
	}

	.QualityInspectionOperation_a {
		display: flex;
		align-items: center;
		padding-left: 40upx;
		height: 72upx;
	}
	.QualityInspectionOperation_in{
		display: flex;
		height: 72upx;
		align-items: center;
	}
	.QualityInspectionOperation_input{
		border: 1px solid #DDDDDD;
		width: 50%;
		border-radius: 4upx;
		margin-left: 20upx;
	}
	.QualityInspectionOperation_in_list{
		display: flex;
		justify-content: center;
	}
	.QualityInspectionOperation_in_list text:nth-child(1){
		text-align: right;
		width: 150upx
	}
	
	.QualityInspectionOperation_table{
		width: 650upx;
		border:1px solid #d7d7dd;
		margin: 20upx auto;
		border-radius: 4upx;
		
	}
	.QualityInspectionOperation_table_head{
		display: flex;
		background: #ededf3;
		height: 72upx;
		align-items: center;
	}
	.QualityInspectionOperation_table_head text{
		width: 210upx;
		text-align: center;
		font-size: 26upx;
	}
	.QualityInspectionOperation_table_body{
		display: flex;
		background: #ffffff;
		height: 72upx;
		align-items: center;
		border-bottom: 1px solid #DDDDDD;
	}
	.QualityInspectionOperation_table_body text{
		width: 210upx;
		text-align: center;
		font-size: 26upx;
	}
	.QualityInspectionOperation_foot{
		height: 100upx;
		display: flex;
		align-items: center;
		font-size: 28upx;
	}
	.QualityInspectionOperation_foot text:nth-child(1){
		margin-left: 100upx;
	}
	.QualityInspectionOperation_foot text:nth-child(2){
		background: #FFB700;
		padding: 20upx 40upx;
		border-radius: 10upx;
		margin-left: 30upx;
	}
	.QualityInspectionOperation_foot text:nth-child(3){
		margin-left: 30upx;
	}
</style>
