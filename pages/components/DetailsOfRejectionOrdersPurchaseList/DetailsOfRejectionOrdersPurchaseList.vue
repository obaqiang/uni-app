<template>
	<view class="DetailsOfRejectionOrdersPurchaseList_area">
		<view class="DetailsOfRejectionOrdersPurchaseList_list">
			<view class="DetailsOfRejectionOrdersPurchaseList_listA">
				<view>#1</view>
				<view>
					<text>待点数：</text><text>20</text>
				</view>
				<view>
					<text>扫描数：</text><text>20</text>
				</view>
				<view>
					<text>应退数：</text><text>20</text>
				</view>
			</view>
			<view class="DetailsOfRejectionOrdersPurchaseList_listB">
				<text>f第四届立法监督斯洛伐克的数据是否</text>
				<text>第四届立法监督斯洛伐克的数据是否</text>
			</view>
		</view>
		<bgLine/>
	</view>
</template>

<script>
	import bgLine from "../bgLine/bgLine.vue"
	export default {
		components: {
			bgLine,
		},
	
		data() {
			return {
			};
		},
		computed: {},
	
		methods: {
	
		},
		onLoad() {
			// this.MacInfo();
	
		}
	}
</script>

<style>
	.DetailsOfRejectionOrdersPurchaseList_list{
		border-left: 5upx solid #FFB700;
		padding-bottom: 20upx;
	}
	.DetailsOfRejectionOrdersPurchaseList_listA {
		display: flex;
		height: 100upx;
		align-items: center;
	}

	.DetailsOfRejectionOrdersPurchaseList_listA view:nth-child(1) {
		margin-left: 20upx;
	}

	.DetailsOfRejectionOrdersPurchaseList_listA view:nth-child(2) {
		margin-left: 30upx;
	}

	.DetailsOfRejectionOrdersPurchaseList_listA view:nth-child(3) {
		margin-left: 40upx;
	}

	.DetailsOfRejectionOrdersPurchaseList_listA view:nth-child(4) {
		margin-left: 40upx;
	}
	.DetailsOfRejectionOrdersPurchaseList_listB{
		display: flex;
		flex-direction: column;
		padding-left: 100upx;
		font-size: 22upx;
	}
	.DetailsOfRejectionOrdersPurchaseList_listB view{
			width: 200upx;
			display: block;
	}
</style>
