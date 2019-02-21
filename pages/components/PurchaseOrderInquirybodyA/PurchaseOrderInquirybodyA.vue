<template>
	<view>
		<view class="PurchaseOrderInquirybodyA_head_area">
			<view class="PurchaseOrderInquirybodyA_head_list">
				<text v-bind:class="{ 'PurchaseOrderInquirybodyA_head_list_on': active }">
					物品清点
				</text>

			</view>
			<view class="PurchaseOrderInquirybodyA_head_list">
				<text v-bind:class="{ 'PurchaseOrderInquirybodyA_head_list_on': active==false }">
					清点记录
				</text>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				query_scan: "../../static/img/query_scan.png",
				active: false,
				isActive: 'PurchaseOrderInquirybodyA_head_list_on'
			};
		},
	}
</script>

<style>
	.PurchaseOrderInquirybodyA_head_area {
		display: flex;
		align-items: center;
		width: 750upx;
	}

	.PurchaseOrderInquirybodyA_head_list {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100upx;
		line-height: 100upx;
	}

	.PurchaseOrderInquirybodyA_head_list_on {
		color: #FFB700;
		border-bottom: 1px solid #FFB700;
	}
</style>
