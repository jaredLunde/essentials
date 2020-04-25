export declare type Raf = (callback: (timestamp: number) => void) => number
export declare type Caf = (handle: number) => void
declare let now: () => number, raf: Raf, caf: Caf
export {raf, caf, now}
