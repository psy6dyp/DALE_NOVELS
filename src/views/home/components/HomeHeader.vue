<template>
  <div class="home_header">
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <el-menu-item index="0"
        ><span style="color: red">{{ t('home.plzLogin') }}</span></el-menu-item
      >
      <div class="flex-grow" />
      <el-menu-item index="1">{{ t('home.novels') }}</el-menu-item>
      <el-menu-item index="2">{{ t('home.collections') }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="less" scoped>
.home_header {
  width: 100%;
  .el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu-demo {
    padding: 0 78px;
    background-color: transparent;
    .el-menu-item {
      font-size: 16px;
    }
  }
  .flex-grow {
    flex-grow: 1;
  }
}
</style>
