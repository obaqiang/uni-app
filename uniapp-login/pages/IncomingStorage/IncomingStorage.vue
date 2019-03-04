<template>
	<view>
		<WarehousingInformation/>
		<Materialnformation/>
	</view>
</template>

<script>
	import {} from 'vuex'
	import WarehousingInformation from "../components/WarehousingInformation/WarehousingInformation.vue"
	import Materialnformation from "../components/Materialnformation/Materialnformation.vue"
	export default {
		components: {
			WarehousingInformation,
			Materialnformation
		},
	
		data() {
			return {
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
