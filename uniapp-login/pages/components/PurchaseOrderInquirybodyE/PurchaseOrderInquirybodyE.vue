<template>
	<view class="show_area">
		<view class="show_list">
			<text>清点数：</text>
			<input class="show_input" type="text" placeholder="请输入清点数量">
		</view>
		<view class="show_list">
			<text>清点数：</text>
			<input class="show_input" type="text" placeholder="请输入清点数量">
		</view>
		<view class="btn_area">
			<text class="btn_left">取消</text>
			<text class="btn_right">保存</text>
		</view>
	</view>
	
</template>

<script>
</script>

<style>
	.show_area{
		padding: 50upx 0;
		border-bottom: 1px solid #DDDDDD;
	}
	.show_list{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100upx;
		
	}
	.show_input{
		border: 1px solid #DDDDDD;
		border-radius: 5upx;
		padding: 5upx;
		
	}
	.btn_area{
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
	}
	.btn_left{
		width: 50%;
		height: 100upx;
		background: #F2F2F2;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
	}
	.btn_right{
		width: 50%;
		height: 100upx;
		background: #FFB700;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
	}
</style>
