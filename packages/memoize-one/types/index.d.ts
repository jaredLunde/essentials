declare const memoOne: <Args extends any[], T extends unknown>(
  fn: (...args: Args) => T,
  areEqual?: AreEqual<Args> | undefined
) => OutputFunction<Args, T>
export default memoOne
export declare type AreEqual<Args> = (
  currentArgs: Args,
  prevArgs: Args
) => boolean
export declare type InputFunction = (...args: any[]) => any
export declare type OutputFunction<Args extends any[], T extends any> = (
  ...args: Args
) => T
