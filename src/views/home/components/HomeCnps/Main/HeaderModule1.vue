<template>
  <div class="header_module" @click="router.push('/novel')">
    <div class="header_face">
      <img :src="data.headerImage" alt="" />
    </div>
    <div class="header_content">
      <div class="title">{{ data.headerTitle }}</div>
      <div class="tags">
        <el-tag v-for="(item, index) in data.headerTags" :key="index" style="margin-right: 10px">{{
          item
        }}</el-tag>
      </div>
      <div class="content">{{ data.headerContent }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
const data = {
  headerImage: 'https://img.zcool.cn/community/0106505e85458fa80120a895de0087.jpg@2o.jpg',
  headerTitle: '杨老板卧底摸鱼群，被我气疯了',
  headerTags: ['独家', '连载'],
  headerContent:
    '当我们开始在感情方面投资自己时，我们不可避免地面临各种挑战。但是，尽管这可能是艰难的旅程，但在我们的成长和发展中，情感投资是一个至关重要的方面。'
}
</script>

<style lang="less" scoped>
.header_module {
  width: 100%;
  height: 100%;
  display: flex;
  // justify-content: space-between;
  justify-content: flex-start;
  .header_face {
    height: 190px;
    transition: all 0.2s linear;
    width: 136px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header_face:hover {
    box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
    transform: scale(1.02);
  }
  .header_content {
    cursor: pointer;
    height: 190px;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 20px;
    .title {
      width: 100%;
      height: 40px;
      font-size: 24px;
    }
    .tags {
      height: 24px;
      width: 100%;
    }
    .content {
      text-indent: 2em;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      // white-space: nowrap;
      padding: 10px 0;
    }
  }
}
</style>
