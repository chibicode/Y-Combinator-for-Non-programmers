import {
  makeAdderWrapped,
  sum,
  sum2,
  tennentMul3WithBinding
} from '../../src/lib/y'

describe('y', () => {
  test('tennentMul3WithBinding', () => {
    expect(tennentMul3WithBinding(10)).toBe(30)
  })

  test('makeAdderWrapped', () => {
    expect(makeAdderWrapped(10)(20)).toBe(30)
  })

  test('sum', () => {
    expect(sum(10)).toBe(55)
  })

  test('sum2', () => {
    expect(sum2(10)).toBe(55)
  })
})
