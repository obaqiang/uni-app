<template>
	<view>
		<ProcurementReclaimA/>
	</view>
</template>

<script>
	import ProcurementReclaimA from "../components/ProcurementReclaimA/ProcurementReclaimA.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
		ProcurementReclaimA
		},

		data() {
			return {
	
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
			i18n() {
				return this.$t('mylogin')
			}
		},

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
