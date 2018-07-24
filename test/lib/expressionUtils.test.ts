import {
  decoratedExpressionToSimpleString,
  decorateExpression,
  findNextCallExpression,
  nestCallExpressions
} from 'src/lib/expressionUtils'

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
    ).toBe('((x => y)(z))')
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
    ).toBe('((x => y)(z))')
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
                  body: ['x', 'y', 'z'],
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
    ).toBe('((x => (y => (z => ((x(y))(z)))))((a => a)))')
  })
})
