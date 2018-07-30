import buildExpressionContainer from 'src/lib/buildExpressionContainer'

describe('decorateExpression', () => {
  it('works with variable expressions', () => {
    expect(buildExpressionContainer('x')).toEqual({
      prioritized: false,
      needsReset: false,
      expression: {
        value: 'x',
        state: 'default',
        type: 'variable'
      }
    })
  })

  it('works with function expressions', () => {
    expect(
      buildExpressionContainer({
        arg: 'x',
        body: 'y'
      })
    ).toEqual({
      prioritized: false,
      needsReset: false,
      expression: {
        value: {
          arg: {
            value: 'x',
            state: 'default',
            type: 'variable'
          },
          body: {
            value: 'y',
            state: 'default',
            type: 'variable'
          }
        },
        state: 'default',
        type: 'function'
      }
    })
  })

  it('works with call expressions', () => {
    expect(
      buildExpressionContainer([
        {
          arg: 'x',
          body: 'y'
        },
        'z'
      ])
    ).toEqual({
      prioritized: false,
      needsReset: false,
      expression: {
        value: {
          func: {
            value: {
              arg: {
                value: 'x',
                type: 'variable',
                state: 'default'
              },
              body: {
                value: 'y',
                type: 'variable',
                state: 'default'
              }
            },
            state: 'default',
            type: 'function'
          },
          arg: {
            value: 'z',
            state: 'default',
            type: 'variable'
          }
        },
        state: 'default',
        type: 'call'
      }
    })
  })

  it('correctly nests call expressions', () => {
    expect(buildExpressionContainer(['a', ['b', 'c'], 'd'])).toEqual({
      prioritized: false,
      needsReset: false,
      expression: {
        state: 'default',
        type: 'call',
        value: {
          arg: { state: 'default', type: 'variable', value: 'd' },
          func: {
            state: 'default',
            type: 'call',
            value: {
              arg: {
                state: 'default',
                type: 'call',
                value: {
                  arg: { state: 'default', type: 'variable', value: 'c' },
                  func: { state: 'default', type: 'variable', value: 'b' }
                }
              },
              func: { state: 'default', type: 'variable', value: 'a' }
            }
          }
        }
      }
    })
  })
})
