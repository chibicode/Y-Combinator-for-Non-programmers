import {
  decoratedExpressionToSimpleString,
  decorateExpression,
  prioritizeExpression
} from 'src/lib/expressionUtils'
import transitionExpressionState from 'src/lib/transitionExpressionState'
import {
  DecoratedCallExecutableExpression,
  DecoratedCallPrioritizedExpression
} from 'src/types/DecoratedExpressionTypes'

const transitionExpressionStateWrapped = (
  x: DecoratedCallPrioritizedExpression
) => transitionExpressionState(x) as DecoratedCallExecutableExpression

const repeatUntilState = (exp, state) => {
  while (exp.state !== state) {
    exp = transitionExpressionStateWrapped(exp)
  }
  return exp
}

describe('transitionExpressionState', () => {
  describe('if unprioritized', () => {
    it('prioritizes', () => {
      const originalExp = decorateExpression([
        {
          arg: 'x',
          body: 'y',
        },
        'x',
      ])
      expect(transitionExpressionState(originalExp).priority).toBeDefined()
    })
  })

  describe('if no next call is found', () => {
    it('returns null', () => {
      const originalExp = prioritizeExpression(decorateExpression(['y', 'x']))
      expect(transitionExpressionState(originalExp).state).toBe('done')
    })
  })

  describe('if next call is found', () => {
    it('activates the call', () => {
      const originalExp = prioritizeExpression(
        decorateExpression([
          {
            arg: 'x',
            body: 'y',
          },
          'x',
        ])
      )

      let exp = transitionExpressionStateWrapped(originalExp)
      expect(exp.state).toBe('readyToHighlight')

      exp = transitionExpressionStateWrapped(exp)
      expect(exp.value.func.value.arg.state).toBe('highlighted')

      exp = transitionExpressionStateWrapped(exp)
      expect(exp.value.arg.state).toBe('highlighted')

      exp = transitionExpressionStateWrapped(exp)
      expect(exp.value.func.value.body.state).toBe('highlighted')

      exp = transitionExpressionStateWrapped(exp)
      expect(exp.state).toBe('checkForConflictingVariables')
    })
  })

  describe('if ready to check variable conflicts', () => {
    describe('if alpha convert is not necessary', () => {
      it('is now ready to beta reduce', () => {
        const originalExp = prioritizeExpression(
          decorateExpression([
            {
              arg: 'x',
              body: 'y',
            },
            'x',
          ])
        )

        let exp = transitionExpressionStateWrapped(originalExp)
        exp = repeatUntilState(exp, 'checkForConflictingVariables')
        exp = transitionExpressionStateWrapped(exp)
        expect(exp.state).toBe('readyToBetaReduce')
      })
    })

    describe('if alpha convert is necessary', () => {
      it('indicates that alpha convert is necessary', () => {
        const originalExp = prioritizeExpression(
          decorateExpression([
            {
              arg: 'x',
              body: {
                arg: 'y',
                body: ['x', 'y'],
              },
            },
            'y',
          ])
        )

        let exp = transitionExpressionStateWrapped(originalExp)
        exp = repeatUntilState(exp, 'checkForConflictingVariables')
        exp = transitionExpressionStateWrapped(exp)
        expect(exp.state).toBe('needsAlphaConvert')
      })
    })
  })

  describe('if needs alpha convert', () => {
    it('does alpha conversion', () => {
      const originalExp = prioritizeExpression(
        decorateExpression([
          {
            arg: 'x',
            body: {
              arg: 'y',
              body: ['x', 'y'],
            },
          },
          'y',
        ])
      )

      let exp = transitionExpressionStateWrapped(originalExp)
      exp = repeatUntilState(exp, 'needsAlphaConvert')
      exp = transitionExpressionStateWrapped(exp)
      expect(exp.state).toBe('readyToBetaReduce')
      expect(decoratedExpressionToSimpleString(exp)).toBe(
        '(x => (a => x(a)))(y)'
      )
    })
  })
})
