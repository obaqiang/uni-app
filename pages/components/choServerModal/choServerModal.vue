<template>
	<view>
		<view class='choServerModal_mask' @tap="closeChoServerModal"></view>
		<view class="choServerModal_server_area">
			<button v-for="(item,index) in connect_url_all" :key="index" @tap="choServer(item)">
				{{item }}
			</button>
			<view class="setlanguagearea">
				选择语言:
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
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
		props: ['showchoservermodal'],
		components: {

		},

		data() {
			return {
				array: ['中文', 'English', '繁體'],
				index: 0,
			};
		},
		computed: mapState(['connect_url_all']),
		methods: {
			...mapMutations(['changeServerUrl']),
			choServer(server_url) {

				this.changeServerUrl(server_url)
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
				if (this.index == 0) {
					this.$i18n.locale = 'zh-CN'
				} else if (this.index == 1) {
					this.$i18n.locale = 'en'
				} else if (this.index == 2) {
					this.$i18n.locale = 'zh-TW'
				}
				console.log(this.$i18n.locale)
			},
			closeChoServerModal() {
				this.$emit('success', true);
			}
		},
		onLoad() {
			// this.MacInfo();
			console.log(132)
			console.log(this.connect_url_all)

		}
	}
</script>

<style>
	.choServerModal_mask {
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}

	.choServerModal_server_area {
		position: fixed;
		width: 80%;
		left: 10%;
		z-index: 100;
		/* background: #FFFFFF; */
		top: 400upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.choServerModal_server_area button {
		margin-top: 20upx;
	}

	.setlanguagearea {
		z-index: 100;
		/* position: absolute; */
		background: #FFFFFF;
		/* line-height: 100upx; */
		align-items: center;
		margin-top: 80upx;
		width: 85%;
		border-radius: 10upx;
		display: flex;
		padding-left: 20upx;
	}

	.uni-input {
		width: 300upx;
	}
</style>
