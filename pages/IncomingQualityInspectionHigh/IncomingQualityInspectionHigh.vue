<template>
	<view>
		<AcceptanceStandard/>
		<MaterialInformation />
		<AcceptanceStandardHigh/>
		<!-- <QualityInspectionOperation/> -->
		<view class="common_bot_btn">下一步</view>
	</view>
</template>

<script>
	import AcceptanceStandard from "../components/AcceptanceStandard/AcceptanceStandard.vue"
	import MaterialInformation from "../components/MaterialInformation/MaterialInformation.vue"
	import AcceptanceStandardHigh from "../components/AcceptanceStandardHigh/AcceptanceStandardHigh.vue"
	import QualityInspectionOperation from "../components/QualityInspectionOperation/QualityInspectionOperation.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			AcceptanceStandard,
			MaterialInformation,
			QualityInspectionOperation,
			AcceptanceStandardHigh
		},

		data() {
			return {

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
page{
	background: #e7e7e7;
}
</style>
