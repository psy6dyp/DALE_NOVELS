<template>
  <div class="link_name">
    <div class="link_module" v-for="(item, index) in data.links" :key="index">
      <div class="link_detail">{{ item.name }}</div>
    </div>
    <div class="link_module" style="justify-content: flex-end; height: 20px; line-height: 20px">
      <div class="link_more">{{ t('homeMain.more') }} ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { ILink } from '../../type'

const { t } = useI18n()
const data = defineProps({
  links: {
    type: Array as PropType<ILink[]>
  }
  // link: String,
  // name: String
})
</script>

<style lang="less" scoped>
.link_name {
  width: 178px;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .link_module {
    width: 100%;
    height: 39px;
    display: flex;
    justify-content: space-around;
    .link_detail {
      width: 49%;
      height: 24px;
      line-height: 24px;
      cursor: pointer;
    }
    // .link_detail:nth-child(2) {
    //   text-align: right;
    //   border-left: 1px solid #ccc;
    //   box-sizing: border-box;
    // }
    .link_more {
      font-size: 12px;
      cursor: pointer;
      color: #999;
    }
    .link_detail:hover,
    .link_more:hover {
      color: #ff0000;
    }
  }
}
</style>
