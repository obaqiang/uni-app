<template>
	<view class="search_title_area">
		<view class="search_title_bl">
			<image class="stock_query_search" :src="stock_query_search"></image>
			<input type="text" placeholder="请输入/扫描要查询的容器条码">
			<image class="stock_query_search" :src="text_right_area_icon"></image>
		</view>
	</view>
</template>

<script>
	import {} from 'vuex'
	export default {
		components: {
		},
	
		data() {
			return {
				stock_query_search: "../../static/img/stock_query_search.png",
				text_right_area_icon:"../../static/img/text_right_area_icon.png",
				
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
	.search_title_bl{
		background: #eeeeee;
		display: flex;
		width: 700upx;
		margin: 20upx 25upx;
		height: 54upx;
		border-radius: 15upx;
		align-items: center;
		font-size: 24upx;
		/* padding: 10upx; */
	}
	.search_title_bl input{
		width: 93%;
	}
	.stock_query_search{
		width: 30upx;
		height: 30upx;
		margin: 20upx;
	}
</style>
