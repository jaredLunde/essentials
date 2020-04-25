import requestTimeout, {clearRequestTimeout} from './index'
// @ts-ignore
import {now} from '@essentials/raf'

expect.extend({
  toBeNear(actual, expected, wiggleRoom = 30) {
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
it('works', done => {
  const then = now()
  requestTimeout((): void => {
    expect(now() - then).toBeNear(200)
    done()
  }, 200)
})

// eslint-disable-next-line
it('cancels', done => {
  const callback = jest.fn(() => {})
  const handle = requestTimeout(callback, 200)
  clearRequestTimeout(handle)
  setTimeout(() => {
    expect(callback).not.toBeCalled()
    done()
  }, 500)
})
