export interface RequestIntervalHandle {
  v?: number
}
export declare const clearRequestInterval: (
  handle: RequestIntervalHandle
) => void
export declare const requestInterval: (
  fn: (...args: any[]) => void,
  ms: number
) => RequestIntervalHandle
export default requestInterval
