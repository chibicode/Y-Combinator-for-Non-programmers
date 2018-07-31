import alphaConvert from 'src/lib/alphaConvert'
import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionToSimpleString from 'src/lib/expressionToSimpleString'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'

describe('alphaConvert', () => {
  describe('conflict does not exist', () => {
    it('doesn not update the expression', () => {
      expect(
        expressionToSimpleString(
          alphaConvert(findNextCallExpressionAndParent(
            prioritizeExpressionContainer(
              buildExpressionContainer([
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
                  arg: 'c',
                  body: 'd'
                }
              ])
            ).expression
          ).expression as ImmediatelyExecutableCallExpression)
        )
      ).toEqual('(x => (y => (z => x(y(z)))))((c => d))')
    })
  })

  describe('conflict exists', () => {
    it('updates expression', () => {
      expect(
        expressionToSimpleString(
          alphaConvert(findNextCallExpressionAndParent(
            prioritizeExpressionContainer(
              buildExpressionContainer([
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
                  arg: 'y',
                  body: 'z'
                }
              ])
            ).expression
          ).expression as ImmediatelyExecutableCallExpression)
        )
      ).toEqual('(x => (a => (b => x(a(b)))))((y => z))')
    })
  })
})
