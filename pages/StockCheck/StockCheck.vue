<template>
	<view>
		<SearchTitle />
		<StockCheckNav />
		<StockCheckList />
	</view>

</template>

<script>
	import {} from 'vuex'
	import SearchTitle from "../components/SearchTitle/SearchTitle.vue"
	import StockCheckNav from "../components/StockCheckNav/StockCheckNav.vue"
	import StockCheckList from "../components/StockCheckList/StockCheckList.vue"
	export default {
		components: {
			SearchTitle,
			StockCheckNav,
			StockCheckList
		},

		data() {
			return {};
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
