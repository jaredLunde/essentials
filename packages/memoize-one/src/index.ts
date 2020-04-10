const defaultAreEqual = (
  args: IArguments,
  pArgs: IArguments | any[]
): boolean =>
  args[0] === pArgs[0] &&
  args[1] === pArgs[1] &&
  args[2] === pArgs[2] &&
  args[3] === pArgs[3]

export type AreEqual = (args: IArguments, pArgs: IArguments | any[]) => boolean
export type InputFunction = (...args: any[]) => any
export type MemoizedFunction = (...args: any[]) => any

const memoOne = <T extends InputFunction>(fn: T, areEqual?: AreEqual): T => {
  const equal = areEqual || defaultAreEqual
  let args: IArguments | any[] = [],
    value: any

  return function (): ReturnType<T> {
    if (equal(arguments, args)) return value
    args = arguments
    value = fn.apply(this, args)
    return value
  } as T
}

export default memoOne
