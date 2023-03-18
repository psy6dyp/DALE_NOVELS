<template>
  <div class="home_footer">
    <footer-links />
    <friends-links />
    <footer-detail />
  </div>
</template>

<script lang="ts" setup>
import FooterLinks from './HomeCnps/Footer/FooterLinks.vue'
import FriendsLinks from './HomeCnps/Footer/FriendsLinks.vue'
import FooterDetail from './HomeCnps/Footer/FooterDetail.vue'
</script>

<style lang="less" scoped>
.home_footer {
  width: 100%;
  min-height: 200px;
  margin-top: 20px;
}
</style>
