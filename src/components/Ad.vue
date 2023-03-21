<template>
  <el-row>
    <el-col
      :span="3"
      class="a"
      :class="props.isRight ? '' : 'left'"
      :title="t('common.ad')"
      v-if="isClose"
    >
      <el-card
        shadow="hover"
        :body-style="{ padding: '0px' }"
        @click="jumpLink.jump('https://www.niftyin.xyz/')"
      >
        <div class="image">
          <div class="close" @click="isClose = false"><CircleCloseFilled /></div>
        </div>
        <div style="padding: 14px">
          <span>{{ t('common.ad') }}</span>
          <!-- <div class="bottom"> -->
          <!-- <time class="time">{{ t('common.ad') }}</time> -->
          <!-- </div> -->
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import jumpLink from 'utils/jumpLink'
import { defineProps, withDefaults, ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const { t } = useI18n()
const props = withDefaults(defineProps<{ isRight?: boolean }>(), {
  isRight: true
})
const isClose = ref(true)
</script>

<style lang="less" scoped>
.a {
  position: fixed;
  top: 40%;
  right: 10px;
  z-index: 100;
  cursor: pointer;
  transform: translateY(-50%);
  // transition: all 0.2s linear;
}
// .a:hover {
//   transform: translateY(-50%) scale(1.01);
// }
.left {
  left: 10px;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 200px;
  background-image: url('../assets/images/ad/Logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: block;
  position: relative;
  .close {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1100;
    width: 20px;
    height: 20px;
  }
}
</style>
