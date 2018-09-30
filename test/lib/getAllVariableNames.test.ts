import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import getAllVariableNames from 'src/lib/yc/getAllVariableNames'

describe('getAllVariableNames', () => {
  it('works with simple case', () => {
    expect(
      [
        ...getAllVariableNames(
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
      ].sort()
    ).toEqual(['a', 'b', 'c', 'x', 'y', 'z'])
  })
})
