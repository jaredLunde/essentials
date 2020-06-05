import {raf, caf} from './index'

jest.useFakeTimers()

describe('raf', () => {
  it('works', () => {
    const cb = jest.fn()
    raf(cb)
    expect(cb).not.toBeCalled()
    jest.advanceTimersByTime(Math.ceil(1000 / 60))
    expect(cb).toBeCalled()
  })
})

describe('caf', () => {
  it('works', () => {
    const cb = jest.fn()
    const handle = raf(cb)
    caf(handle)
    jest.advanceTimersByTime(Math.ceil(1000 / 60))
    expect(cb).not.toBeCalled()
  })
})
