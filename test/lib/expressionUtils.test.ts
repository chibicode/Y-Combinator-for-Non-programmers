import {
  decoratedExpressionToSimpleString,
  decorateExpression,
  findNextCallExpression,
  getAllVariableNames,
  nestCallExpressions,
  prioritizeExpression
} from 'src/lib/expressionUtils'
import { DecoratedCallExpression } from 'src/types/DecoratedExpressionTypes'

describe('nestCallExpressions', () => {
  it('handles simple case', () => {
    expect(nestCallExpressions(['a', 'b', 'c'])).toEqual([['a', 'b'], 'c'])
  })

  it('handles cases that have a different order', () => {
    expect(nestCallExpressions(['a', ['b', ['c', 'd']], 'e'])).toEqual([
      ['a', ['b', ['c', 'd']]],
      'e',
    ])
  })
})

describe('decorateExpression', () => {
  it('works with variable expressions', () => {
    expect(decorateExpression('x')).toEqual({
      value: 'x',
      state: 'default',
      type: 'variable',
    })
  })

  it('works with function expressions', () => {
    expect(
      decorateExpression({
        arg: 'x',
        body: 'y',
      })
    ).toEqual({
      value: {
        arg: {
          value: 'x',
          state: 'default',
          type: 'variable',
        },
        body: {
          value: 'y',
          state: 'default',
          type: 'variable',
        },
      },
      state: 'default',
      type: 'function',
    })
  })

  it('works with call expressions', () => {
    expect(
      decorateExpression([
        {
          arg: 'x',
          body: 'y',
        },
        'z',
      ])
    ).toEqual({
      value: {
        func: {
          value: {
            arg: {
              value: 'x',
              type: 'variable',
              state: 'default',
            },
            body: {
              value: 'y',
              type: 'variable',
              state: 'default',
            },
          },
          state: 'default',
          type: 'function',
        },
        arg: {
          value: 'z',
          state: 'default',
          type: 'variable',
        },
      },
      state: 'default',
      type: 'call',
    })
  })
})

describe('decoratedExpressionToSimpleString', () => {
  it('works with variable expressions', () => {
    expect(decoratedExpressionToSimpleString(decorateExpression('x'))).toBe('x')
  })

  it('works with function expressions', () => {
    expect(
      decoratedExpressionToSimpleString(
        decorateExpression({
          arg: 'x',
          body: 'y',
        })
      )
    ).toBe('(x => y)')
  })

  it('works with call expressions', () => {
    expect(
      decoratedExpressionToSimpleString(
        decorateExpression([
          {
            arg: 'x',
            body: 'y',
          },
          'z',
        ])
      )
    ).toBe('(x => y)(z)')
  })
})

describe('prioritizeExpression', () => {
  it('works with simple case', () => {
    const expression = decorateExpression([
      {
        arg: 'x',
        body: 'y',
      },
      'z',
    ]) as DecoratedCallExpression
    prioritizeExpression(expression)
    expect(decoratedExpressionToSimpleString(expression, true)).toEqual(
      '(x => y)(1z)'
    )
  })

  it('works with slightly more complex case', () => {
    const expression = decorateExpression([
      {
        arg: 'x',
        body: {
          arg: 'y',
          body: {
            arg: 'z',
            body: ['x', ['y', 'z']],
          },
        },
      },
      {
        arg: 'a',
        body: 'a',
      },
      {
        arg: 'b',
        body: 'b',
      },
      'c',
    ]) as DecoratedCallExpression
    prioritizeExpression(expression)
    expect(decoratedExpressionToSimpleString(expression, true)).toEqual(
      '(x => (y => (z => x(2y(1z)))))(1(a => a))(2(b => b))(3c)'
    )
  })

  it('prioritizes argument over function', () => {
    const expression = decorateExpression([
      [
        {
          arg: 'a',
          body: {
            arg: 'b',
            body: 'c',
          },
        },
        'd',
      ],
      [
        {
          arg: 'e',
          body: {
            arg: 'f',
            body: 'g',
          },
        },
        'h',
      ],
    ]) as DecoratedCallExpression
    prioritizeExpression(expression)
    expect(decoratedExpressionToSimpleString(expression, true)).toEqual(
      '(a => (b => c))(2d)(3(e => (f => g))(1h))'
    )
  })
})

describe('findNextCallExpression', () => {
  it('works with simple case', () => {
    expect(
      decoratedExpressionToSimpleString(
        findNextCallExpression(
          decorateExpression([
            {
              arg: 'x',
              body: 'y',
            },
            'z',
          ])
        )
      )
    ).toBe('(x => y)(z)')
  })

  it('works with slightly more complex case', () => {
    expect(
      decoratedExpressionToSimpleString(
        findNextCallExpression(
          decorateExpression([
            {
              arg: 'x',
              body: {
                arg: 'y',
                body: {
                  arg: 'z',
                  body: ['x', ['y', 'z']],
                },
              },
            },
            {
              arg: 'a',
              body: 'a',
            },
            {
              arg: 'b',
              body: 'b',
            },
            'c',
          ])
        )
      )
    ).toBe('(x => (y => (z => x(y(z)))))((a => a))')
  })
})

describe('getAllVariableNames', () => {
  it('works with simple case', () => {
    expect(
      getAllVariableNames(
        decorateExpression([
          {
            arg: 'x',
            body: {
              arg: 'y',
              body: {
                arg: 'z',
                body: ['x', ['y', 'z']],
              },
            },
          },
          {
            arg: 'a',
            body: 'a',
          },
          {
            arg: 'b',
            body: 'b',
          },
          'c',
        ])
      ).sort()
    ).toEqual(['a', 'b', 'c', 'x', 'y', 'z'])
  })
})
