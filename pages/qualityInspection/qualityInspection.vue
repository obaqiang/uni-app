<template>
	<view>
		<view class="qualityInspection_head">
			<text>状态</text>
			<text>物料编码</text>
			<text>实收</text>
			<text>送检</text>
			<text>合格</text>
			<text>质检结果</text>
		</view>
		<view class="qualityInspection_body">
			<view class="qualityInspection_body_list">
				<view class="qualityInspection_body_list_a">
					<image class="qualityInspection_body_list_a_icon" :src="quality_wait_quality"></image>
					<text>CD4324983249324</text>
					<text>500</text>
					<text>0 </text>
					<text>0</text>
					<view class="qualityInspection_body_list_a_in">
						待检
						<image class="qualityInspection_body_list_a_icon_b" :src="quality_jiantou"></image>
					</view>
				</view>
				<view class="qualityInspection_body_list_b">
					<view class="qualityInspection_body_list_b_bl">
						<text>姐姐大数据</text>
						<text>深圳弗兰克节</text>
					</view>
					<view class="qualityInspection_body_list_b_bl">
						<text>到货日期:2039-20-32</text>
						<text>到货单号:32432432432</text>
					</view>
				</view>
				
				
			</view>
		</view>
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
				quality_wait_quality: "../../static/img/quality_wait_quality.png",
				quality_jiantou:"../../static/img/quality_jiantou.png",
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
	page {
		background: #e7e7e7;
	}

	.qualityInspection_head {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 750upx;
		background: #FFFFFF;
		height: 100upx;
	}
	.qualityInspection_body_list{
		width: 720upx;
		margin: 20upx auto;
		border-radius: 10upx;
		overflow: hidden;
	}
	.qualityInspection_body_list_a{
		background: #FFFFFF;
		display: flex;
		align-items: center;
		height: 100upx;
		justify-content: space-around;
	}
	.qualityInspection_body_list_a_icon{
		width: 50upx;
		height: 50upx;
	}
	.qualityInspection_body_list_a_icon_b{
		width: 20upx;
		height: 30upx;
	}
	.qualityInspection_body_list_a_in{
		display: flex;
		align-items: center;
	}
	.qualityInspection_body_list_b{
		width: 720upx;
		display: flex;
		background: #e9f1fa;
	}
	.qualityInspection_body_list_b_bl{
		display: flex;
		flex-direction: column;
		width: 50%;
		justify-content: center;
		padding-left: 20upx;
		font-size: 22upx;
		height: 150upx;
		line-height: 50upx;
	}
</style>
