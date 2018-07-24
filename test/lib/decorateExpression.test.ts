import DecoratedExpressionState from 'src/constants/DecoratedExpressionState'
import decorateExpression from 'src/lib/decorateExpression'

describe('decorateExpression', () => {
  it('works with variable expressions', () => {
    expect(decorateExpression('hello')).toEqual({
      value: 'hello',
      state: DecoratedExpressionState.DEFAULT,
      type: 'variable',
    })
  })

  it('works with function expressions', () => {
    expect(
      decorateExpression({
        arg: 'x',
        body: 'y',
      }),
    ).toEqual({
      value: {
        arg: {
          value: 'x',
          state: DecoratedExpressionState.DEFAULT,
          type: 'variable',
        },
        body: {
          value: 'y',
          state: DecoratedExpressionState.DEFAULT,
          type: 'variable',
        },
      },
      state: DecoratedExpressionState.DEFAULT,
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
        'x',
      ]),
    ).toEqual({
      value: [
        {
          value: {
            arg: {
              value: 'x',
              type: 'variable',
              state: DecoratedExpressionState.DEFAULT,
            },
            body: {
              value: 'y',
              type: 'variable',
              state: DecoratedExpressionState.DEFAULT,
            },
          },
          state: DecoratedExpressionState.DEFAULT,
          type: 'function',
        },
        {
          value: 'x',
          state: DecoratedExpressionState.DEFAULT,
          type: 'variable',
        },
      ],
      state: DecoratedExpressionState.DEFAULT,
      type: 'call',
    })
  })
})
