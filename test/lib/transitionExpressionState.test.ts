import {
  decorateExpression,
  prioritizeExpression
} from 'src/lib/expressionUtils'
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

  describe('if no next call is found', () => {
    it('returns null', () => {
      const originalExpression = prioritizeExpression(
        decorateExpression(['y', 'x'])
      )
      expect(transitionExpressionState(originalExpression).state).toBe('done')
    })
  })

  describe('if next call is found', () => {
    describe('is in default state', () => {
      it('activates the call', () => {
        const originalExpression = prioritizeExpression(
          decorateExpression([
            {
              arg: 'x',
              body: 'y',
            },
            'x',
          ])
        )
        expect(transitionExpressionState(originalExpression).state).toBe(
          'callActivated'
        )
      })
    })
  })
})
