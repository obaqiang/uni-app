<template>
	<view>
		<view class="BillOfMaterial_head_text">委外发料（审核）物料清单</view>
		<view class="BillOfMaterial_area">
			<view class="BillOfMaterial_list">
				<text>发料单号</text>
				<text>wrwrewrew</text>
			</view>
			<view class="BillOfMaterial_list">
				<text>发料单号</text>
				<text>wrwrewrew</text>
			</view>
			<view class="BillOfMaterial_list">
				<text>发料单号</text>
				<text>wrwrewrew</text>
			</view>
			<view class="BillOfMaterial_list">
				<text>发料单号</text>
				<text>wrwrewrew</text>
			</view>
			<view class="BillOfMaterial_list">
				<text>发料单号</text>
				<text>wrwrewrew</text>
			</view>
			<view class="BillOfMaterial_list">
				<text>发料单号</text>
				<text>wrwrewrew</text>
			</view>
			<view class="BillOfMaterial_list">
				<text>发料单号</text>
				<text>wrwrewrew</text>
			</view>
		</view>
		<view class="BillOfMaterial_list_bg_line"></view>
	</view>

</template>

<script>
	export default {
		components: {

		},

		data() {
			return {
			};
		},
		onNavigationBarButtonTap() {

		},
		computed: {
		},

		methods: {

		},
		onLoad() {

		}
	}
</script>

<style>
	
	.BillOfMaterial_head_text{
		padding: 20upx;
		font-weight: bold;
		border-bottom: 1px solid #DDDDDD;
	}
	.BillOfMaterial_area{
		overflow: hidden;
		padding-left: 50upx;
	}
	.BillOfMaterial_list{
		display: flex;
		flex-direction: column;
		width: 170upx;
		float: left;
		text-align: left;
		font-size: 24upx;
		margin-top: 40upx;
	}
	.BillOfMaterial_list_bg_line{
		background: #e7e7e7;
		height: 30upx;
		margin-top: 20upx;
	}
</style>
