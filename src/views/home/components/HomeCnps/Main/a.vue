<template>
  <div class="top_notice">
    <el-row>
      <el-col :span="24">
        <div class="notice">
          <el-row>
            <el-col :span="18" class="bg">
              <!-- <div class="bg"> -->
              <!-- <img
                  src="http://img.faloo.com/hpic/2023/3/19/2a54ca3d-615e-48a2-8c44-11f953545b55.jpeg"
                  alt=""
                /> -->
              <!-- <img src="@/assets/images/home/bg.jpeg" alt="" /> -->
              <!-- </div> -->
            </el-col>
          </el-row>
          <div class="not">
            <div class="not_header">
              <span class="divider"></span>
              <span class="not_header_text">{{ t('homeMain.notice') }}</span>
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
              <el-link :underline="false">{{ t('homeMain.more') }} ></el-link>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
  .notice {
    width: 100%;
    box-sizing: border-box;
    margin: 40px auto;
    padding: 0 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 208px;
    .bg {
      height: 208px;
      // width: 100%;
      overflow: hidden;
      border-radius: 3px;
      transition: all 0.2s linear;
      background-image: url('http://img.faloo.com/hpic/2023/3/19/2a54ca3d-615e-48a2-8c44-11f953545b55.jpeg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      // img {
      //   height: 100%;
      //   width: 100%;
      //   cursor: pointer;
      // }
    }

    .bg:hover {
      box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
      transform: scale(1.01);
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
        .el-link {
          font-size: 12px;
          color: #999;
        }
        .el-link:hover {
          color: red;
        }
      }
    }
  }
}
</style>
