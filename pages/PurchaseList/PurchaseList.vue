<template>
	<view>
		<scanInput v-bind:placeholder_text="order_text" v-bind:scan_input_text="order" v-bind:scan_icon_show="true"
		 v-on:scanAInputSuc="scanAInputSuc" />
		<scanInput v-bind:placeholder_text="supplier_text" v-bind:scan_input_text="supplier" v-bind:scan_icon_show="false"
		 v-on:scanBInputSuc="scanBInputSuc" />
		<button class="common_btn_fb" @tap="goSearch">搜索</button>
		<view class="purchase_list" v-for="(item,index) in result_list" @tap="goDetail(item.billCode)" :key="index">
			<view class="purchase_list_a">
				<text>{{item.billCode}}</text>
				<text>{{item.billDate}}</text>
			</view>
			<view class="purchase_list_b">
				{{item.supplierName}}
			</view>
		</view>
		<loadingWait v-if="loading_wait_show"/>
	</view>
</template>

<script>
	import scanInput from "../components/scanInput/scanInput.vue"
	import loadingWait from "../components/loadingWait/loadingWait.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {

		components: {
			scanInput,
			loadingWait
		},

		data() {
			return {
				order: '单号',
				order_text: '请输入单号或扫码查询订单',
				supplier: '供应商',
				supplier_text: '请输入供应商',
				BillCode: '',
				SupplierCode: '',
				Type: '',
				result_list: '',
				loading_wait_show:false

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
			MAC() {
				return this.$store.state.MAC
			},
		},

		methods: {
			...mapMutations(['MacInfo']),
			...mapMutations(['changeToken']),
			...mapMutations(['changeOrgId']),
			...mapMutations(['ErrRequestShow']),
			GetPO() {
				let that = this
				that.loading_wait_show = true
				uni.request({
					url: that.connect_url + 'api/services/wmspda/PO/GetPO',
					data: {
						BillCode: that.BillCode,
						SupplierCode: that.SupplierCode,
						Type: that.Type,
						MAC: that.MAC

					},
					method: 'POST',
					header: that.post_header,
					success: (res) => {
						// console.log(res.data);
						that.loading_wait_show = false
						that.ErrRequestShow(res)
						if (res.data.success == true) {
							that.result_list = res.data.result
						}

					}

				});
			},
			goDetail(billCode) {
				let that = this
				for (let i = 0; i < that.result_list.length; i++) {
					if (billCode == that.result_list[i].billCode) {
						uni.setStorageSync('BillCodeDetail', that.result_list[i])
						uni.setStorageSync('BillId', that.result_list[i].id)
					}
				}
				uni.setStorageSync('BillCode', billCode)
				uni.navigateTo({
					url: '../ItemInventory/ItemInventory'
				});
			},
			goSearch() {
				let that = this
				if (that.BillCode == '') {
					uni.showModal({
						title: '提示',
						content: '单号不能为空',
					})
				} else {
					that.GetPO()
				}

			},
			scanAInputSuc(e) {
				let that = this
				that.BillCode = e
			},
			scanBInputSuc(e) {
				let that = this
				that.SupplierCode = e
			}

		},
		onLoad() {
			// this.MacInfo();
			let that = this
			that.Type = uni.getStorageSync('Type')
			console.log(that.Type)
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
