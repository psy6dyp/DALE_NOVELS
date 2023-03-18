<template>
  <div class="editor_best">
    <div class="title">{{ t('homeMain.editorBest') }}</div>
    <div class="list">
      <book-name
        v-for="(item, index) in props.data"
        :image="item.image"
        :key="index"
        :name="item.name"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBook } from '../../type'
import BookName from '../common/BookName.vue'
import { useI18n } from 'vue-i18n'
import { PropType, defineProps } from 'vue'
const { t } = useI18n()
const props = defineProps({
  data: {
    type: Array as PropType<IBook[]>
  }
})
</script>

<style lang="less" scoped>
.editor_best {
  width: 100%;
  height: 320px;
  padding: 50px 78px;
  box-sizing: border-box;
  .title {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #666;
  }
  .list {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
