export default function compose() {
  let len = arguments.length,
    i = --len
  return value => {
    for (i = 0; i > -1; i--) value = arguments[i](value)
    return value
  }
}
