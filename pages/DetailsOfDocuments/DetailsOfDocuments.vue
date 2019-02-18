<template>
	<view>
		<DetailsOfDocumentsHead />
		<DetailsOfDocumentsBody />
	</view>
</template>

<script>
	import DetailsOfDocumentsHead from "../components/DetailsOfDocumentsHead/DetailsOfDocumentsHead.vue"
	import DetailsOfDocumentsBody from "../components/DetailsOfDocumentsBody/DetailsOfDocumentsBody.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {
			DetailsOfDocumentsHead,
			DetailsOfDocumentsBody
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
			// this.MacInfo();

		}
	}
</script>

<style>
	page {
		background: #f2f2f2;
	}
</style>
