class OneKeyMap {
  k: any
  v: any
  get = (k: any): any => (k === this.k ? this.v : void 0)
  set = (k: any, v: any): void => {
    this.k = k
    this.v = v
  }
}

export default OneKeyMap
