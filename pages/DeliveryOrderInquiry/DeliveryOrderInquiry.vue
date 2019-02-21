<template>
	<view>
		<PurchaseOrderInquiryHead v-bind:a_text = "a_text" v-bind:b_text = "b_text" v-bind:c_text = "c_text"/>
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
				a_text:'送货单查询',
				b_text:'单号',
				c_text:'请输入订单号/订单尾号4位数以上/扫码查询'
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

</style>
