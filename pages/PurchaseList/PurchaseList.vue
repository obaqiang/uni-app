<template>
	<view>
		<scanInput v-bind:placeholder_text="order_text" v-bind:scan_input_text="order" v-on:scanAInputSuc="scanAInputSuc"/>
		<scanInput v-bind:placeholder_text="supplier_text" v-bind:scan_input_text="supplier" v-on:scanBInputSuc="scanBInputSuc"/>
		<button class="common_btn_fb" @tap="goSearch">搜索</button>
		<view class="purchase_list" v-for="item in result_list" @tap="goDetail(item.billCode)">
			<view class="purchase_list_a">
				<text>{{item.billCode}}</text>
				<text>{{item.billDate}}</text>
			</view>
			<view class="purchase_list_b">
				{{item.supplierName}}
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
				supplier_text: '请输入供应商',
				BillCode: '',
				SupplierCode: '',
				Type: '11',
				MAC: '00-50-56-C0-00-01',
				result_list:''

			};
		},
		// computed: mapState(['connect_url']),
		computed: {
			connect_url() {
				return this.$store.state.connect_url
			},
			current_language() {
				return this.$store.state.current_language
			},
			post_header() {
				return this.$store.state.post_header
			},
		},

		methods: {
			...mapMutations(['MacInfo']),
			...mapMutations(['changeToken']),
			...mapMutations(['changeOrgId']),
			GetPO() {
				let that = this
				uni.request({
					url: that.connect_url + 'api/services/wmspda/PO/GetPO', //仅为示例，并非真实接口地址。
					data: {
						BillCode: that.BillCode,
						SupplierCode: that.SupplierCode,
						Type: that.Type,
						MAC: that.MAC

					},
					method: 'POST',
					header: that.post_header,
					success: (res) => {
						console.log(res.data);
						that.result_list = res.data.result
					}

				});
			},
			goDetail(billCode){
				let that = this
				for(let i =0;i<that.result_list.length;i++){
					if(billCode==that.result_list[i].billCode){
						uni.setStorageSync('BillCodeDetail',that.result_list[i])
						uni.setStorageSync('BillId',that.result_list[i].id)
					}
				}
				uni.setStorageSync('BillCode',billCode)
				uni.navigateTo({
					url: '../ItemInventory/ItemInventory'
				});
			},
			goSearch(){
				let that = this
				that.GetPO()
			},
			scanAInputSuc(e){
				let that = this
				that.BillCode = e
			},
			scanBInputSuc(e){
				let that = this
				that.SupplierCode = e
			}

		},
		onLoad() {
			// this.MacInfo();

		}
	}
</script>

<style>
	.purchase_list {
		display: flex;
		flex-direction: column;
	}

	.purchase_list_a {
		display: flex;
		justify-content: space-between;
		padding: 20upx;

	}

	.purchase_list_b {
		padding-left: 20upx;
	}
</style>
