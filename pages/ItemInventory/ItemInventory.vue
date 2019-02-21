<template>
	<view>
		<PurchaseOrderInquirybodyA />
		<PurchaseOrderInquirybodyB v-bind:order_text="order_text" v-bind:order_text_list="order_text_list" v-bind:order_time="order_time"
		 v-bind:order_time_list="order_time_list" v-bind:supplier="supplier" v-bind:supplier_list="supplier_list"
		 v-bind:supplier_man="supplier_man" v-bind:supplier_man_list="supplier_man_list" />
		<PurchaseOrderInquirybodyC />
		<MaterialInventoryModal v-bind:ifshowmodal="ifshowmodal" v-bind:show_modal_header="show_modal_header"
		 v-bind:show_modal_body="show_modal_body" v-bind:show_modal_from="show_modal_from" v-if="MaterialInventoryModal_show" />
		 <alertModal v-bind:alert_modal="alert_modal" v-if="alertModal_show"/>
	</view>
</template>

<script>
	import PurchaseOrderInquirybodyA from "../components/PurchaseOrderInquirybodyA/PurchaseOrderInquirybodyA.vue"
	import PurchaseOrderInquirybodyB from "../components/PurchaseOrderInquirybodyB/PurchaseOrderInquirybodyB.vue"
	import PurchaseOrderInquirybodyC from "../components/PurchaseOrderInquirybodyC/PurchaseOrderInquirybodyC.vue"
	import MaterialInventoryModal from "../components/MaterialInventoryModal/MaterialInventoryModal.vue"
	import alertModal from "../components/alertModal/alertModal.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {

		components: {
			PurchaseOrderInquirybodyA,
			PurchaseOrderInquirybodyB,
			PurchaseOrderInquirybodyC,
			MaterialInventoryModal,
			alertModal
		},

		data() {
			return {
				order_text: '订单号',
				order_text_list: '432424242',
				order_time: '采购日期',
				order_time_list: '2039-30-21',
				supplier: '供应商',
				supplier_list: '下啊发啊公司',
				supplier_man: '采购员',
				supplier_man_list: '我怎么知道',
				MaterialInventoryModal_show: false,
				show_modal_header: '物料清点',
				show_modal_body: '',
				show_modal_from: "ItemInventory",
				alert_modal:'这是alert_modal内容',
				alertModal_show:false

			};
		},
		// computed: mapState(['connect_url']),
		computed: {},

		methods: {


		},
		onLoad() {
			// this.MacInfo();

		}
	}
</script>

<style>
</style>
