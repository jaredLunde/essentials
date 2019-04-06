const emptyArr = []
// by default only four arguments are checked as opposed to looping because looping
// is slow and so long this is a known functionality, it's not a big deal at all
//
// in any case the areEqual function can be overwritten below, this is just a default
const defaultAreEqual = (args, pArgs) =>
  args[0] === pArgs[0] && args[1] === pArgs[1] && args[2] === pArgs[2] && args[3] === pArgs[3]

export default (fn, areEqual = defaultAreEqual) => {
  let args = emptyArr, value

  return function () {
    if (areEqual(arguments, args) === true) {
      return value
    }

    args = arguments
    value = fn.apply(this, args)
    return value
  }
}