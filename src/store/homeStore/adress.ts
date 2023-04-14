import { defineStore } from 'pinia'
import localCache from 'utils/localCache'
import axios from 'axios'
import Web3 from 'web3'
import { ElLoading, ElMessage } from 'element-plus'
import { ref } from 'vue'
import { languageStore } from './language'

interface IOrder {
  custom: string
  id: number
  novel: string
  order: string
  price: number
  time: string
}
interface ITransaction {
  from: string
  to: string
  value: string
  gasPrice: string
  gas: string
}
export const addressStore = defineStore('address', {
  state: () => {
    return {
      toAddress: '0xbFE41f565d4A0F4d36b07e82e02aD5F4Eb0Ca6A9',
      fromAddress: localCache.getItem('fromAddress') || '',
      order: localCache.getItem(localCache.getItem('fromAddress')) || ([] as IOrder[])
    }
  },
  getters: {
    locale() {
      const language = languageStore()
      return language.curLocal
    }
  },
  actions: {
    clearAll(callback?: () => void) {
      localCache.removeItem(this.fromAddress)
      localCache.removeItem('fromAddress')
      this.fromAddress = ''
      this.order = [] as IOrder[]
      if (callback) callback()
    },
    async getFromAddress(callback?: () => void) {
      let loading: any = ref(null)
      loading.value = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      if (window.ethereum) {
        await window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then((res: any) => {
            let web3 = new Web3(window.ethereum)
            // alert(web3.eth)
            this.fromAddress = res[0] || ''
            localCache.setItem('fromAddress', this.fromAddress)
            web3.eth.getBalance(this.fromAddress, (err: any, res: any) => {
              if (!err) {
                console.log('ETH balance ==', Number(res) / Math.pow(10, 18))
              }
            })
            if (callback) callback()
            this.getAllBuy(res[0] || '', true)
          })
          .catch((err: any) => {
            if (err.code == '4001') {
              ElMessage.error(this.locale === 'zh' ? '用户取消登录' : 'User cancels login')
            } else {
              ElMessage.error(
                this.locale === 'zh'
                  ? '内部错误！请先登录metamask并刷新重试！'
                  : 'Internal error! Please log in to metamask first and refresh and try again!'
              )
            }
            loading.value.close()
          })
        setTimeout(() => {
          loading.value.close()
          window.location.reload()
        }, 2000)
        loading.value.close()
      } else {
        loading.value.close()
        ElMessage.error(
          this.locale === 'zh'
            ? '请安装metamask！(推荐chrome浏览器)'
            : 'Please install metamask! (Chrome is recommended)'
        )
      }
    },
    logoutMetamask(callback?: () => void) {
      localCache.removeItem(localCache.getItem('fromAddress'))
      localCache.removeItem('fromAddress')
      this.fromAddress = ''
      this.order = [] as IOrder[]
      if (callback) callback()
      window.location.reload()
    },
    async sendTransaction(valueAndNovel: any, callback?: () => void) {
      let loading: any = ref(null)
      loading.value = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      // let web3 = new Web3(window.ethereum)
      //转账数量
      let params: ITransaction = {
        value: (Number(valueAndNovel.value) * Math.pow(10, 18)).toString(16),
        to: this.toAddress,
        from: this.fromAddress,
        gasPrice: '5000000000',
        gas: '21000'
      }
      //收款地址
      //一笔1个lat的交易
      if (
        this.fromAddress !== '' &&
        this.fromAddress.toLowerCase() === this.toAddress.toLowerCase()
      ) {
        ElMessage.error(
          this.locale === 'zh' ? '请不要自己支付给自己' : "Please don't pay yourself!"
        )
        loading.value.close()
      } else if (this.fromAddress !== '' && localCache.getItem('fromAddress') !== '') {
        await axios
          .post('http://167.235.58.236:3000/order', {
            data: {
              custom: this.fromAddress,
              novel: valueAndNovel.novel
            }
          })
          .then((res) => {
            if (res.data.code === 1 && res.data.data) {
              ElMessage.error(this.locale === 'zh' ? '请勿重复购买！' : 'Do not purchase again!')
              loading.value.close()
            } else {
              window.ethereum
                .request({
                  method: 'eth_sendTransaction',
                  params: [params]
                }) //交易单号的hash： txHash
                .then((txHash: any) => {
                  axios
                    .post('http://167.235.58.236:3000/order/add', {
                      data: {
                        custom: String(params.from),
                        order: String(txHash),
                        novel: String(valueAndNovel.novel),
                        time: String(Date.now()),
                        price: String(valueAndNovel.value)
                      }
                    })
                    .then((res) => {
                      if (callback) callback()
                      console.log(txHash)
                      console.log(res)
                      setTimeout(() => {
                        loading.value.close()
                      }, 2000)
                      setTimeout(() => {
                        window.location.reload()
                      }, 1000)
                    })
                })
                .catch((error: any) => {
                  loading.value.close()
                  if (error.code == '4100') {
                    ElMessage.error(this.locale === 'zh' ? '请重新登录！' : 'Please log in again!')
                    this.getFromAddress(() => {
                      ElMessage.success(this.locale === 'zh' ? '登录成功！' : 'Log in success!')
                    })
                  } else if (error.code == '-32602') {
                    ElMessage.error(
                      this.locale === 'zh' ? '参数无效！' : 'The parameters were invalid!'
                    )
                  } else {
                    this.locale === 'zh' ? '内部错误！' : 'Internal error!'
                  }
                  console.error(error)
                })
            }
          })
      }
    },
    async getAllBuy(fromAddress: string, isReload?: boolean) {
      await axios
        .post('http://167.235.58.236:3000/order/all', {
          data: {
            id: fromAddress
          }
        })
        .then((res) => {
          if (res.data.code === 1 && res.data.data) {
            this.order = res.data.data as IOrder[]
            localCache.setItem(fromAddress, res.data.data)
            console.log(localCache.getItem(fromAddress))
          } else {
            console.log('none all')
          }
        })
      if (isReload) window.location.reload()
    },
    getLocalCache(id: any) {
      for (let i = 0; i < this.order.length; i++) {
        if (this.order[i].custom === this.fromAddress && this.order[i].novel === id) {
          return true
        }
        continue
      }
      return false
    }
  }
})
