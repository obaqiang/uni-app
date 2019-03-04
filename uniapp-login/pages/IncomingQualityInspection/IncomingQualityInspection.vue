<template>
	<view>
		<MaterialInformation />
		<QualityInspectionOperation/>
		<view class="common_bot_btn">下一步</view>
	</view>
</template>

<script>
	import MaterialInformation from "../components/MaterialInformation/MaterialInformation.vue"
	import QualityInspectionOperation from "../components/QualityInspectionOperation/QualityInspectionOperation.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			MaterialInformation,
			QualityInspectionOperation
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
