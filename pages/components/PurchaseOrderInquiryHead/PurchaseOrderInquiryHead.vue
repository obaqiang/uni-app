<template>
	<view class="PurchaseOrderInquiryHead_head_list">

		<view class="PurchaseOrderInquiryHead_head_text">
			采购订单查询
		</view>
		<view class="PurchaseOrderInquiryHead_head_input_area">
			订单号
			<input class="PurchaseOrderInquiryHead_uni-input"  placeholder="请输入订单号/订单尾号4位数以上/扫码查询" />
		</view>
		<image class="PurchaseOrderInquiryHead_query_scan_icon" :src="query_scan"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				query_scan: "../../static/img/query_scan.png",
			};
		},
	}
</script>

<style scoped>
	.PurchaseOrderInquiryHead_head_list {
		display: flex;
		flex-direction: column;
		padding: 30upx;
		font-size: 28upx;
	}

	.PurchaseOrderInquiryHead_head_text {
		font-weight: bold;
	}

	.PurchaseOrderInquiryHead_head_input_area {
		display: flex;
		align-items: center;
		margin-top: 20upx;
	}

	.PurchaseOrderInquiryHead_uni-input {
		border: 1px solid #999999;
		border-radius: 10upx;
		margin-left: 20upx;
		width: 550upx;
	}
	.PurchaseOrderInquiryHead_query_scan_icon{
		width: 100upx;
		height: 100upx;
		position: absolute;
		bottom: 78upx;
		left: 325upx;
	}
</style>
