import now from 'performance-now'
import raf from 'raf'

export const linear = pos => pos
const calcPosition = (from, to, t) => from + ((to - from) * t)
const calcObjOrInt = (from, to, t) => {
  let output

  if (typeof from === 'object') {
    output = Array.isArray(from) ? [] : {}

    for (let key in from) {
      output[key] = calcPosition(from[key], to[key], t)
    }
  }
  else {
    output = calcPosition(from, to, t)
  }

  return output
}

export default (
  fn,
  {
    from = 0,
    to = 1,
    duration = 240,
    timing = linear
  }
) => {
  const
    start = now(),
    time = start + duration

  const loop = () => {
    const
      p = 1 - ((time - now()) / (time - start)),
      t = timing(p)

    if (p <= 1) {
      raf(loop)
      fn(calcObjOrInt(from, to, t))
    }
    else {
      fn(calcObjOrInt(from, to, t > 1 ? 1 :  t))
    }
  }

  loop()
}
