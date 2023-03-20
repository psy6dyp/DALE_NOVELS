import { defineStore } from 'pinia'
import localCache from 'utils/localCache'
export const languageStore = defineStore('language', {
  state: () => {
    return {
      curLocal: localCache.getItem('curLocal') || 'en'
    }
  },
  actions: {
    setCurLocal(locale: string) {
      this.curLocal = locale
      localCache.setItem('curLocal', locale)
      window.location.reload()
    }
  }
})
