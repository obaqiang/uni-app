<template>
	<view>
		<image class="homebanner" :src="home_banner"></image>
		<!-- <image class="scan" :src="scanscan" @tap="scanCode"></image> -->
		<view class="head_list_area">
			<view class="head_list">
				{{ i18n.today_in }}
				<image class="banner_icon" :src="home_today_in_stock"></image>
			</view>
			<view class="head_list">
				{{ i18n.today_out }}
				<image class="banner_icon" :src="home_today_out_stock"></image>
			</view>
		</view>

		<view class="head_list_area">
			<view class="head_list">
				<text class="head_list_text">2</text>笔
			</view>
			<view class="head_list">
				<text class="head_list_text">2</text>笔
			</view>
		</view>

		<view class="module_area">
			<view class="module_list">
				<image class="module_list_icon" :src="home_in_stock"></image>
				<text>入库作业</text>
			</view>
			<view class="module_list">
				<image class="module_list_icon" :src="home_out_stock"></image>
				<text>入库作业</text>
			</view>
			<view class="module_list">
				<image class="module_list_icon" :src="home_stock_in_work"></image>
				<text>入库作业</text>
			</view>
			<view class="module_list">
				<image class="module_list_icon" :src="home_quality"></image>
				<text>入库作业</text>
			</view>
			<view class="module_list">
				<image class="module_list_icon" :src="home_query"></image>
				<text>综合查询</text>
			</view>

		</view>


		<showModal v-if="ifshowmodal" v-bind:ifshowmodal="ifshowmodal" v-bind:show_modal_header="show_modal_header"
		 v-bind:show_modal_body="show_modal_body" v-on:success="success()" />
	</view>
</template>

<script>
	import {} from 'vuex'
	import showModal from "../components/showModal/showModal.vue"
	export default {
		components: {
			showModal
		},

		data() {
			return {
				home_banner: "../../static/img/home_banner.png",
				scanscan: "../../static/img/scanscan.png",
				home_today_in_stock: "../../static/img/home_today_in_stock.png",
				home_today_out_stock: "../../static/img/home_today_out_stock.png",
				home_in_stock: "../../static/img/home_in_stock.png",
				home_out_stock: "../../static/img/home_out_stock.png",
				home_stock_in_work: "../../static/img/home_stock_in_work.png",
				home_quality: "../../static/img/home_quality.png",
				home_query: "../../static/img/home_query.png",
				ifshowmodal: false,
				show_modal_header: '这是header',
				show_modal_body: '这是body'
			};
		},
		onNavigationBarButtonTap() {
			uni.scanCode({
				success: function(res) {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
				}
			});
		},
		computed: {
			i18n() {
				return this.$t('homepage')
			}
		},

		methods: {
			scanCode() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			success() {
				this.ifshowmodal = !this.ifshowmodal
			},
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.homepage_title
			});
			uni.setTabBarItem({
				index: 0,
				text: this.i18n.homepage_bar_a,
			})
			uni.setTabBarItem({
				index: 1,
				text: this.i18n.homepage_bar_b,
			})
			console.log(this.i18n.homepage_title)
			// 			uni.showModal({
			// 				title: '提示',
			// 				content: '这是一个模态弹窗',
			// 				success: function(res) {
			// 					if (res.confirm) {
			// 						console.log('用户点击确定');
			// 					} else if (res.cancel) {
			// 						console.log('用户点击取消');
			// 					}
			// 				}
			// 			});
			// this.MacInfo();

		}
	}
</script>

<style>
	.homebanner {
		width: 750upx;
		height: 300upx;
	}

	.banner_icon {
		width: 30upx;
		height: 30upx;
	}

	.head_list_area {
		display: flex;
		width: 750upx;
		border-bottom: 1px solid #DDDDDD;

	}

	.head_list {
		width: 50%;
		justify-content: center;
		display: flex;
		align-items: center;
		height: 70upx;
	}

	.head_list:nth-child(1) {
		border-right: 1px solid #DDDDDD;

	}

	.head_list_text {
		color: #ff7200;
		font-size: 50upx;
	}

	.module_list_icon {
		width: 100upx;
		height: 100upx;
		margin-bottom: 20upx;
	}

	.module_area {}

	.module_list {
		width: 50%;
		height: 200upx;
		float: left;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.scan {
		position: fixed;
		top: 20upx;
		z-index: 1001;
		right: 20upx;
		width: 50upx;
		height: 50upx;
	}
</style>
