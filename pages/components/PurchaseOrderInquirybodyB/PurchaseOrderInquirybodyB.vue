<template>
	<view class="mes_area">
		<view class="mes_list">
			<text>{{order_text}}:</text>
			<text>{{order_text_list}}</text>
		</view>
		<view class="mes_list">
			<text>{{order_time}}:</text>
			<text>{{order_time_list}}</text>
		</view>
		<view class="mes_list">
			<text>{{supplier}}:</text>
			<text>{{supplier_list}}</text>
		</view>
		<view class="mes_list">
			<text>{{supplier_man}}:</text>
			<text>{{supplier_man_list}}</text>
		</view>
		<view class="bg_line">
			
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		props: ['order_text','order_time','supplier','supplier_man','order_text_list','order_time_list','supplier_list','supplier_man_list',],
		components: {
	
		},
	
		data() {
			return {
				
			};
		},
		methods: {
		},
		onLoad() {
			// this.MacInfo();
			console.log(132)
			console.log(this.connect_url_all)
	
		}
	}
	
</script>

<style>
	.mes_area{
		padding-top: 50upx;
	}
	.mes_list{
		display: flex;
		width: 750upx;
		line-height: 60upx;
	}
	.mes_list text:nth-child(1){
		width: 200upx;
		text-align: right;
	}
	.mes_list text:nth-child(2){
		padding-left: 60upx;
	}
	.bg_line{
		height: 20upx;
		background: #e7e7ed;
		margin-top: 50upx;
	}
</style>
