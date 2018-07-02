import { expressionToString } from '../../src/lib/functionUtils'

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
        args: ['x', 'y'],
        body: {
          type: 'variable',
          name: 'x'
        }
      })
    ).toBe('((x, y) => x)')
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

  test('if', () => {
    expect(
      expressionToString({
        type: 'if',
        compare: '<=',
        left: {
          type: 'variable',
          name: 'x'
        },
        right: {
          type: 'number',
          value: 1
        },
        trueCase: {
          type: 'number',
          value: 2
        },
        falseCase: {
          type: 'number',
          value: 4
        }
      })
    ).toBe('((x <= 1) ? 2 : 4)')
  })

  test('call', () => {
    expect(
      expressionToString({
        type: 'call',
        args: [
          {
            type: 'number',
            value: 1
          },
          {
            type: 'number',
            value: 2
          }
        ],
        func: {
          type: 'function',
          args: ['x', 'y'],
          body: {
            type: 'variable',
            name: 'x'
          }
        }
      })
    ).toBe('(((x, y) => x)(1, 2))')
  })
})
