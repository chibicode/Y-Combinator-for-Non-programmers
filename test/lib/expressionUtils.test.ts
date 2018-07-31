import {
  betaReduce,
  buildExpressionContainer,
  conflictingVariableNames,
  decoratedExpressionToSimpleString,
  findNextCallExpressionAndParent,
  getAllVariableNames,
  mutableAlphaConvert,
  prioritizeExpression
} from 'src/lib/expressionUtils'

describe('betaReduce', () => {
  it('beta reduces simple expression', () => {
    expect(
      decoratedExpressionToSimpleString(
        betaReduce(
          findNextCallExpressionAndParent(
            prioritizeExpression(
              buildExpressionContainer([
                {
                  arg: 'x',
                  body: 'x'
                },
                'y'
              ])
            )
          ).expression
        )
      )
    ).toEqual('y')
  })

  it('beta reduces complex expression', () => {
    expect(
      decoratedExpressionToSimpleString(
        betaReduce(
          findNextCallExpressionAndParent(
            prioritizeExpression(
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
            )
          ).expression
        )
      )
    ).toEqual('(x => (a => (b => x(y(b)))))((y => z))')
  })
})
