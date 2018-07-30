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

describe('prioritizeExpression', () => {
  it('works with simple case', () => {
    expect(
      decoratedExpressionToSimpleString(
        prioritizeExpression(
          buildExpressionContainer([
            {
              arg: 'x',
              body: 'y'
            },
            'z'
          ])
        ),
        { addPriority: true }
      )
    ).toEqual('(x => y)(1z)')
  })

  it('works with slightly more complex case', () => {
    expect(
      decoratedExpressionToSimpleString(
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
        ),
        { addPriority: true }
      )
    ).toEqual('(x => (y => (z => x(2y(1z)))))(1(a => a))(2(b => b))(3c)')
  })

  it('prioritizes argument over function', () => {
    expect(
      decoratedExpressionToSimpleString(
        prioritizeExpression(
          buildExpressionContainer([
            [
              {
                arg: 'a',
                body: {
                  arg: 'b',
                  body: 'c'
                }
              },
              'd'
            ],
            [
              {
                arg: 'e',
                body: {
                  arg: 'f',
                  body: 'g'
                }
              },
              'h'
            ]
          ])
        ),
        { addPriority: true }
      )
    ).toEqual('(a => (b => c))(2d)(3(e => (f => g))(1h))')
  })
})

describe('findNextCallExpressionAndParent', () => {
  it('works with simple case', () => {
    expect(
      decoratedExpressionToSimpleString(
        findNextCallExpressionAndParent(
          prioritizeExpression(
            buildExpressionContainer([
              {
                arg: 'x',
                body: 'y'
              },
              'z'
            ])
          )
        ).expression
      )
    ).toBe('(x => y)(z)')
  })

  it('works with slightly more complex case', () => {
    expect(
      decoratedExpressionToSimpleString(
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
    ).toBe('(x => (y => (z => x(y(z)))))((a => a))')
  })

  it('returns undefined parent if top most call', () => {
    const result = findNextCallExpressionAndParent(
      prioritizeExpression(
        buildExpressionContainer([
          {
            arg: 'x',
            body: 'y'
          },
          'z'
        ])
      )
    )
    expect(result.parent).toBeUndefined()
  })

  it('returns actual parent if not top most call', () => {
    const result = findNextCallExpressionAndParent(
      prioritizeExpression(
        buildExpressionContainer([
          [
            {
              arg: 'a',
              body: {
                arg: 'b',
                body: 'c'
              }
            },
            'd'
          ],
          [
            {
              arg: 'e',
              body: 'f'
            },
            'g'
          ]
        ])
      )
    )
    expect(decoratedExpressionToSimpleString(result.parent)).toBe(
      '(a => (b => c))(d)((e => f)(g))'
    )
    expect(result.parentKey).toBe('arg')
  })

  it('returns null if there is no more expression to call', () => {
    expect(
      findNextCallExpressionAndParent(
        prioritizeExpression(buildExpressionContainer(['x', 'y']))
      )
    ).toBeNull()
  })
})

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
