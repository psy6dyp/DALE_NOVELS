<template>
  <div class="novel">
    <header>
      <h1>{{ '< ' + title + ' >' }}</h1>
    </header>
    <div class="container">
      <p v-if="isBuy">
        {{ content }}
      </p>
      <p v-else class="unlock">
        <el-button v-if="isNovelHas" type="primary" @click="unlock">{{
          t('common.unlock')
        }}</el-button>
        <template v-else> 错误地址！ </template>
      </p>
    </div>
    <footer class="footer">
      <p>&copy; 2023 小说版权所有</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import { ref } from 'vue'
import { useStore } from '@/store/homeStore'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const unlock = () => {
  if (address.fromAddress === '') {
    ElMessage.error(t('home.plzLogin'))
  } else {
    address.sendTransaction({ value: price.value, novel: route.params.id }, () => {
      ElMessage.success(t('transaction.success'))
    })
  }
}
const content = ref('')
const title = ref('')
const price = ref('')
const isNovelHas = ref(true)
const getNovel = (id: any) => {
  axios
    .post('http://167.235.58.236:3000/novel', {
      data: {
        id
      }
    })
    .then((res) => {
      if (res.data.code === 1 && res.data.data) {
        content.value = res.data.data.content
        title.value = res.data.data.title
        price.value = String(res.data.data.price)
      } else {
        isNovelHas.value = false
      }
    })
}
const route = useRoute()
const { address } = useStore()
getNovel(route.params.id)
const isBuy = ref(address.getLocalCache(route.params.id))
if (!isBuy.value) {
  axios
    .post('http://167.235.58.236:3000/order', {
      data: {
        custom: address.fromAddress,
        novel: route.params.id
      }
    })
    .then((res) => {
      if (res.data.code === 1 && res.data.data) {
        getNovel(route.params.id)
        address.getAllBuy(address.fromAddress)
        isBuy.value = true
        console.log('buy')
      } else {
        console.log('none')
      }
    })
}
</script>

<style lang="less" scoped>
.novel {
  width: 100%;
  padding: 0 78px;
  box-sizing: border-box;
  header {
    // background-color: #04aa6d;
    padding: 20px;
    background-color: #fff;
    border-bottom: 1px solid #999;
    color: #000;
    h1 {
      margin: 0;
      font-size: 36px;
      // color: white;
      text-align: center;
      // text-shadow: 2px 2px #222222;
    }
  }
  .container {
    margin: 50px auto;
    padding: 20px;
    background-color: #f8f3cd;
    box-shadow: 0 0 10px #888888;
    border-radius: 5px;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    h2 {
      font-size: 24px;
      margin: 20px 0 10px 0;
    }
    p {
      font-size: 24px;
      line-height: 2.7;
      margin-bottom: 20px;
      text-indent: 2em;
      letter-spacing: 0.3em;
    }
    .unlock {
      display: flex;
      height: 500px;
      justify-content: center;
      align-items: center;
    }
    ul {
      list-style-position: inside;
    }
    li {
      margin-bottom: 10px;
    }
    .image {
      text-align: center;
      margin: 20px 0;
    }
    img {
      max-width: 100%;
      height: auto;
      border: 3px solid #777;
      box-shadow: 0 0 8px #888888;
    }
  }
  .footer {
    background-color: #222222;
    color: #999;
    text-align: center;
    padding: 10px;
    margin-top: 50px;
  }
}
</style>
