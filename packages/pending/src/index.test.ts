import pending from './index'

describe('pending()', () => {
  it('should resolve successfully', async () => {
    const [result, error] = await pending(() => Promise.resolve(true))
    expect(result).toBe(true)
    expect(error).toBe(undefined)
  })

  it('should reject gracefully', async () => {
    const [result, error] = await pending(() => Promise.reject(true))
    expect(result).toBe(undefined)
    expect(error).toBe(true)
  })

  it('should error gracefully', async () => {
    const [result, error] = await pending(async () => {
      throw new Error('Uh oh')
    })
    expect(result).toBe(undefined)
    expect(error).toBeInstanceOf(Error)
    expect(error.message).toBe('Uh oh')
  })
})
