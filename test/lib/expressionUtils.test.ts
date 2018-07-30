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

describe('getAllVariableNames', () => {
  it('works with simple case', () => {
    expect(
      getAllVariableNames(
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
      ).sort()
    ).toEqual(['a', 'b', 'c', 'x', 'y', 'z'])
  })
})

describe('conflictingVariableNames', () => {
  describe('no conflicts', () => {
    it('returns empty', () => {
      expect(
        conflictingVariableNames(
          findNextCallExpressionAndParent(
            prioritizeExpression(
              buildExpressionContainer([
                {
                  arg: 'x',
                  body: {
                    arg: 'y',
                    body: ['x', 'y']
                  }
                },
                'x'
              ])
            )
          ).expression
        )
      ).toEqual([])
    })
  })

  describe('conflicts exist', () => {
    it('returns conflicted elements', () => {
      expect(
        conflictingVariableNames(
          findNextCallExpressionAndParent(
            prioritizeExpression(
              buildExpressionContainer([
                {
                  arg: 'x',
                  body: {
                    arg: 'y',
                    body: ['x', 'y']
                  }
                },
                'y'
              ])
            )
          ).expression
        )
      ).toEqual(['y'])
    })
  })
})

describe('mutableAlphaConvert', () => {
  it('returns conflicted elements', () => {
    const expression = findNextCallExpressionAndParent(
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
            arg: 'y',
            body: 'z'
          }
        ])
      )
    ).expression
    mutableAlphaConvert(expression)
    expect(decoratedExpressionToSimpleString(expression)).toEqual(
      '(x => (a => (b => x(y(b)))))((y => z))'
    )
  })
})

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
