<template>
	<view>
	<PurchaseOrderInquiryHead v-if="PurchaseOrderInquiryHead_show"/>
	<PurchaseOrderInquirybodyA v-if="PurchaseOrderInquirybodyA_show"/>
	<PurchaseOrderInquirybodyB v-if="PurchaseOrderInquirybodyB_show"/>
	<PurchaseOrderInquirybodyC v-if="PurchaseOrderInquirybodyC_show"/>
	<PurchaseOrderInquirybodyD v-if="PurchaseOrderInquirybodyD_show"/>
	<PurchaseOrderInquirybodyE v-if="PurchaseOrderInquirybodyE_show"/>
	<InventoryList v-if="InventoryList_show"/>
	<deliverModal/>
	</view>
	
</template>

<script>
	import {} from 'vuex'
	import PurchaseOrderInquiryHead from "../components/PurchaseOrderInquiryHead/PurchaseOrderInquiryHead.vue"
	import PurchaseOrderInquirybodyA from "../components/PurchaseOrderInquirybodyA/PurchaseOrderInquirybodyA.vue"
	import PurchaseOrderInquirybodyB from "../components/PurchaseOrderInquirybodyB/PurchaseOrderInquirybodyB.vue"
	import PurchaseOrderInquirybodyC from "../components/PurchaseOrderInquirybodyC/PurchaseOrderInquirybodyC.vue"
	import PurchaseOrderInquirybodyD from "../components/PurchaseOrderInquirybodyD/PurchaseOrderInquirybodyD.vue"
	import PurchaseOrderInquirybodyE from "../components/PurchaseOrderInquirybodyE/PurchaseOrderInquirybodyE.vue"
	import InventoryList from "../components/InventoryList/InventoryList.vue"
	import showModal from "../components/showModal/showModal.vue"
	import deliverModal from "../components/deliverModal/deliverModal.vue"
	export default {
		components: {
			PurchaseOrderInquiryHead,
			PurchaseOrderInquirybodyA,
			PurchaseOrderInquirybodyB,
			PurchaseOrderInquirybodyC,
			PurchaseOrderInquirybodyD,
			PurchaseOrderInquirybodyE,
			InventoryList,
			deliverModal
			
		},
	
		data() {
			return {
				PurchaseOrderInquiryHead_show:false,
				PurchaseOrderInquirybodyA_show:true,
				PurchaseOrderInquirybodyB_show:false,
				PurchaseOrderInquirybodyC_show:false,
				PurchaseOrderInquirybodyD_show:false,
				PurchaseOrderInquirybodyE_show:false,
				InventoryList_show:true
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
