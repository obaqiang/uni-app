<template>
	<view>
		<view class="StockCheckList_head">
			<view class="StockCheckList_head_bl">
				<text>物项种类</text>
				<text>30</text>
			</view>
			<view class="StockCheckList_head_bl">
				<text>物品库存</text>
				<text>30</text>
			</view>
			<view class="StockCheckList_head_bl">
				<text>容器类型</text>
				<text>30</text>
			</view>
			<view class="StockCheckList_head_bl">
				<text>容器号</text>
				<text>30</text>
			</view>
		</view>
		<bgLine/>
		<view class="StockCheckList_body">
			<view class="StockCheckList_body_list">
				<view class="StockCheckList_body_listA">
					<text>#1</text>
					<view>
						<text>批次:</text>
						<text>43242343232</text>
					</view>
					<view class="">
						<text>编码:</text>
						<text>df2rwsfsfesdf</text>
					</view>
					<text>320</text>
				</view>
				<view class="StockCheckList_body_listB">
					<text>犯得上发生范德萨</text>
					<text>法大师傅大师傅</text>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {} from 'vuex'
	import bgLine from "../bgLine/bgLine.vue"
	export default {
		components: {
			bgLine
		},
	
		data() {
			return {};
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
	.StockCheckList_head{
		overflow: hidden;
	}
	.StockCheckList_head_bl{
		width: 50%;
		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60upx;
		font-size: 28upx;
	}
	.StockCheckList_head_bl text:nth-child(1){
		width: 150upx;
		text-align: right;
	}
	.StockCheckList_head_bl text:nth-child(2){
		width: 200upx;
		text-align: center;
	}
	.StockCheckList_body_list{
		border-bottom: 1px solid #DDDDDD;
		font-size: 22upx;
	}
	.StockCheckList_body_listA{
		display: flex;
		align-items: center;
		height: 80upx;
	}
	.StockCheckList_body_listA>text:nth-child(1){
		margin-left: 20upx;
	}
		.StockCheckList_body_listA>view:nth-child(2){
		margin-left: 20upx;
	}
	.StockCheckList_body_listA>view:nth-child(3){
		margin-left: 20upx;
	}
	.StockCheckList_body_listA>text:nth-child(4){
		margin-left: 40upx;
	}
	.StockCheckList_body_listB{
		display: flex;
		flex-direction: column;
		padding-left: 100upx;
	}
</style>
