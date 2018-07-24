import { decorateExpression } from 'src/lib/expressionUtils'
import modifyExpressionState from 'src/lib/modifyExpressionState'

describe('modifyExpressionState', () => {
  it('', () => {
    const originalExpression = decorateExpression([
      {
        arg: 'x',
        body: 'y',
      },
      'x',
    ])
    expect(modifyExpressionState(originalExpression).state).toEqual(
      'callActivated'
    )
  })
})
