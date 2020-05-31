class OneKeyMap<K extends any = any, V extends any = any> {
  set: (k: K, v: V) => void
  get: (k: K) => V | undefined

  constructor() {
    let key: K | undefined, val: V | undefined
    this.get = (k: K): V | undefined => (k === key ? val : void 0)
    this.set = (k: K, v: V): void => {
      key = k
      val = v
    }
  }
}

export default OneKeyMap
