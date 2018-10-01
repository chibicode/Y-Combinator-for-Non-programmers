import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import maxNestedFunctionDepth from 'src/lib/yc/maxNestedFunctionDepth'

describe('maxNestedFunctionDepth', () => {
  it('works with simple case', () => {
    expect(
      maxNestedFunctionDepth(
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
        ]).expression
      )
    ).toEqual(3)
  })
})
