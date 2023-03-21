import { defineStore } from 'pinia'
import localCache from 'utils/localCache'
import Web3 from 'web3'
import 'element-plus/theme-chalk/el-message.css'
export const addressStore = defineStore('address', {
  state: () => {
    return {
      toAddress: '0xbFE41f565d4A0F4d36b07e82e02aD5F4Eb0Ca6A9',
      fromAddress: localCache.getItem('fromAddress') || ''
    }
  },
  actions: {
    getFromAddress(callback?: () => void) {
      if (window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then((res: any) => {
          let web3 = new Web3(window.ethereum)
          this.fromAddress = res[0] || ''
          localCache.setItem('fromAddress', this.fromAddress)
          console.log(111)
          web3.eth.getBalance(this.fromAddress, (err: any, res: any) => {
            if (!err) {
              console.log('ETH余额==', Number(res) / Math.pow(10, 18))
            }
          })
          if (callback) callback()
        })
      } else {
        alert('请安装metamask！')
      }
    },
    logoutMetamask(callback?: () => void) {
      localCache.removeItem('fromAddress')
      this.fromAddress = ''
      if (callback) callback()
    },
    sendTransaction(callback?: () => void) {
      // let web3 = new Web3(window.ethereum)
      //转账数量
      let amount = 1 * Math.pow(10, 18)
      //收款地址
      //一笔1个lat的交易
      if (this.fromAddress !== '' && localCache.getItem('fromAddress') !== '') {
        window.ethereum
          .request({
            method: 'eth_sendTransaction',
            params: [
              {
                from: this.fromAddress,
                to: this.toAddress,
                value: amount.toString(16),
                gasPrice: '5000000000',
                gas: '21000'
              }
            ]
          }) //交易单号的hash： txHash
          .then((txHash: any) => {
            if (callback) callback()
            console.log(txHash)
          })
          .catch((error: any) => {
            console.error(error)
          })
      }
    }
  }
})
