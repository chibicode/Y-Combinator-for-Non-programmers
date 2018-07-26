import { decorateExpression } from 'src/lib/expressionUtils'
import transitionExpressionState from 'src/lib/transitionExpressionState'

describe('transitionExpressionState', () => {
  describe('if unprioritized', () => {
    it('prioritizes', () => {
      const originalExpression = decorateExpression([
        {
          arg: 'x',
          body: 'y',
        },
        'x',
      ])
      expect(
        transitionExpressionState(originalExpression).priority
      ).toBeDefined()
    })
  })
})
