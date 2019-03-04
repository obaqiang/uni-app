<template>
	<!-- <div class="choose_language">
		<button @tap="bindChoLan('zh-CN')">中文</button>
		<button @tap="bindChoLan('en')">English</button>
		<button @tap="bindChoLan('zh-TW')">繁體</button>
	</div> -->
	<view>
		<view class="user_info_list">
			<text>设备语言:</text>
			<picker @change="bindPickerChange" :value="index" :range="array" class="organize_picker">
				<view class="uni-input">{{array[index]}}</view>
			</picker>
		</view>
		<view class="common_btn_bot_fb" style="margin-top: 200upx;" @tap="gotoLogin">确认设置</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				array: ['中文', 'English', '繁體'],
				index: 0,
			};
		},
		methods: {
			bindPickerChange(e) {
				console.log(e.detail.value)
				this.index = e.target.value
				if (e.detail.value == 0) {
					this.$i18n.locale = 'zh-CN'
				} else if (e.detail.value == 1) {
					this.$i18n.locale = 'en'
				} else {
					this.$i18n.locale = 'zh-TW'
				}
			},
			gotoLogin(){
				console.log(this.$i18n.locale )
				uni.navigateTo({
					url: '../mylogin/mylogin'
				});
			}
			// 			bindChoLan(language) {
			// 				console.log(this.$i18n.locale)
			// 				this.$i18n.locale = language
			// 				uni.navigateTo({
			// 					url: '../mylogin/mylogin'
			// 				});
			// 			}
		},
		onLoad() {

		}
	}
</script>

<style>
	/* .choose_language {
		display: flex;
		height: 200upx;
		justify-content: center;
		width: 100%;
		align-items: center;

	}

	.choose_language button {} */
	page {
		background: #E7E7E7;
	}

	.user_info_list {
		border: 1px solid #666666;
		width: 700upx;
		margin: 20upx 25upx;
		display: flex;
		align-items: center;
		height: 72upx;
	}

	.user_info_list text {
		margin-left: 30upx;
	}

	.user_info_list input {
		margin-left: 30upx;
	}

	.organize_picker {
		width: 500upx !important;
	}

	.organize_picker .uni-input {
		background: none;
	}
</style>
