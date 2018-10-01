import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import conflictingVariableNames from 'src/lib/yc/conflictingVariableNames'
import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'

describe('conflictingVariableNames', () => {
  describe('no conflicts', () => {
    it('returns empty', () => {
      const result = findNextCallExpressionAndParent(
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
      )
      if ('notFound' in result && result.notFound) {
        throw new Error()
      }

      expect(conflictingVariableNames(result.expression)).toEqual([])
    })
  })

  describe('conflicts exist', () => {
    it('returns conflicted elements', () => {
      const result = findNextCallExpressionAndParent(
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
      )
      if ('notFound' in result && result.notFound) {
        throw new Error()
      }
      expect(conflictingVariableNames(result.expression)).toEqual(['y'])
    })
  })
})
