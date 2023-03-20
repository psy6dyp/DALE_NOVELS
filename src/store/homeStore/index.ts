import { addressStore } from './adress'
import { languageStore } from './language'
export const useStore = () => {
  return {
    address: addressStore(),
    language: languageStore()
  }
}
