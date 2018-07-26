import { decorateExpression } from 'src/lib/expressionUtils'
import transitionExpressionState from 'src/lib/transitionExpressionState'
import { DecoratedCallExpression } from 'src/types/DecoratedExpressionTypes'

describe('transitionExpressionState', () => {
  it('unprioritized case', () => {
    const originalExpression = decorateExpression([
      {
        arg: 'x',
        body: 'y',
      },
      'x',
    ]) as DecoratedCallExpression
    expect(transitionExpressionState(originalExpression).priority).toBeDefined()
  })
})
