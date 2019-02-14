<template>
	<view class="text">
		©{{ i18n.all_right_reserved }}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
		  i18n () {
		    return this.$t('copyRightIntro')
		  }
		},
	}
</script>

<style>
.text{
	color: #999999;
	font-size: 24upx;
	text-align: center;
}
</style>
