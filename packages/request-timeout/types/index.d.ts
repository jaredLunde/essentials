export interface RequestTimeoutHandle {
  v?: number
}
export declare const clearRequestTimeout: (handle: RequestTimeoutHandle) => void
export declare const requestTimeout: (
  fn: (...args: any[]) => void,
  ms: number
) => RequestTimeoutHandle
export default requestTimeout
