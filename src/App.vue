<template>
  <div id="app">
    <Header />
    <Ad />
    <Ad :isRight="false" />
    <!-- <button @click="add">Connect Wallet</button> -->
    <!-- <div ref="qrcodeRef"></div> -->
    <el-row class="body" justify="center">
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import Header from 'components/Header.vue'
import Ad from 'components/Ad.vue'
// function getClientHeight() {
//   var clientHeight = 0
//   if (document.body.clientHeight && document.documentElement.clientHeight) {
//     clientHeight =
//       document.body.clientHeight < document.documentElement.clientHeight
//         ? document.body.clientHeight
//         : document.documentElement.clientHeight
//   } else {
//     clientHeight =
//       document.body.clientHeight > document.documentElement.clientHeight
//         ? document.body.clientHeight
//         : document.documentElement.clientHeight
//   }
//   return clientHeight
// }
// function getClientWidth() {
//   var clientWidth = 0
//   if (document.body.clientWidth && document.documentElement.clientWidth) {
//     clientWidth =
//       document.body.clientWidth < document.documentElement.clientWidth
//         ? document.body.clientWidth
//         : document.documentElement.clientWidth
//   } else {
//     clientWidth =
//       document.body.clientWidth > document.documentElement.clientWidth
//         ? document.body.clientWidth
//         : document.documentElement.clientWidth
//   }
//   return clientWidth
// }
// console.log(getClientHeight()) // 948
// console.log(getClientWidth()) // 1707
// import WalletConnect from '@walletconnect/client'
// import QRCodeModal from '@walletconnect/qrcode-modal'
// const qrcodeRef = ref<HTMLElement | null>(null)
// const connector = ref(
//   new WalletConnect({
//     bridge: 'https://bridge.walletconnect.org',
//     qrcodeModal: QRCodeModal
//   })
// )

// // Check if connection is already established
// // if (!connector.value.connected) {
// //   // create new session
// //   connector.value.createSession()
// // }

// // Subscribe to connection events
// connector.value.on('connect', (error, payload) => {
//   if (error) {
//     throw error
//   }

//   // Get provided accounts and chainId
//   const { accounts, chainId } = payload.params[0]
// })

// connector.value.on('session_update', (error, payload) => {
//   if (error) {
//     throw error
//   }

//   // Get updated accounts and chainId
//   const { accounts, chainId } = payload.params[0]
// })

// connector.value.on('disconnect', (error, payload) => {
//   if (error) {
//     throw error
//   }

//   // Delete connector
// })
// const add = function () {
//   // connector.value.createSession()
//   QRCodeModal.open(
//     'wc:fab70c03-ecd1-4920-8f31-3ad89490f459@1?bridge=https%3A%2F%2Fo.bridge.walletconnect.org&key=8e8f34ee5ff49c6cc7dded34e8328e012c22a7094d4e2362bb646daa6fdd25dc',
//     () => {
//       console.log('EVENT', 'QR Code Modal closed')
//     }
//   )
// }
</script>
<style lang="less" scoped>
#app {
  /* background-color: #f3f5f5; */
  // max-width: 1300px;
  width: 100%;
  min-height: 500px;
  .body {
  }
}
</style>
