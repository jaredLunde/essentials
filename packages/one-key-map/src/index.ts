class OneKeyMap {
  key: any = null
  value: any = null
  get = (k: any): any => (k === this.key ? this.value : void 0)
  set = (k: any, v: any): void => {
    this.key = k
    this.value = v
  }
}

export default OneKeyMap
