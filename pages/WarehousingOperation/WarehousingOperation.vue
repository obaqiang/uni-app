<template>
	<view>
		<image class="stock_in_bg" :src="stock_in_bg"></image>
		<view class="warehousingopration_bl" v-if="text_a_list!=''">
			<text class="warehousingopration_bl_text">{{text_a}}</text>
			<view class="warehousingopration_bl_bl" v-for="item in text_a_list" @tap="gotoPage(item.permissionCode)">
				<image v-if="item.permissionCode=='Pages.WPDA.Instock.Receipt.Po'" class="stock_in_sendpro_order" :src="stock_in_sendpro_order"
				 mode=""></image>
				<image v-if="item.permissionCode=='Pages.WPDA.Instock.Receipt.Asn'" class="stock_in_sendpro_order" :src="stock_in_buy_order"
				 mode=""></image>
				<image v-if="item.permissionCode=='Pages.WPDA.Instock.Receipt.OutSourcePo'" class="stock_in_sendpro_order" :src="stock_in_buy_order"
				 mode=""></image>
				<text>{{item.permissionName}}</text>
			</view>
			<!-- <view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_buy_order" mode=""></image>
				<text>采购单</text>
			</view>
			<view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_buy_order" mode=""></image>
				<text>采购单</text>
			</view> -->
		</view>
		<view class="warehousingopration_bl" v-if="text_b_list!=''">
			<text class="warehousingopration_bl_text">{{text_b}}</text>
			<view class="warehousingopration_bl_bl" v-for="item in text_b_list">
				<image class="stock_in_sendpro_order" :src="stock_in_pro_come_in" mode=""></image>
				<text>来料入库</text>
			</view>
			<view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_check" mode=""></image>
				<text>产成品入库</text>
			</view>
			<view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_create_order" mode=""></image>
				<text>产成品入库</text>
			</view>
			<view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_other_check" mode=""></image>
				<text>其他入库</text>
			</view>
			<view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_other_create_order" mode=""></image>
				<text>其他入库</text>
			</view>
		</view>
		<view class="warehousingopration_bl" v-if="text_c_list!=''">
			<text class="warehousingopration_bl_text">{{text_c}}</text>
			<view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_out_return" mode=""></image>
				<text>意外退料</text>
			</view>
			<view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_produce_return" mode=""></image>
				<text>生产退料</text>
			</view>
			<view class="warehousingopration_bl_bl">
				<image class="stock_in_sendpro_order" :src="stock_in_sale_return" mode=""></image>
				<text>销售退货</text>
			</view>
		</view>
	</view>
</template>

<script>
	// import DetailsOfDocumentsHead from "../components/DetailsOfDocumentsHead/DetailsOfDocumentsHead.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: {

		},

		data() {
			return {
				stock_in_bg: "../../static/img/stock_in_bg.png",
				stock_in_buy_order: "../../static/img/stock_in_buy_order.png",
				stock_in_sendpro_order: "../../static/img/stock_in_sendpro_order.png",
				stock_in_check: "../../static/img/stock_in_check.png",
				stock_in_create_order: "../../static/img/stock_in_check.png",
				stock_in_other_check: "../../static/img/stock_in_other_check.png",
				stock_in_other_create_order: "../../static/img/stock_in_other_create_order.png",
				stock_in_out_return: "../../static/img/stock_in_out_return.png",
				stock_in_pro_come_in: "../../static/img/stock_in_pro_come_in.png",
				stock_in_produce_return: "../../static/img/stock_in_produce_return.png",
				stock_in_sale_return: "../../static/img/stock_in_sale_return.png",
				childPermissions: '',
				childPermissions_child: '',
				text_a: '',
				text_b: '',
				text_c: '',
				text_a_list: '',
				text_b_list: '',
				text_c_list: ''
			};
		},
		// computed: mapState(['connect_url']),
		computed: {},

		methods: {
			gotoPage(page_name) {
				let that = this
				console.log(page_name)
				switch (page_name) {
					case 'Pages.WPDA.Instock.Receipt.Po':
						uni.navigateTo({
							url: '../IncomingStorage/IncomingStorage'
						});
						break;
					default:
				}
			}
		},
		onLoad() {
			let that = this
			that.childPermissions = uni.getStorageSync('childPermissions')
			console.log(that.childPermissions)
			for (let i = 0; i < that.childPermissions.length; i++) {
				if (that.childPermissions[i].permissionCode == 'Pages.WPDA.InStock') {
					that.childPermissions_child = that.childPermissions[i].childPermissions
				}
			}
			for (let i = 0; i < that.childPermissions_child.length; i++) {
				if (that.childPermissions_child[i].permissionCode == 'Pages.WPDA.Instock.Receipt') {
					that.text_a = that.childPermissions_child[i].permissionName
					that.text_a_list = that.childPermissions_child[i].childPermissions
				} else if (that.childPermissions_child[i].permissionCode == 'Pages.WPDA.Instock.Storage') {
					that.text_b = that.childPermissions_child[i].permissionName
					that.text_b_list = that.childPermissions_child[i].childPermissions
				} else if (that.childPermissions_child[i].permissionCode == 'Pages.WPDA.Instock.ReturnMaterial') {
					that.text_c = that.childPermissions_child[i].permissionName
					that.text_c_list = that.childPermissions_child[i].childPermissions
				}
			}

		}
	}
</script>

<style>
	page {
		background: #f2f2f2;
	}

	.stock_in_bg {
		width: 750upx;
		height: 350upx;
	}

	.stock_in_sendpro_order {
		width: 100upx;
		height: 100upx;
	}

	.warehousingopration_bl {
		background: #FFFFFF;
		border-radius: 10upx;
		width: 700upx;
		margin: 50upx auto;
		padding-bottom: 20upx;
		padding-top: 100upx;
		border: 1px solid #FFB700;
		position: relative;
		overflow: hidden;
	}

	.warehousingopration_bl_bl {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 233upx;
		float: left;
		margin-bottom: 50upx;

	}

	.warehousingopration_bl_text {
		background: #FFB700;
		position: absolute;
		top: 0;
		left: 50upx;
		border-radius: 10upx;
		padding: 5upx 20upx;
	}
</style>
