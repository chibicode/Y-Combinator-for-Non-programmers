import {
  expressionToString,
  isInnerMostImmediatelyExecutableCall
} from '../../src/lib/functionUtils'

describe('expressionToString', () => {
  test('number', () => {
    expect(
      expressionToString({
        type: 'number',
        value: 1
      })
    ).toBe('1')
  })

  test('variable', () => {
    expect(
      expressionToString({
        type: 'variable',
        name: 'x'
      })
    ).toBe('x')
  })

  test('function', () => {
    expect(
      expressionToString({
        type: 'function',
        arg: 'x',
        body: {
          type: 'variable',
          name: 'x'
        }
      })
    ).toBe('((x) => x)')
  })

  test('sum', () => {
    expect(
      expressionToString({
        type: 'sum',
        left: {
          type: 'variable',
          name: 'x'
        },
        right: {
          type: 'number',
          value: 1
        }
      })
    ).toBe('(x + 1)')
  })

  test('call', () => {
    expect(
      expressionToString({
        type: 'call',
        arg: {
          type: 'number',
          value: 1
        },
        func: {
          type: 'function',
          arg: 'x',
          body: {
            type: 'variable',
            name: 'x'
          }
        }
      })
    ).toBe('(((x) => x)(1))')
  })
})

describe('isInnerMostCall', () => {
  test('is inner most call', () => {
    expect(
      isInnerMostImmediatelyExecutableCall({
        type: 'call',
        arg: {
          type: 'number',
          value: 1
        },
        func: {
          type: 'function',
          arg: 'x',
          body: {
            type: 'variable',
            name: 'x'
          }
        }
      })
    ).toBe(true)
  })

  test('contains some other call', () => {
    expect(
      isInnerMostImmediatelyExecutableCall({
        type: 'call',
        arg: {
          type: 'number',
          value: 1
        },
        func: {
          type: 'function',
          arg: 'x',
          body: {
            type: 'call',
            arg: {
              type: 'number',
              value: 1
            },
            func: {
              type: 'function',
              arg: 'x',
              body: {
                type: 'variable',
                name: 'x'
              }
            }
          }
        }
      })
    ).toBe(false)
  })
})
