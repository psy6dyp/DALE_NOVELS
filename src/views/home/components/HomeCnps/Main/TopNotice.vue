<template>
  <el-row class="top">
    <el-col :span="16" class="bg" @click="router.push('/novelEth/1')">点击收费测试</el-col>
    <el-col :span="6" :offset="2" @click="router.push('/novelEth/2')">
      <div class="not">
        <div class="not_header">
          <span class="divider"></span>
          <span class="not_header_text">{{ t('homeMain.notice') }} 点击收费测试</span>
        </div>
        <div class="not_main">
          <el-link
            v-for="(item, index) in notices"
            :key="index"
            style="
               {
                vertical-align: 'middle,
              }
            "
            :underline="false"
          >
            <span class="divider_radius"></span>
            <span class="not_link_text">{{ item.title }}</span>
          </el-link>
        </div>
        <div class="not_more">
          <el-link :underline="false">{{ t('homeMain.more') }} ></el-link>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '@/router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const notices = ref([
  {
    title: '重拳出击！严厉打击侵权行为'
  },
  {
    title: '重拳出击！严厉打击侵权行为'
  },
  {
    title: '重拳出击！严厉打击侵权行为'
  },
  {
    title: '重拳出击！严厉打击侵权行为'
  }
])
</script>

<style lang="less" scoped>
.top {
  box-sizing: border-box;
  padding: 0 78px;
}
.bg {
  height: 260px;
  font-size: 50px;
  color: red;
  text-align: center;
  overflow: hidden;
  border-radius: 3px;
  transition: all 0.2s linear;
  background-image: url('https://img2.baidu.com/it/u=896804078,1875238221&fm=253&fmt=auto&app=138&f=JPEG?w=769&h=500');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.2s linear;
  cursor: pointer;
}
.bg:hover {
  box-shadow: 0 0 10px rgb(0 0 0 / 60%);
}
.not {
  width: 340px;
  height: 100%;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  .divider {
    display: inline-block;
    width: 4px;
    height: 18px;
    border-radius: 2px;
    background-color: #a659da;
    vertical-align: middle;
    margin-right: 5px;
  }
  .divider_radius {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #a659da;
    vertical-align: middle;
    margin-right: 5px;
  }
  .not_header_text {
    height: 24px;
    vertical-align: middle;
    display: inline-block;
    cursor: default;
  }
  .not_link_text {
    display: inline-block;
    width: 299px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .not_header {
    height: 24px;
    vertical-align: middle;
  }
  .not_main {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    .el-link {
      width: 100%;
      display: flex;
      font-size: 15px;
      justify-content: flex-start;
    }
  }
  .not_more {
    height: 24px;
    line-height: 24px;
    text-align: right;
    .el-link {
      font-size: 12px;
      color: #999;
    }
    .el-link:hover {
      color: red;
    }
  }
}
</style>
