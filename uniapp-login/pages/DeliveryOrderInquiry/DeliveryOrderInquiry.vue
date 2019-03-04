<template>
	<view>
		<PurchaseOrderInquiryHead v-bind:a_text="a_text" v-bind:b_text="b_text" v-bind:c_text="c_text" v-on:getAsnCode="getAsnCode" />
	</view>
</template>

<script>
	import PurchaseOrderInquiryHead from "../components/PurchaseOrderInquiryHead/PurchaseOrderInquiryHead.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {

		components: {
			PurchaseOrderInquiryHead
		},

		data() {
			return {
				a_text: '送货单查询',
				b_text: '单号',
				c_text: '请输入订单号/订单尾号4位数以上/扫码查询',
				BillCode: '',
				Asn_data: ''
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
			getAsnCode(e) {
				this.BillCode = e
				this.GetAsn()
			},
			GetAsn() {
				let that = this
				uni.request({
					url: that.connect_url + 'api/services/wmspda/Asn/GetAsn', //仅为示例，并非真实接口地址。
					data: {
						MAC: that.MAC,
						BillCode: that.BillCode
					},
					method: 'POST',
					header: that.post_header,
					success: (res) => {
						console.log(res.data)
						that.ErrRequestShow(res)
						if (res.data.success == true) {
							that.Asn_data = res.data.result
							uni.setStorageSync('BillCode', that.BillCode)
							uni.setStorageSync('BillCodeDetail', that.Asn_data[0])
							uni.setStorageSync('BillId', that.Asn_data[0].id)
							uni.navigateTo({
								url: '../ItemInventoryAsn/ItemInventoryAsn'
							});
						}

					}

				});
			}

		},
		onLoad() {}
	}
</script>

<style>
	page {
		background: #e7e7e7;
	}
</style>
