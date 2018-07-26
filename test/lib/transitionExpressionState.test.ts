import {
  decorateExpression,
  prioritizeExpression
} from 'src/lib/expressionUtils'
import transitionExpressionState from 'src/lib/transitionExpressionState'
import { DecoratedCallExecutableExpression } from 'src/types/DecoratedExpressionTypes'

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
      let executableExpression = transitionExpressionState(
        originalExpression
      ) as DecoratedCallExecutableExpression
      expect(executableExpression.state).toBe('readyToHighlight')
      executableExpression = transitionExpressionState(
        executableExpression
      ) as DecoratedCallExecutableExpression
      expect(executableExpression.value.func.value.arg.state).toBe(
        'highlighted'
      )
      executableExpression = transitionExpressionState(
        executableExpression
      ) as DecoratedCallExecutableExpression
      expect(executableExpression.value.arg.state).toBe('highlighted')
      executableExpression = transitionExpressionState(
        executableExpression
      ) as DecoratedCallExecutableExpression
      expect(executableExpression.value.func.value.body.state).toBe(
        'highlighted'
      )
      executableExpression = transitionExpressionState(
        executableExpression
      ) as DecoratedCallExecutableExpression
      expect(executableExpression.state).toBe('readyToAlphaConvert')
    })
  })
})
