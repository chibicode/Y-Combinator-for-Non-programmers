import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import expressionToSimpleString from 'src/lib/yc/expressionToSimpleString'
import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'

describe('findNextCallExpressionAndParent', () => {
  it('works with simple case', () => {
    const result = findNextCallExpressionAndParent(
      prioritizeExpressionContainer(
        buildExpressionContainer([
          {
            arg: 'x',
            body: 'y'
          },
          'z'
        ])
      ).expression
    )
    if (!('expression' in result)) {
      throw new Error()
    }
    expect(expressionToSimpleString(result.expression)).toBe('(x => y)(z)')
  })

  it('works with slightly more complex case', () => {
    const result = findNextCallExpressionAndParent(
      prioritizeExpressionContainer(
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
      ).expression
    )
    if (!('expression' in result)) {
      throw new Error()
    }
    expect(expressionToSimpleString(result.expression)).toBe(
      '(x => (y => (z => x(y(z)))))((a => a))'
    )
  })

  it('returns undefined parent if top most call', () => {
    const result = findNextCallExpressionAndParent(
      prioritizeExpressionContainer(
        buildExpressionContainer([
          {
            arg: 'x',
            body: 'y'
          },
          'z'
        ])
      ).expression
    )
    if (!('noParent' in result)) {
      throw new Error()
    }
    expect(result.noParent).toBe(true)
  })

  it('returns actual parent if not top most call', () => {
    const result = findNextCallExpressionAndParent(
      prioritizeExpressionContainer(
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
      ).expression
    )
    if (!('parentCallExpression' in result) || !('parentKey' in result)) {
      throw new Error()
    }
    expect(expressionToSimpleString(result.parentCallExpression)).toBe(
      '(a => (b => c))(d)((e => f)(g))'
    )
    expect(result.parentKey).toBe('arg')
  })

  it('returns null if there is no more expression to call', () => {
    const result = findNextCallExpressionAndParent(
      prioritizeExpressionContainer(buildExpressionContainer(['x', 'y']))
        .expression
    )
    if (!('notFound' in result)) {
      throw new Error()
    }
    expect(result.notFound).toBe(true)
  })

  it('returns one with function parent if there is an executable call inside a function', () => {
    const result = findNextCallExpressionAndParent(
      prioritizeExpressionContainer(
        buildExpressionContainer({
          arg: 'a',
          body: {
            arg: 'b',
            body: [
              {
                arg: 'c',
                body: 'c'
              },
              'd'
            ]
          }
        })
      ).expression
    )
    if (!('parentFunctionExpression' in result) || !('expression' in result)) {
      throw new Error()
    }
    expect(expressionToSimpleString(result.expression)).toBe('(c => c)(d)')
    expect(expressionToSimpleString(result.parentFunctionExpression)).toBe(
      '(b => (c => c)(d))'
    )
  })
})
