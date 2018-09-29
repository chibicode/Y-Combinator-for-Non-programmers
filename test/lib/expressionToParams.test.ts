import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import expressionToParams from 'src/lib/yc/expressionToParams'
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
