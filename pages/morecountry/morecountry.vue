<template>
  <view class="uni-content">
    <text>{{ i18n.invite }}</text>
    <text>{{ i18n.game }}</text>
  </view>
</template>

<script>
export default {
  computed: {
    i18n () {
      return this.$t('index')
    }
  }
}
</script>

<style>
</style>