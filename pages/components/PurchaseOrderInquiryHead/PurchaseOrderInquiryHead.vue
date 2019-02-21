<template>
	<view class="PurchaseOrderInquiryHead_head_list">

		<view class="PurchaseOrderInquiryHead_head_text">
			采购订单查询
		</view>
		<view class="PurchaseOrderInquiryHead_head_input_area">
			订单号
			<input class="PurchaseOrderInquiryHead_uni-input"  :placeholder="c_text" />
		</view>
		<image class="PurchaseOrderInquiryHead_query_scan_icon" :src="query_scan"></image>
	</view>
</template>

<script>
	export default {
		props: ['a_text','b_text','c_text'],
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
	.PurchaseOrderInquiryHead_uni-input:hover{
		border: 1px solid #FFB700;
	}
	.PurchaseOrderInquiryHead_query_scan_icon{
		width: 100upx;
		height: 100upx;
		position: absolute;
		bottom: 78upx;
		left: 325upx;
	}
</style>
