<template>
  <div class="home_header">
    <el-dialog v-model="dialogVisible" :title="t('home.exitLogin')" width="30%">
      <span>{{ t('home.confirmExit') }}</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">{{ t('common.cancel') }}</el-button>
          <el-button type="primary" @click="logout">
            {{ t('common.confirm') }}
          </el-button>
        </span>
      </template>
    </el-dialog>
    <button
      @click="
        address.sendTransaction(() => {
          ElMessage.success(t('transaction.success'))
        })
      "
    >
      试试看1个lat的交易
    </button>
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <el-menu-item index="0"
        ><span v-if="!isLogin" style="color: red" @click="login">{{ t('home.plzLogin') }}</span
        ><span v-else style="color: #409eff" @click="dialogVisible = true">{{
          t('home.welcomeUser') + ' ' + address.fromAddress
        }}</span></el-menu-item
      >
      <div class="flex-grow" />
      <el-menu-item index="1">{{ t('home.novels') }}</el-menu-item>
      <!-- <el-menu-item index="2">{{ t('home.collections') }}</el-menu-item> -->
      <el-sub-menu index="3">
        <template #title>{{ t('home.language') }}</template>
        <el-menu-item
          index="3-1"
          :style="{
            color: locale === 'zh' ? '#409eff' : ''
          }"
          @click="language.setCurLocal('zh')"
          >{{ locale === 'zh' ? '中文 (当前)' : 'ZH (Chinese)' }}</el-menu-item
        >
        <el-menu-item
          index="3-2"
          :style="{
            color: locale === 'en' ? '#409eff' : ''
          }"
          @click="language.setCurLocal('en')"
          >{{ locale === 'en' ? 'English (curent)' : 'EN (English)' }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
    <div class="top">
      <div class="logo" @click="router.push('/')"><img src="@/assets/logo.png" alt="" /></div>
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
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import router from '@/router'
import { useStore } from 'store/homeStore'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const { address, language } = useStore()

const word = ref('')
const dialogVisible = ref(false)
const isLogin = ref(true)
const login = async () => {
  await address.getFromAddress(() => {
    isLogin.value = true
  })
  ElMessage.success(t('common.loginMessage'))
}
const logout = () => {
  address.logoutMetamask(() => {
    window.location.reload
    dialogVisible.value = false
    isLogin.value = false
    ElMessage.success(t('common.logoutMessage'))
  })
}
onMounted(() => {
  isLogin.value = address.fromAddress === '' ? false : true
})
</script>

<style lang="less" scoped>
.home_header {
  width: 100%;
  .el-menu--horizontal {
    // border-bottom: none;
  }
  .el-menu-demo {
    padding: 0 78px;
    // background-color: transparent;
    .el-menu-item {
      font-size: 16px;
    }
  }
  .flex-grow {
    flex-grow: 1;
  }
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
}
</style>
