import OneKeyMap from './index'

it('sets a key/value pair', () => {
  const map = new OneKeyMap()
  map.set('foo', 'bar')
  expect(map.key).toBe('foo')
  expect(map.value).toBe('bar')
})

it('sets just one key/value pair', () => {
  const map = new OneKeyMap()
  map.set('foo', 'bar')
  expect(map.key).toBe('foo')
  expect(map.get('foo')).toBe('bar')
  map.set('foo2', 'bar2')
  expect(map.key).toBe('foo2')
  expect(map.get('foo2')).toBe('bar2')
  expect(map.get('foo')).toBe(undefined)
})

it('gets a key/value pair', () => {
  const map = new OneKeyMap()
  map.set('foo', 'bar')
  expect(map.get('foo')).toBe('bar')
  expect(map.get('foobar')).toBe(undefined)
})
