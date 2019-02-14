<template>
	<div class="choose_language">
		<button @tap="bindChoLan('zh-CN')">中文</button>
		<button @tap="bindChoLan('en')">English</button>
		<button @tap="bindChoLan('zh-TW')">繁體</button>
	</div>

</template>

<script>
	export default {
		methods: {
			bindChoLan(language) {
				console.log(this.$i18n.locale)
				this.$i18n.locale = language
				uni.navigateTo({
					url: '../mylogin/mylogin'
				});
			}
		},
		onLoad() {

		}
	}
</script>

<style>
	.choose_language {
		display: flex;
		height: 200upx;
		justify-content: center;
		width: 100%;
		align-items: center;

	}

	.choose_language button {}
</style>
