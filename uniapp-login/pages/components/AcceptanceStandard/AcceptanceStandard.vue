<template>
	<view class="common_area">
		<view class="common_title">
			检验标准
		</view>
		<view class="AcceptanceStandard_list">
			<view class="AcceptanceStandard_bl">
				<view>检验水平</view>
				<view>Ⅱ</view>
			</view>
			<view class="AcceptanceStandard_bl">
				<view>AQL</view>
				<view>Ⅱ</view>
			</view>
			<view class="AcceptanceStandard_bl">
				<view>试样半码</view>
				<view>Ⅱ</view>
			</view>
			<view class="AcceptanceStandard_bl">
				<view>严格度</view>
				<view>Ⅱ</view>
			</view>
			<view class="AcceptanceStandard_bl">
				<view>检验方法</view>
				<view>Ⅱ</view>
			</view>
		</view>
		

	</view>

</template>

<script>
</script>

<style>
	.AcceptanceStandard_list {
		width: 650upx;
		margin: auto;
		overflow: hidden;
	}

	.AcceptanceStandard_bl {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid #ededf3;
		width: 160upx;
		border-radius: 4upx;
		float: left;
		margin: 25upx;
	}
	.AcceptanceStandard_bl view:nth-child(1){
		background: #ededf3;
		display: flex;
		height: 54upx;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		width: 160upx;
	}
	.AcceptanceStandard_bl view:nth-child(2){
		display: flex;
		height: 54upx;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		width: 160upx;
	}
</style>
