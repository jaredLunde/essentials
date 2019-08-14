const boxen = typeof window === 'undefined' ? require('boxen') : void 0
const now =
  typeof window === 'undefined'
    ? require('performance-now')
    : performance.now.bind(performance)
const chalk =
  typeof window === 'undefined'
    ? require('chalk').default
    : require('chalk-console')
const prettyMs = require('pretty-ms')
const prettyOps = x => {
  x = x > 1 ? Math.round(x) : x.toFixed(4)
  const parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

const bench = (label, fn) => {
  if (typeof label !== 'string') fn = label

  let elapsed = 0.0,
    iterations = 0,
    duration = 1000,
    before,
    after,
    calledOpt = false
  const maybeFn = fn.call(this, {
    before: cb => {
      before = cb
      calledOpt = true
    },
    after: cb => {
      after = cb
      calledOpt = true
    },
    duration: d => {
      duration = d
      calledOpt = true
    },
  })

  if (calledOpt === true) fn = maybeFn

  if (typeof label !== 'string') label = fn.toString()

  while (elapsed < duration) {
    if (before) before.call()

    const start = now()
    fn.call()
    elapsed += now() - start
    iterations++

    if (after) after.call()
  }

  let output = label,
    per = elapsed / iterations
  output += `\n\n${chalk.bold(prettyOps(1000.0 / per))}op/s`
  output += `\n${chalk.gray(prettyMs(per, {formatSubMs: per < 1}))}`

  if (typeof window === 'undefined') output = boxen(output, {padding: 2})

  console.log(output)
}

export default bench
