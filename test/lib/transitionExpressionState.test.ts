import { decorateExpression } from 'src/lib/expressionUtils'
import transitionExpressionState from 'src/lib/transitionExpressionState'

describe('transitionExpressionState', () => {
  it('most basic case', () => {
    const originalExpression = decorateExpression([
      {
        arg: 'x',
        body: 'y',
      },
      'x',
    ])
    expect(transitionExpressionState(originalExpression)).toEqual({
      state: 'callActivated',
      type: 'call',
      value: {
        arg: { state: 'highlighted', type: 'variable', value: 'x' },
        func: {
          state: 'default',
          type: 'function',
          value: {
            arg: { state: 'highlighted', type: 'variable', value: 'x' },
            body: { state: 'default', type: 'variable', value: 'y' },
          },
        },
      },
    })
  })
})
