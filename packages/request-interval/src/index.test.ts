import now from 'performance-now'
import requestInterval, {clearRequestInterval} from './index'
// @ts-ignore

expect.extend({
  toBeNear(actual, expected, wiggleRoom = 40) {
    const pass = Math.abs(expected - actual) < wiggleRoom

    if (pass) {
      return {
        message: (): string => `expected ${actual} not to be near ${expected}`,
        pass: true,
      }
    } else {
      return {
        message: (): string => `expected ${actual} to be near ${expected}`,
        pass: false,
      }
    }
  },
})

// eslint-disable-next-line
it('works', (done) => {
  let then = now(),
    iterations = 0

  requestInterval((): void => {
    const next = now()
    expect(next - then).toBeNear(200)
    then = next
    iterations += 1
    if (iterations === 3) done()
  }, 200)
})

// eslint-disable-next-line
it('cancels', (done) => {
  const callback = jest.fn(() => {})
  const handle = requestInterval(callback, 200)
  setTimeout(() => {
    clearRequestInterval(handle)
  }, 500)
  setTimeout(() => {
    expect(callback).toBeCalledTimes(2)
    done()
  }, 900)
})
