export declare type AreEqual = (
  args: IArguments,
  pArgs: IArguments | any[]
) => boolean
export declare type InputFunction = (...args: any[]) => any
export declare type MemoizedFunction = (...args: any[]) => any
declare const memoOne: <T extends InputFunction>(
  fn: T,
  areEqual?: AreEqual | undefined
) => T
export default memoOne
