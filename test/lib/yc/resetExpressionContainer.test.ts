import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import expressionToSimpleString from 'test/helpers/expressionToSimpleString'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
import resetExpressionContainer from 'src/lib/yc/resetExpressionContainer'
import { NeedsResetExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'

describe('resetExpressionContainer', () => {
  it('resets complex expression', () => {
    const e = Object.assign(
      {},
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
      ]),
      { state: 'highlighted' }
    )

    const expressionContainer: NeedsResetExpressionContainer = {
      ...prioritizeExpressionContainer(e),
      containerState: 'needsReset'
    }

    const resultExpression = resetExpressionContainer(expressionContainer)
      .expression

    expect(
      expressionToSimpleString(resultExpression, { addPriority: true })
    ).toBe('(x => (y => (z => x(y(z)))))((a => a))((b => b))(c)')
    expect(resultExpression.state).toBe('default')
  })
})
