import {areEqual} from './index'

describe('areEqual()', () => {
  it('correctly determines equality between arrays', () => {
    expect(areEqual(['a', 'b'], ['a', 'b'])).toBe(true)
    expect(areEqual(['a', 'b'], ['a', 'c'])).toBe(false)
    expect(areEqual(['a', 'b'], ['a', 'b', 'c'])).toBe(false)
    const strict = ['a', 'b']
    expect(areEqual(strict, strict)).toBe(true)
  })

  it('correctly determines equality between objects', () => {
    expect(areEqual({a: 'b'}, {a: 'b'})).toBe(true)
    expect(areEqual({a: 'b'}, {a: 'c'})).toBe(false)
    expect(areEqual({a: 'b'}, {a: 'b', b: 'c'})).toBe(false)
    const strict = {a: 'b'}
    expect(areEqual(strict, strict)).toBe(true)
  })
})
