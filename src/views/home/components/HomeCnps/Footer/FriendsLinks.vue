<template>
  <div class="friends_links">
    <div class="title">{{ t('homeMain.friendsLinks') }}</div>
    <div class="links">
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">排行榜</el-link>
      <el-link :underline="false">联系</el-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="less" scoped>
.friends_links {
  width: 100%;
  height: 230px;
  padding: 50px 78px;
  box-sizing: border-box;
  .title {
    height: 30px;
    width: 100%;
    color: #999;
    line-height: 30px;
    font-size: 18px;
  }
  .links {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .el-link {
      margin-right: 50px;
      color: #666;
      font-size: 12px;
    }
  }
}
</style>
