import { defineStore } from 'pinia'
import localCache from 'utils/localCache'
import Web3 from 'web3'
export const addressStore = defineStore('address', {
  state: () => {
    return {
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
      }
    }
  }
})
