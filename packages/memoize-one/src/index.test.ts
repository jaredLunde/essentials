import memoizeOne from './index'

describe('memoizeOne', () => {
  it('stores one value w/ default areEqual fn', () => {
    const myFn = memoizeOne((): {} => ({
      foo: 'bar',
    }))

    expect(myFn('a', 'b', 'c', 'd')).toBe(myFn('a', 'b', 'c', 'd', 'e'))
    expect(myFn('a', 'b', 'c', 'd')).not.toBe(myFn('a', 'b', 'c'))
  })

  it('stores one value w/ custom areEqual fn', () => {
    const myFn = memoizeOne(
      (): {} => ({
        foo: 'bar',
      }),
      (args, pArgs): boolean => args[1] === pArgs[1]
    )

    expect(myFn('a', 'b')).toBe(myFn('c', 'b'))
    expect(myFn('a', 'b')).not.toBe(myFn('c', 'c'))
  })
})
