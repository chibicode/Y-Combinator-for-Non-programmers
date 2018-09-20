import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionToSimpleString from 'src/lib/expressionToSimpleString'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import resetExpressionContainer from 'src/lib/resetExpressionContainer'

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

    const resultExpression = resetExpressionContainer(
      prioritizeExpressionContainer(e)
    ).expression

    expect(
      expressionToSimpleString(resultExpression, { addPriority: true })
    ).toBe('(x => (y => (z => x(y(z)))))((a => a))((b => b))(c)')
    expect(resultExpression.state).toBe('default')
  })
})
