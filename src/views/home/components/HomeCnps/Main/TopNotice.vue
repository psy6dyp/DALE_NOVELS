<template>
  <div class="top_notice">
    <div class="top">
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
      <div class="search">
        <el-input
          v-model="word"
          class="w-50 m-2"
          size="large"
          :placeholder="t('homeMain.searchPlh')"
        >
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
      <div class="links">
        <el-link type="primary" :underline="false">{{ t('homeMain.boyNovel') }}</el-link>
        <el-divider direction="vertical" />
        <el-link type="warning" :underline="false">{{ t('homeMain.moreNovel') }}</el-link>
        <el-divider direction="vertical" />
        <el-link type="danger" :underline="false">{{ t('homeMain.girlNovel') }}</el-link>
      </div>
    </div>
    <div class="notice">
      <div class="bg">
        <img src="@/assets/images/home/bg.jpeg" alt="" />
      </div>
      <div class="not">
        <div class="not_header">
          <span class="divider"></span>
          <span class="not_header_text">公告</span>
        </div>
        <div class="not_main">
          <el-link
            v-for="(item, index) in notices"
            :key="index"
            style="
               {
                vertical-align: 'middle';
              }
            "
            :underline="false"
          >
            <span class="divider_radius"></span>
            <span class="not_link_text">{{ item.title }}</span>
          </el-link>
        </div>
        <div class="not_more">
          <el-link style="font-size: 12px" :underline="false">更多 ></el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const word = ref('')
const notices = ref([
  {
    title: '必须严惩！通州警方再次抓获1必须严惩！通州警方再次抓获1必须严惩！通州警方再次抓获1'
  },
  {
    title: '重拳出击！严厉打击侵权行为'
  },
  {
    title: '关于成就系统与积分系统'
  },
  {
    title: '关于成就系统与积分系统'
  }
])
</script>

<style lang="less" scoped>
.top_notice {
  width: 100%;
  .top {
    height: 50px;
    padding: 26px 78px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      cursor: pointer;
      img {
        height: 50px;
        width: auto;
      }
    }
    .search {
      width: 500px;
    }
    .links {
      .el-divider--vertical {
        border-left: 2px solid #ccc;
      }
      .el-link {
        font-size: 19px;
        font-weight: bold;
      }
    }
  }
  .notice {
    margin: 40px auto;
    padding: 0 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 208px;
    .bg {
      height: 100%;
      overflow: hidden;
      border-radius: 3px;
      img {
        height: 100%;
      }
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
      }
    }
  }
}
</style>
