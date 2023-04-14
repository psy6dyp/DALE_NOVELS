<template>
  <el-row>
    <el-col
      :span="3"
      class="a"
      :class="props.isRight ? '' : 'left'"
      :title="imgList[imgType].des"
      v-if="isClose"
    >
      <el-card
        class="card"
        shadow="hover"
        :body-style="{ padding: '0px' }"
        @click="jumpLink.jump(imgList[imgType].url)"
      >
        <div class="image" :style="{ backgroundImage: 'url(' + imgList[imgType].img + ')' }">
          <div class="close" @click.stop="isClose = false"><CircleCloseFilled /></div>
        </div>
        <div class="card_bottom">
          {{ imgList[imgType].des }}
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
const imgList = [
  {
    url: 'https://www.niftyin.xyz/',
    img: require('@/assets/images/ad/niftyin.png'),
    des: t('common.ad1')
  },
  {
    url: 'https://www.platon.network/',
    img: require('@/assets/images/ad/platon.png'),
    des: t('common.ad2')
  }
]
const props = withDefaults(defineProps<{ imgType?: number; isRight?: boolean }>(), {
  isRight: true,
  imgType: 0
})
const isClose = ref(true)
</script>

<style lang="less" scoped>
.card {
  width: 100%;
}
.a {
  position: fixed;
  top: 40%;
  right: 10px;
  z-index: 100;
  cursor: pointer;
  width: 100%;
  transform: translateY(-50%);
  .card {
    width: 100%;
  }
  .card_bottom {
    padding: 14px;
    height: 100px;
    display: flex;
    align-items: center;
  }
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
