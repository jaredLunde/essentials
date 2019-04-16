const boxen = typeof window === 'undefined' ? require('boxen') : void 0
const now = typeof window === 'undefined' ?  require('performance-now') : performance.now.bind(performance)
const chalk = typeof window === 'undefined' ? require('chalk').default : require('chalk-console')
const prettyMs = typeof window === 'undefined' ? require('pretty-ms') : x => `${x < 1 ? x.toFixed(5) : Math.round(x)}ms`
const prettyOps = x => Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const bench = (fn, time = 1000, opt = {}) => {
  let elapsed = 0.0, iterations = 0
  const {before, after} = opt

  while (elapsed < time) {
    if (before) before.call()

    const start = now()
    fn.call()
    elapsed += now() - start
    iterations++

    if (after) after.call()
  }

  let output = fn.toString(), per = elapsed / iterations
  output += `\n\n${chalk.bold(prettyOps(1000.0 / per))}op/s`
  output += `\n${chalk.gray(prettyMs(per, {formatSubMs: per < 1}))}`

  if (typeof window === 'undefined')
    output = boxen(output, {padding: 3})

  console.log(output)
}

export default bench