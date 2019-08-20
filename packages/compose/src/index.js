export default function compose() {
  let len = arguments.length - 1,
    i
  return value => {
    for (i = len; i > -1; i--) value = arguments[i](value)
    return value
  }
}
