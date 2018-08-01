import initializeExpressionContainer from 'src/lib/initializeExpressionContainer'
import stepExpressionContainer from 'src/lib/stepExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'
import {
  isPrioritizedExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import { PrioritizedCallExpression } from 'src/types/PrioritizedExpressionTypes'

const stepExpressionContainerWrapped = (
  e: PrioritizedExpressionContainer<PrioritizedCallExpression>
): PrioritizedExpressionContainer<ImmediatelyExecutableCallExpression> => {
  const result = stepExpressionContainer(e)
  if (
    !isPrioritizedExpressionContainer<ImmediatelyExecutableCallExpression>(
      result
    )
  ) {
    throw new Error()
  }
  return result
}

// const repeatUntilState = (exp, state) => {
//   while (findNextCallExpressionAndParent(exp).expression.state !== state) {
//     exp = transitionExpressionStateWrapped(exp)
//   }
//   return exp
// }

describe('stepExpressionContainer', () => {
  describe('if no next call is found', () => {
    it('is done', () => {
      const originalExp = initializeExpressionContainer(['y', 'x'])
      expect(stepExpressionContainer(originalExp).done).toBe(true)
    })
  })

  describe('if next call is found', () => {
    it('activates the call', () => {
      const originalExp = initializeExpressionContainer([
        {
          arg: 'x',
          body: 'y'
        },
        'x'
      ])

      let e = stepExpressionContainerWrapped(originalExp)
      expect(e.expression.state).toBe('readyToHighlight')

      e = stepExpressionContainerWrapped(e)
      expect(e.expression.func.arg.state).toBe('highlighted')

      e = stepExpressionContainerWrapped(e)
      expect(e.expression.arg.state).toBe('highlighted')

      e = stepExpressionContainerWrapped(e)
      expect(e.expression.func.body.state).toBe('highlighted')

      e = stepExpressionContainerWrapped(e)
      expect(e.expression.state).toBe('checkForConflictingVariables')
    })
  })

  // describe('if ready to check variable conflicts', () => {
  //   describe('if alpha convert is not necessary', () => {
  //     it('is now ready to beta reduce', () => {
  //       const originalExp = prioritizeExpression(
  //         buildExpressionContainer([
  //           {
  //             arg: 'x',
  //             body: 'y'
  //           },
  //           'x'
  //         ])
  //       )

  //       let exp = transitionExpressionStateWrapped(originalExp)
  //       exp = repeatUntilState(exp, 'checkForConflictingVariables')
  //       exp = transitionExpressionStateWrapped(exp)
  //       expect(exp.state).toBe('readyToBetaReduce')
  //     })
  //   })

  //   describe('if alpha convert is necessary', () => {
  //     it('indicates that alpha convert is necessary', () => {
  //       const originalExp = prioritizeExpression(
  //         buildExpressionContainer([
  //           {
  //             arg: 'x',
  //             body: {
  //               arg: 'y',
  //               body: ['x', 'y']
  //             }
  //           },
  //           'y'
  //         ])
  //       )

  //       let exp = transitionExpressionStateWrapped(originalExp)
  //       exp = repeatUntilState(exp, 'checkForConflictingVariables')
  //       exp = transitionExpressionStateWrapped(exp)
  //       expect(exp.state).toBe('needsAlphaConvert')
  //     })
  //   })
  // })

  // describe('if needs alpha convert', () => {
  //   it('does alpha conversion', () => {
  //     const originalExp = prioritizeExpression(
  //       buildExpressionContainer([
  //         {
  //           arg: 'x',
  //           body: {
  //             arg: 'y',
  //             body: ['x', 'y']
  //           }
  //         },
  //         'y'
  //       ])
  //     )

  //     let exp = transitionExpressionStateWrapped(originalExp)
  //     exp = repeatUntilState(exp, 'needsAlphaConvert')
  //     exp = transitionExpressionStateWrapped(exp)
  //     expect(exp.state).toBe('readyToBetaReduce')
  //     expect(decoratedExpressionToSimpleString(exp)).toBe(
  //       '(x => (a => x(a)))(y)'
  //     )
  //   })
  // })

  // describe('if ready for beta reduction', () => {
  //   describe('top level beta reduction, simple', () => {
  //     it('does beta reduction', () => {
  //       const originalExp = prioritizeExpression(
  //         buildExpressionContainer([
  //           {
  //             arg: 'x',
  //             body: 'x'
  //           },
  //           'y'
  //         ])
  //       )

  //       let exp = transitionExpressionStateWrapped(originalExp)
  //       exp = repeatUntilState(exp, 'readyToBetaReduce')
  //       const result = transitionExpressionStateWrapped(
  //         exp
  //       ) as NeedsResetExpression
  //       expect(decoratedExpressionToSimpleString(result)).toBe('y')
  //       expect(result.state).toBe('needsReset')
  //     })
  //   })

  //   describe('non-top level beta reduction, complicated', () => {
  //     it('does beta reduction', () => {
  //       const originalExp = prioritizeExpression(
  //         buildExpressionContainer([
  //           {
  //             arg: 'x',
  //             body: {
  //               arg: 'y',
  //               body: {
  //                 arg: 'z',
  //                 body: ['x', ['y', 'z']]
  //               }
  //             }
  //           },
  //           {
  //             arg: 'a',
  //             body: 'a'
  //           },
  //           {
  //             arg: 'b',
  //             body: 'b'
  //           },
  //           'c'
  //         ])
  //       )

  //       let exp = transitionExpressionStateWrapped(originalExp)
  //       exp = repeatUntilState(exp, 'readyToBetaReduce')
  //       const result = transitionExpressionStateWrapped(
  //         exp
  //       ) as NeedsResetCallExpression
  //       expect(decoratedExpressionToSimpleString(result)).toBe(
  //         '(y => (z => (a => a)(y(z))))((b => b))(c)'
  //       )
  //       expect(result.state).toBe('needsReset')
  //       const afterReset = stepExpressionContainer(result)
  //       expect(afterReset.state).toBe('default')
  //       expect(afterReset.priority).toBeUndefined()
  //     })
  //   })
  // })

  // describe('repeat until done', () => {
  //   it('completes', () => {
  //     let exp = prioritizeExpression(
  //       buildExpressionContainer([
  //         {
  //           arg: 'x',
  //           body: {
  //             arg: 'y',
  //             body: {
  //               arg: 'z',
  //               body: ['x', ['y', 'z']]
  //             }
  //           }
  //         },
  //         {
  //           arg: 'a',
  //           body: 'a'
  //         },
  //         {
  //           arg: 'b',
  //           body: 'b'
  //         },
  //         'c'
  //       ])
  //     ) as any

  //     while (exp.state !== 'done' && exp.type === 'call') {
  //       exp = stepExpressionContainer(exp)
  //     }
  //     expect(decoratedExpressionToSimpleString(exp)).toBe('c')
  //   })
  // })
})
