<template>
	<view>
		蓝牙打印机
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {

		},

		data() {
			return {

			};
		},
		// computed: mapState(['connect_url']),
		computed: {

		},

		methods: {


		},
		onLoad() {
			uni.openBluetoothAdapter({
				success(res) {
					console.log(JSON.stringify(res))
				}
			})

		}
	}
</script>

<style>

</style>
