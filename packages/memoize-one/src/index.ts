const emptyArr: any[] = []
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

const memoOne = (
  fn: InputFunction,
  areEqual: AreEqual = defaultAreEqual
): MemoizedFunction => {
  let args: IArguments | any[] = emptyArr,
    value: any

  return function(): any {
    if (areEqual(arguments, args) === true) return value
    args = arguments
    value = fn.apply(this, args)
    return value
  }
}

export default memoOne
