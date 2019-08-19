import compose from './index'

test('passes', () => {expect(compose(v => ++v, parseInt)('3')).toBe(4)})
