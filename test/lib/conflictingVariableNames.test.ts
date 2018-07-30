import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import conflictingVariableNames from 'src/lib/conflictingVariableNames'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'

describe('conflictingVariableNames', () => {
  describe('no conflicts', () => {
    it('returns empty', () => {
      expect(
        conflictingVariableNames(findNextCallExpressionAndParent(
          prioritizeExpressionContainer(
            buildExpressionContainer([
              {
                arg: 'x',
                body: {
                  arg: 'y',
                  body: ['x', 'y']
                }
              },
              'x'
            ])
          ).expression
        ).expression as ImmediatelyExecutableCallExpression)
      ).toEqual([])
    })
  })

  describe('conflicts exist', () => {
    it('returns conflicted elements', () => {
      expect(
        conflictingVariableNames(findNextCallExpressionAndParent(
          prioritizeExpressionContainer(
            buildExpressionContainer([
              {
                arg: 'x',
                body: {
                  arg: 'y',
                  body: ['x', 'y']
                }
              },
              'y'
            ])
          ).expression
        ).expression as ImmediatelyExecutableCallExpression)
      ).toEqual(['y'])
    })
  })
})
