import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionContainerToSimpleString from 'src/lib/expressionToSimpleString'

describe('expressionContainerToSimpleString', () => {
  it('works with variable expressions', () => {
    expect(
      expressionContainerToSimpleString(
        buildExpressionContainer('x').expression
      )
    ).toBe('x')
  })

  it('works with function expressions', () => {
    expect(
      expressionContainerToSimpleString(
        buildExpressionContainer({
          arg: 'x',
          body: 'y'
        }).expression
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
        ]).expression
      )
    ).toBe('(x => y)(z)')
  })
})
