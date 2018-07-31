import betaReduce from 'src/lib/betaReduce'
import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionToSimpleString from 'src/lib/expressionToSimpleString'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'

describe('betaReduce', () => {
  it('beta reduces simple expression', () => {
    expect(
      expressionToSimpleString(
        betaReduce(findNextCallExpressionAndParent(
          prioritizeExpressionContainer(
            buildExpressionContainer([
              {
                arg: 'x',
                body: 'x'
              },
              'y'
            ])
          ).expression
        ).expression as ImmediatelyExecutableCallExpression)
      )
    ).toEqual('y')
  })

  it('beta reduces complex expression', () => {
    expect(
      expressionToSimpleString(
        betaReduce(findNextCallExpressionAndParent(
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
                arg: 'a',
                body: 'a'
              },
              {
                arg: 'b',
                body: 'b'
              },
              'c'
            ])
          ).expression
        ).expression as ImmediatelyExecutableCallExpression)
      )
    ).toEqual('(y => (z => (a => a)(y(z))))')
  })
})
