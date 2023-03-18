<template>
  <div class="novel_model">
    <div class="model_top">
      <img :src="datas.titleImg" alt="" />
    </div>
    <div class="model_body">
      <div class="body_left">
        <slot name="left">
          <div class="default_books">
            <book-name
              class="bookCnp"
              v-for="(item, index) in datas.books"
              :key="index"
              :image="item.image"
              :name="item.name"
            />
          </div>
        </slot>
      </div>
      <div class="body_right">
        <slot name="right">
          <div class="default_links">
            <link-name :links="datas.links" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import type { IBook, ILink } from '../../type'
import BookName from '../common/BookName.vue'
import LinkName from '../common/LinkName.vue'

const datas = defineProps({
  titleImg: String,
  books: {
    type: Array as PropType<IBook[]>
  },
  links: {
    type: Array as PropType<ILink[]>
  }
})
</script>

<style lang="less" scoped>
.novel_model {
  background-color: #fff;
  height: 350px;
  padding: 50px 78px;
  box-sizing: border-box;
  .model_top {
    height: 50px;
    width: 100%;
    padding: 15px 0;
    img {
      height: 20px;
    }
  }
  .model_body {
    height: 200px;
    width: 100%;
    display: flex;
    .body_left {
      height: 100%;
      width: 79%;
      padding-right: 35px;
      box-sizing: border-box;
      border-right: 1px solid #ccc;
      .default_books {
        height: 200px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        .bookCnp {
          margin-right: 20px;
        }
      }
    }
    .body_right {
      height: 100%;
      width: 21%;
      .default_links {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
