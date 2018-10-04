import expressionToSimpleString from 'src/lib/yc/expressionToSimpleString'
import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
import initializeExpressionContainer from 'src/lib/yc/initializeExpressionContainer'
import stepExpressionContainer from 'src/lib/yc/stepExpressionContainer'
import {
  DoneExpressionContainer,
  ExpressionContainer,
  isDoneExpressionContainer,
  isNeedsResetExpressionContainer,
  isPrioritizedExpressionContainer,
  NeedsResetExpressionContainer,
  PrioritizedExpression,
  PrioritizedExpressionContainer,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { PrioritizedCallExpression } from 'src/types/yc/PrioritizedExpressionTypes'

const repeatUntilState = (
  e: ExpressionContainer<PrioritizedCallExpression>,
  state: string
) => {
  while (true) {
    const result = findNextCallExpressionAndParent(e.expression)
    if ('expression' in result && result.expression.state === state) {
      return e
    }
    e = stepExpressionContainer(e)
  }
}

const repeatUntilDone = (
  e:
    | NeedsResetExpressionContainer<PrioritizedCallExpression>
    | PrioritizedExpressionContainer<PrioritizedCallExpression>
) => {
  let result: SteppedExpressionContainer<
    PrioritizedExpression
  > = stepExpressionContainer(e)
  while (!isDoneExpressionContainer(result)) {
    result = stepExpressionContainer(result)
  }
  return result
}

describe('stepExpressionContainer', () => {
  describe('if no next call is found', () => {
    it('is done', () => {
      const originalContainer = initializeExpressionContainer(['y', 'x'])
      expect(
        isDoneExpressionContainer(stepExpressionContainer(originalContainer))
      ).toBe(true)
    })
  })

  describe('if next call is found', () => {
    it('activates the call', () => {
      const originalContainer = initializeExpressionContainer([
        {
          arg: 'x',
          body: 'y'
        },
        'x'
      ])

      let e = stepExpressionContainer(originalContainer)
      expect(e.expression.state).toBe('readyToHighlight')

      e = stepExpressionContainer(e)
      expect(e.expression.arg.state).toBe('justHighlighted')

      e = stepExpressionContainer(e)
      expect(e.expression.func.arg.state).toBe('justHighlighted')

      e = stepExpressionContainer(e)
      expect(e.expression.func.body.state).toBe('justHighlighted')

      e = stepExpressionContainer(e)
      expect(e.expression.state).toBe('checkForConflictingVariables')
    })
  })

  describe('if ready to check variable conflicts', () => {
    describe('if alpha convert is not necessary', () => {
      it('is now ready to beta reduce', () => {
        const originalContainer = initializeExpressionContainer([
          {
            arg: 'x',
            body: 'y'
          },
          'x'
        ])

        let e = stepExpressionContainer(originalContainer)
        e = repeatUntilState(e, 'checkForConflictingVariables')
        e = stepExpressionContainer(e)
        expect(e.expression.state).toBe('readyToBetaReduce')
      })
    })

    describe('if alpha convert is necessary', () => {
      it('indicates that alpha convert is necessary', () => {
        const originalContainer = initializeExpressionContainer([
          {
            arg: 'x',
            body: {
              arg: 'y',
              body: ['x', 'y']
            }
          },
          'y'
        ])

        let e = stepExpressionContainer(originalContainer)
        e = repeatUntilState(e, 'checkForConflictingVariables')
        e = stepExpressionContainer(e)
        expect(e.expression.state).toBe('needsAlphaConvert')
      })
    })
  })

  describe('if needs alpha convert', () => {
    it('does alpha conversion', () => {
      const originalContainer = initializeExpressionContainer([
        {
          arg: 'x',
          body: {
            arg: 'y',
            body: ['x', 'y']
          }
        },
        'y'
      ])

      let e = stepExpressionContainer(originalContainer)
      e = repeatUntilState(e, 'needsAlphaConvert')
      e = stepExpressionContainer(e)
      expect(e.expression.state).toBe('readyToBetaReduce')
      expect(expressionToSimpleString(e.expression)).toBe(
        '(x => (a => x(a)))(y)'
      )
    })
  })

  describe('if ready for beta reduction', () => {
    describe('top level beta reduction, simple', () => {
      it('does beta reduction', () => {
        const originalContainer = initializeExpressionContainer([
          {
            arg: 'x',
            body: 'x'
          },
          'y'
        ])

        let e = stepExpressionContainer(originalContainer)
        e = repeatUntilState(e, 'readyToBetaReduce')
        const result = stepExpressionContainer(e)
        expect(expressionToSimpleString(result.expression)).toBe('y')
        expect(isNeedsResetExpressionContainer(result)).toBe(true)
      })
    })

    describe('non-top level beta reduction, complicated', () => {
      it('does beta reduction', () => {
        const originalContainer = initializeExpressionContainer([
          {
            arg: 'x',
            body: {
              arg: 'y',
              body: {
                arg: 'z',
                body: ['x', ['y', 'z']]
              }
            }
          },
          {
            arg: 'a',
            body: 'a'
          },
          {
            arg: 'b',
            body: 'b'
          },
          'c'
        ])

        let e = stepExpressionContainer(originalContainer)
        e = repeatUntilState(e, 'readyToBetaReduce')
        const result = stepExpressionContainer(e)
        expect(expressionToSimpleString(result.expression)).toBe(
          '(y => (z => (a => a)(y(z))))((b => b))(c)'
        )
        expect(isNeedsResetExpressionContainer(result)).toBe(true)
        const afterReset = stepExpressionContainer(result)
        expect(afterReset.expression.state).toBe('default')
        expect(isNeedsResetExpressionContainer(afterReset)).toBe(false)
      })
    })
  })

  describe('repeat until done', () => {
    it('completes', () => {
      const originalContainer = initializeExpressionContainer([
        {
          arg: 'x',
          body: {
            arg: 'y',
            body: {
              arg: 'z',
              body: ['x', ['y', 'z']]
            }
          }
        },
        {
          arg: 'a',
          body: 'a'
        },
        {
          arg: 'b',
          body: 'b'
        },
        'c'
      ])

      const e = repeatUntilDone(originalContainer)
      expect(expressionToSimpleString(e.expression)).toBe('c')
    })
  })
})
