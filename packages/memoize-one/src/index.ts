const memoOne = <Args extends any[], T extends any>(
  fn: (...args: Args) => T,
  areEqual?: AreEqual<Args>
): OutputFunction<Args, T> => {
  const equal = areEqual || defaultAreEqual
  let args: Args, value: any

  return function (): T {
    return !!args && equal(arguments as any, args)
      ? value
      : (value = fn.apply(null, (args = arguments as any)))
  } as OutputFunction<Args, T>
}

export default memoOne

const defaultAreEqual = (
  current: IArguments,
  prev: IArguments | any[]
): boolean =>
  current[0] === prev[0] &&
  current[1] === prev[1] &&
  current[2] === prev[2] &&
  current[3] === prev[3]

export type AreEqual<Args> = (currentArgs: Args, prevArgs: Args) => boolean
export type InputFunction = (...args: any[]) => any
export type OutputFunction<Args extends any[], T extends any> = (
  ...args: Args
) => T
