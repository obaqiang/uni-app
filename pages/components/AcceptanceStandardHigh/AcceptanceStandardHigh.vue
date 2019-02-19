<template>
	<view class="common_area">
		<view class="common_title">
			质检操作（高检）
		</view>
		<view class="AcceptanceStandard_plus_info">
			<view>
				<text>实收数:</text>
				<text>300</text>
			</view>
			<view>
				<text>样品数:</text>
				<text>50(50~100)</text>
			</view>
		</view>
		<view class="AcceptanceStandardHigh_list">
			<view class="AcceptanceStandardHigh_bl">
				<view>检验水平</view>
				<view>Ⅱ</view>
			</view>
			<view class="AcceptanceStandardHigh_bl">
				<view>AQL</view>
				<view>Ⅱ</view>
			</view>
			<view class="AcceptanceStandardHigh_bl">
				<view>试样半码</view>
				<view>Ⅱ</view>
			</view>
			<view class="AcceptanceStandardHigh_bl">
				<view>严格度</view>
				<view>Ⅱ</view>
			</view>
			<view class="AcceptanceStandardHigh_bl">
				<view>检验方法</view>
				<view>Ⅱ</view>
			</view>
		</view>
		<view class="AcceptanceStandardHigh_num_line">
			<text>样品编号:</text>
			<input type="text">
			<view>检验</view>
		</view>
		
		<view class="AcceptanceStandardHigh_table">
			<view class="AcceptanceStandardHigh_table_head">
				样品编号
			</view>
			<view class="AcceptanceStandardHigh_table_body">
				<view class="AcceptanceStandardHigh_table_body_bl">
					<view>
						长度
					</view>
					<image class="AcceptanceStandardHigh_table_body_bl_icon" :src="quality_result_true"></image>
				</view>
				<view class="AcceptanceStandardHigh_table_body_bl">
					<view>
						长度
					</view>
					<image class="AcceptanceStandardHigh_table_body_bl_icon" :src="quality_result_true"></image>
				</view>
				<view class="AcceptanceStandardHigh_table_body_bl">
					<view>
						长度
					</view>
					<image class="AcceptanceStandardHigh_table_body_bl_icon" :src="quality_result_true"></image>
				</view>
				<view class="AcceptanceStandardHigh_table_body_bl">
					<view>
						长度
					</view>
					<image class="AcceptanceStandardHigh_table_body_bl_icon" :src="quality_result_true"></image>
				</view>
				<view class="AcceptanceStandardHigh_table_body_bl">
					<view>
						长度
					</view>
					<image class="AcceptanceStandardHigh_table_body_bl_icon" :src="quality_result_true"></image>
				</view>
				
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
				quality_result_true: "../../static/img/quality_result_true.png",
				
			};
		},
		// computed: mapState(['connect_url']),
		computed: {
			
		},
	
		methods: {
		
		
		},
		onLoad() {
			// this.MacInfo();
	
		}
	}
</script>

<style>
	.AcceptanceStandardHigh_list {
		width: 650upx;
		margin: auto;
		overflow: hidden;
	}

	.AcceptanceStandardHigh_bl {
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

	.AcceptanceStandardHigh_bl view:nth-child(1) {
		background: #ededf3;
		display: flex;
		height: 54upx;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		width: 160upx;
	}

	.AcceptanceStandardHigh_bl view:nth-child(2) {
		display: flex;
		height: 54upx;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		width: 160upx;
	}
	.AcceptanceStandard_plus_info{
		display: flex;
		justify-content: space-between;
		height: 100upx;
		align-items: center;
		padding: 0 30upx;
	}
	.AcceptanceStandardHigh_num_line{
		display: flex;
		background: #ffefb2;
		justify-content: center;
		align-items: center;
		height: 96upx;
	}
	.AcceptanceStandardHigh_num_line input{
		background: #FFFFFF;
		width: 208upx;
		border-radius: 10upx;
		height: 64upx;
		margin: 30upx;
		text-align: center;
	}
	.AcceptanceStandardHigh_num_line view:nth-child(3){
		color: #FFFFFF;
		height: 64upx;
		border-radius: 10upx;
		width: 208upx;
		text-align: center;
		line-height: 64upx;
		background: #FFB700;
	}
	.AcceptanceStandardHigh_table_body_bl_icon{
		width: 50upx;
		height: 50upx;
		margin: 20upx;
	}
	.AcceptanceStandardHigh_table{
		background: #ededf3;
		width: 680upx;
		margin: 20upx auto;
	}
	.AcceptanceStandardHigh_table_head{
		border-bottom: 1px solid #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 96upx;
	}
	.AcceptanceStandardHigh_table_body{
		overflow: hidden;
	}
	.AcceptanceStandardHigh_table_body_bl{
		background: #FFFFFF;
		width: 180upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 20upx;
		float: left;
		border-radius: 4upx;
	}
	.AcceptanceStandardHigh_table_body_bl>view:nth-child(1){
		border-bottom: 1px solid #DDDDDD;
		width: 100%;
		text-align: center;
		line-height: 70upx;
	}
</style>
