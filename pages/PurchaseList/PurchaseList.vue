<template>
	<view>
		<scanInput v-bind:placeholder_text="order_text" v-bind:scan_input_text="order" />
		<scanInput v-bind:placeholder_text="supplier_text" v-bind:scan_input_text="supplier" />
		<button class="common_btn_fb">搜索</button>
		<view class="purchase_list">
			<view class="purchase_list_a">
				<text>424wffdsfs2</text>
				<text>2013-34-32</text>
			</view>
			<view class="purchase_list_b">
				深圳是弗兰克基洛夫斯克的
			</view>
		</view>
	</view>
</template>

<script>
	import scanInput from "../components/scanInput/scanInput.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		
		components: {
			scanInput
		},

		data() {
			return {
				order: '单号',
				order_text: '请输入单号或扫码查询订单',
				supplier: '供应商',
				supplier_text: '请输入供应商'

			};
		},
		// computed: mapState(['connect_url']),
		computed: {},

		methods: {
			...mapMutations(['MacInfo']),
			...mapMutations(['changeToken']),
			...mapMutations(['changeOrgId']),


		},
		onLoad() {
			// this.MacInfo();
			
		}
	}
</script>

<style>
.purchase_list{
	display: flex;
	flex-direction: column;
}
.purchase_list_a{
	display: flex;
	justify-content: space-between;
	padding: 20upx;
	
}
.purchase_list_b{
	padding-left: 20upx;
}
</style>
