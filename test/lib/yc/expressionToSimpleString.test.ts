import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import expressionContainerToSimpleString from 'test/helpers/expressionContainerToSimpleString'

describe('expressionToSimpleString', () => {
  it('works with variable expressions', () => {
    expect(
      expressionContainerToSimpleString(buildExpressionContainer('x'))
    ).toBe('x')
  })

  it('works with function expressions', () => {
    expect(
      expressionContainerToSimpleString(
        buildExpressionContainer({
          arg: 'x',
          body: 'y'
        })
      )
    ).toBe('(x => y)')
  })

  it('works with call expressions', () => {
    expect(
      expressionContainerToSimpleString(
        buildExpressionContainer([
          {
            arg: 'x',
            body: 'y'
          },
          'z'
        ])
      )
    ).toBe('(x => y)(z)')
  })
})
