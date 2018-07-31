import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionToSimpleString from 'src/lib/expressionToSimpleString'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import resetExpression from 'src/lib/resetExpression'

describe('resetExpression', () => {
  it('resets complex expression', () => {
    const resultExpression = resetExpression(
      Object.assign(
        {},
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
        ).expression,
        { state: 'highlighted' }
      )
    )
    expect(
      expressionToSimpleString(resultExpression, { addPriority: true })
    ).toEqual('(x => (y => (z => x(y(z)))))((a => a))((b => b))(c)')
    expect(resultExpression.state).toBe('default')
  })
})
