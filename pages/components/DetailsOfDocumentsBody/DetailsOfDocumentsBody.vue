<template>
	<view class="DetailsOfDocumentsBody_body_area">
		<view class="DetailsOfDocumentsBody_body_text">已入库上架</view>
		<view class="DetailsOfDocumentsBody_body_bl">
			<view  class="DetailsOfDocumentsBody_body_bl_a">
				<text>1</text>
				<text>十九分零四 大家</text>
				<text>dffsffs</text>
			</view>
			<view  class="DetailsOfDocumentsBody_body_bl_b">
				<text>待点数</text>
				<text>数量</text>
				<text>物料编码</text>
			</view>
			<view  class="DetailsOfDocumentsBody_body_bl_b">
				<text>待点数</text>
				<text>数量</text>
				<text>物料编码</text>
			</view>
		</view>
		
		<view class="DetailsOfDocumentsBody_body_bl">
			<view  class="DetailsOfDocumentsBody_body_bl_a">
				<text>1</text>
				<text>十九分零四 大家</text>
				<text>dffsffs</text>
			</view>
			<view  class="DetailsOfDocumentsBody_body_bl_b">
				<text>待点数</text>
				<text>数量</text>
				<text>物料编码</text>
			</view>
			<view  class="DetailsOfDocumentsBody_body_bl_b">
				<text>待点数</text>
				<text>数量</text>
				<text>物料编码</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},

		data() {
			return {

			};
		},
		computed: {},

		methods: {
	

		},
		onLoad() {
			// this.MacInfo();

		}
	}
</script>

<style>
.DetailsOfDocumentsBody_body_area_body_area{
	padding: 50upx;
}
.DetailsOfDocumentsBody_body_area_body_bl{
	background: #ffffff;
}
.DetailsOfDocumentsBody_body_text{
	padding: 20upx 30upx;

}
.DetailsOfDocumentsBody_body_bl{
	background: #FFFFFF;
	border-radius: 10upx;
	margin: auto;
	width: 700upx;
	margin-bottom: 20upx;
}
.DetailsOfDocumentsBody_body_bl_a{
	background: #fff6e3;
	display: flex;
	align-items: center;
	height: 70upx;
}
.DetailsOfDocumentsBody_body_bl_a text:nth-child(1){
	width: 15%;
	text-align: center;
}
.DetailsOfDocumentsBody_body_bl_a text:nth-child(2){
	width: 70%;
	text-align: left;
}
.DetailsOfDocumentsBody_body_bl_a text:nth-child(3){
	width: 15%;
	text-align: center;
}
.DetailsOfDocumentsBody_body_bl_b{
	display: flex;
	align-items: center;
	height: 100upx;
	justify-content: space-around;
	border-bottom: 1px solid #DDDDDD;
}
</style>
