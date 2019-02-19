<template>
	<view>
		<SwitchTitle v-bind:switchtitletext="switchtitletext"/>
		<bgLine />
		<DetailsOfRejectionOrdersPurchaseList/>
	</view>
</template>

<script>
	import bgLine from "../components/bgLine/bgLine.vue"
	import SwitchTitle from "../components/SwitchTitle/SwitchTitle.vue"
	import DetailsOfRejectionOrdersPurchaseList from "../components/DetailsOfRejectionOrdersPurchaseList/DetailsOfRejectionOrdersPurchaseList.vue"
	export default {
		components: {
			bgLine,
			SwitchTitle,
			DetailsOfRejectionOrdersPurchaseList
		},

		data() {
			return {
				switchtitletext:'退料单信息详情'
			};
		},
		computed: {},

		methods: {
			switch1Change: function(e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},

		},
		onLoad() {
			// this.MacInfo();

		}
	}
</script>

<style scoped="scoped">
	.DetailsOfDocumentsHead_head_area {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 750upx;
		align-items: center;
		height: 80upx;
		background: #FFFFFF;
	}


	.head_right_text {
		margin-right: 10upx;
	}

	.DetailsOfDocumentsHead_head_text {
		margin-left: 10upx;
	}
</style>
