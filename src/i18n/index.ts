import { createI18n } from 'vue-i18n'
import localCache from 'utils/localCache'
import zh from './zh'
import en from './en'

const i18n = createI18n({
  legacy: false, // 没有该参数可能会报错
  locale: localCache.getItem('curLocal') || 'en',
  messages: {
    zh,
    en
  }
})

export default i18n
