<template>
  <div class="book_name">
    <div class="face">
      <img :src="data.image" alt="" />
    </div>
    <div class="name" :title="data.name">{{ data.name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const data = defineProps({
  image: String,
  name: String
})
</script>

<style lang="less" scoped>
.book_name {
  transition: all 0.1s linear;
  height: 170px;
  width: 103px;
  .face {
    width: 100%;
    height: 145px;
    cursor: pointer;
    img {
      width: 100%;
      height: 145px;
      border-radius: 3px;
    }
  }
  .name {
    height: 25px;
    width: 100%;
    line-height: 25px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
  }
  .name:hover {
    color: #ff0000;
  }
}
.book_name:hover {
  // box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
  transform: scale(1.1);
}
</style>
