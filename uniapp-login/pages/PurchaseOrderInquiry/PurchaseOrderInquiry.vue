<template>
	<view>
	<PurchaseOrderInquiryHead v-if="PurchaseOrderInquiryHead_show"/>
	<PurchaseOrderInquirybodyA v-if="PurchaseOrderInquirybodyA_show"/>
	<PurchaseOrderInquirybodyB v-if="PurchaseOrderInquirybodyB_show"/>
	<PurchaseOrderInquirybodyC v-if="PurchaseOrderInquirybodyC_show"/>
	<PurchaseOrderInquirybodyD v-if="PurchaseOrderInquirybodyD_show"/>
	<PurchaseOrderInquirybodyE v-if="PurchaseOrderInquirybodyE_show"/>
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
	export default {
		components: {
			PurchaseOrderInquiryHead,
			PurchaseOrderInquirybodyA,
			PurchaseOrderInquirybodyB,
			PurchaseOrderInquirybodyC,
			PurchaseOrderInquirybodyD,
			PurchaseOrderInquirybodyE,
			
		},
	
		data() {
			return {
				PurchaseOrderInquiryHead_show:true,
				PurchaseOrderInquirybodyA_show:true,
				PurchaseOrderInquirybodyB_show:true,
				PurchaseOrderInquirybodyC_show:true,
				PurchaseOrderInquirybodyD_show:true,
				PurchaseOrderInquirybodyE_show:true
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
