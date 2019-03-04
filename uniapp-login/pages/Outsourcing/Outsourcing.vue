<template>
	<view>
		<PurchaseOrderInquiryHead v-if="PurchaseOrderInquiryHead_show" />
		<BillOfMaterial />
		<DetailsOfDocumentsHead/>
		<BillOfMaterialList/>
	</view>

</template>

<script>
	import {} from 'vuex'
	import PurchaseOrderInquiryHead from "../components/PurchaseOrderInquiryHead/PurchaseOrderInquiryHead.vue"
	import BillOfMaterial from "../components/BillOfMaterial/BillOfMaterial.vue"
	import BillOfMaterialList from "../components/BillOfMaterialList/BillOfMaterialList.vue"
	import DetailsOfDocumentsHead from "../components/DetailsOfDocumentsHead/DetailsOfDocumentsHead.vue"
	export default {
		components: {
			PurchaseOrderInquiryHead,
			BillOfMaterial,
			BillOfMaterialList,
			DetailsOfDocumentsHead
		},

		data() {
			return {
				PurchaseOrderInquiryHead_show: false,
			};
		},
		onNavigationBarButtonTap() {

		},
		computed: {
			i18n() {
				return this.$t('homepage')
			}
		},

		methods: {

		},
		onLoad() {

		}
	}
</script>

<style>
</style>
