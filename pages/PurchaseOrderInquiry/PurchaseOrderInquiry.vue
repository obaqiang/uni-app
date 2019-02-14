<template>
	<view>
	<PurchaseOrderInquiryHead v-if="PurchaseOrderInquiryHead_show"/>
	<PurchaseOrderInquirybodyA v-if="PurchaseOrderInquirybodyA_show"/>
	</view>
	
</template>

<script>
	import {} from 'vuex'
	import PurchaseOrderInquiryHead from "../components/PurchaseOrderInquiryHead/PurchaseOrderInquiryHead.vue"
	import PurchaseOrderInquirybodyA from "../components/PurchaseOrderInquirybodyA/PurchaseOrderInquirybodyA.vue"
	import PurchaseOrderInquirybodyB from "../components/PurchaseOrderInquirybodyB/PurchaseOrderInquirybodyB.vue"
	export default {
		components: {
			PurchaseOrderInquiryHead,
			PurchaseOrderInquirybodyA,
			PurchaseOrderInquirybodyB
		},
	
		data() {
			return {
				PurchaseOrderInquiryHead_show:false,
				PurchaseOrderInquirybodyA_show:true
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
			scanCode() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			success() {
				this.ifshowmodal = !this.ifshowmodal
			},
		},
		onLoad() {
			
		}
	}
</script>

<style>
</style>
