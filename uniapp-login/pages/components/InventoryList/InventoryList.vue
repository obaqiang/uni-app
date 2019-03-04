<template>
	<view class="inventory_area">
		<view class="inventory_list" v-for="(item,index) in InventoryList_data" :key="index" @tap="modal_copyshow(item.id)">
			<text>{{index+1}}</text>
			<view class="list_in">
				<text>物料编码:</text>
				<text>{{item.materialCode}}</text>
			</view>
			<view class="list_in">
				<text>物料名称:</text>
				<text>{{item.materialName}}</text>
			</view>
			<view class="list_in">
				<text>清点数:</text>
				<text>{{item.countQty}}</text>
			</view>
			<view class="list_in">
				<text>备品数:</text>
				<text>{{item.giveQty}}</text>
			</view>
			<view class="list_in">
				<text>清点时间:</text>
				<text>{{item.createDateTime}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	
	export default {
		props:['InventoryList_data'],
		methods: {
			modal_copyshow(id) {
				uni.setStorageSync('ReceiveRecordId',id)
				let that = this
				for (let i = 0; i < that.InventoryList_data.length; i++) {
					if (id == that.InventoryList_data[i].id) {
						uni.setStorageSync('InventoryList_data_detail', that.InventoryList_data[i])
						that.$emit('modal_copyshow', true);
					}
				}
			}

		},
		onLoad() {

		}
	}
</script>

<style>
	.list_in {
		color: #999999;
	}

	.inventory_list {
		padding-left: 50upx;
		border-bottom: 1px solid #DDDDDD;
		padding-bottom: 20upx;
	}
</style>
