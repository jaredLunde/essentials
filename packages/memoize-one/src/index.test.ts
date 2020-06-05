import memoizeOne from './index'

describe('memoizeOne', () => {
  it('stores one value w/ default areEqual fn', () => {
    const myFn = memoizeOne((a: string, b: string, c: string, d: string) => ({
      foo: 'bar',
    }))
    // @ts-ignore
    expect(myFn('a', 'b', 'c', 'd')).toBe(myFn('a', 'b', 'c', 'd', 'e'))
    // @ts-ignore
    expect(myFn('a', 'b', 'c', 'd')).not.toBe(myFn('a', 'b', 'c'))
  })

  it('stores one value w/ custom areEqual fn', () => {
    const myFn = memoizeOne(
      (a: string, b: string) => ({
        foo: 'bar',
      }),
      (args, pArgs): boolean => args[1] === pArgs[1]
    )

    expect(myFn('a', 'b')).toBe(myFn('c', 'b'))
    expect(myFn('a', 'b')).not.toBe(myFn('c', 'c'))
  })
})
