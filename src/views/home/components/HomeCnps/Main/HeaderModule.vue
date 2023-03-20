<template>
  <div class="header_module">
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
const data = {
  headerImage: 'http://img.faloo.com/Novel/166x235/0/989/000989368.jpg',
  headerTitle: '杨老板卧底摸鱼群，被我气疯了',
  headerTags: ['独家', '连载'],
  headerContent:
    '什么味儿？是不是蜜姐，杨蜜用小号假扮员工混进自己公司的摸鱼裙。 　　进裙当天，她就被老六员工江宇的吐槽气疯了。 　　“正义都能迟到，为什么上班不行？” 　　“什么味儿？是不是蜜姐又脱鞋了？” 　　“听蜜姐唱歌，有种..为了整顿职场，杨蜜用小号假扮员工混进自己公司的摸鱼裙。 　　进裙当天，她就被老六员工江宇的吐槽气疯了。 　　“正义都能迟到，为什么上班不行？” 　　“什么味儿？是不是蜜姐又脱鞋了？” 　　“听蜜姐唱歌，有种..'
}
</script>

<style lang="less" scoped>
.header_module {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
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
