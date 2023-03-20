<template>
  <div class="rank_books">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ t('homeMain.click') }}</span>
          <el-button class="button" text>{{ t('homeMain.more') }}</el-button>
        </div>
      </template>
      <div v-for="(o, i) in rank1" :key="i" class="text item">
        <template v-if="i === 0">
          <el-tag type="danger" style="margin-right: 10px">No.1</el-tag>{{ o.name }}
        </template>
        <template v-else>{{ i + 1 + '.' + o.name }} </template>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ t('homeMain.money') }}</span>
          <el-button class="button" text>{{ t('homeMain.more') }}</el-button>
        </div>
      </template>
      <div v-for="(o, i) in rank2" :key="i" class="text item">
        <template v-if="i === 0">
          <el-tag style="margin-right: 10px">No.1</el-tag>{{ o.name }}
        </template>
        <template v-else>{{ i + 1 + '.' + o.name }} </template>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ t('homeMain.collection') }}</span>
          <el-button class="button" text>{{ t('homeMain.more') }}</el-button>
        </div>
      </template>
      <div v-for="(o, i) in rank3" :key="i" class="text item">
        <template v-if="i === 0">
          <el-tag type="warning" style="margin-right: 10px">No.1</el-tag>{{ o.name }}
        </template>
        <template v-else>{{ i + 1 + '.' + o.name }} </template>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const rank1 = [
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' }
]
const rank2 = [
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' }
]
const rank3 = [
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' },
  { url: '', name: '木叶：复兴宇智波，从纳妾开始' }
]
</script>

<style lang="less" scoped>
.rank_books {
  width: 100%;
  height: 560px;
  padding: 50px 78px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .box-card {
    transition: all 0.2s linear;
    width: 324px;
    height: 458px;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        cursor: pointer;
      }
    }
    .text {
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s linear;
    }
    .text:hover {
      color: rgb(237, 108, 9);
      transform: scale(1.08) translateX(10px);
    }

    .item {
      margin-bottom: 15px;
    }
  }
  .box-card:hover {
    box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
    transform: scale(1.01);
  }
}
</style>
