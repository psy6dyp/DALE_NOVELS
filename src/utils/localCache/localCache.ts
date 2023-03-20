class LocalCache {
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  removeItem(key: string) {
    localStorage.removeItem(key)
  }
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? '""')
  }
}
export default LocalCache
