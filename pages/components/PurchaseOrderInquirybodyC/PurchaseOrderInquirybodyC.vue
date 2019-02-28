<template>
	<view class="table_area">
		<view class="head_area">
			<text>行号</text>
			<text>物料编码</text>
			<text>清点</text>
			<text>备品</text>
			<text>采购</text>
			<text>到货</text>
			<text>入库</text>
		</view>
		<view class="head_area" v-for="(item,index) in table_list" :key="item" @tap="tapMater(item.id)">
			<text>{{item.id}}</text>
			<text>{{item.materialCode}}</text>
			<text>{{item.countQty}}</text>
			<text>{{item.giveQty}}</text>
			<text>{{item.poQty}}</text>
			<text>{{item.arrivalQty}}</text>
			<text>{{item.inStockQty}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['table_list'],
		data() {
			return {
				
			};
		},
		methods: {
			tapMater(e){
				let that = this
				for(let i =0;i<that.table_list.length;i++){
					if(e==that.table_list[i].id){
						this.$emit('tapMater', that.table_list[i]);
					}
				}
				
			}


		},
		onLoad() {
			
		}
	}
</script>

<style>
	.head_area {
		display: flex;
		width: 750upx;
		border-bottom: 1px solid #DDDDDD;
		line-height: 100upx;
	}

	.head_area text {
		width: 90upx;
		text-align: center;
	}

	.head_area text:nth-child(2) {
		width: 210upx;
		text-align: center;
	}
</style>
