<template>
	<view>
		<NoScanInput />
	</view>
</template>

<script>
	import NoScanInput from "../components/NoScanInput/NoScanInput.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {

		components: {
			NoScanInput
		},

		data() {
			return {
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
