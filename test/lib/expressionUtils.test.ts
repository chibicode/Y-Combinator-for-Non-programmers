import {
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
    expect(decorateExpression('hello')).toEqual({
      value: 'hello',
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

describe('findNextCallExpression', () => {
  it('works withsimple case', () => {
    expect(
      findNextCallExpression(
        decorateExpression([
          {
            arg: 'x',
            body: 'y',
          },
          'z',
        ])
      )
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
