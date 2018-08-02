import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionToParams from 'src/lib/expressionToParams'
import { CallExpressionParams } from 'src/types/ExpressionParamTypes'

describe('expressionToParams', () => {
  it('works with variable expressions', () => {
    const params: CallExpressionParams = [
      {
        arg: 'x',
        body: 'y'
      },
      'z'
    ]
    expect(
      expressionToParams(buildExpressionContainer(params).expression)
    ).toEqual(params)
  })
})
