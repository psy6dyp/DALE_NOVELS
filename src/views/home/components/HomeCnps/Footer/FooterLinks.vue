<template>
  <div class="footer_links">
    <el-link :underline="false">排行榜</el-link>
    <el-link :underline="false">联系</el-link>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.footer_links {
  height: 50px;
  width: 100%;
  padding: 0 78px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .el-link {
    margin-right: 50px;
  }
}
</style>
