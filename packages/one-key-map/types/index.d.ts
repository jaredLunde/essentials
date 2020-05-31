declare class OneKeyMap<K extends any = any, V extends any = any> {
  set: (k: K, v: V) => void
  get: (k: K) => V | undefined
  constructor()
}
export default OneKeyMap
