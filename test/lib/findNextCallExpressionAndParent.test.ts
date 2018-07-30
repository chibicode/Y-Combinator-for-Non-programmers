import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionToSimpleString from 'src/lib/expressionToSimpleString'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import { Expression } from 'src/types/ExpressionTypes'
import {
  PrioritizedCallExpression,
  PrioritizedFunctionExpression
} from 'src/types/PrioritizedExpressionTypes'

describe('findNextCallExpressionAndParent', () => {
  it('works with simple case', () => {
    expect(
      expressionToSimpleString(findNextCallExpressionAndParent(
        prioritizeExpressionContainer(
          buildExpressionContainer([
            {
              arg: 'x',
              body: 'y'
            },
            'z'
          ])
        ).expression
      ).expression as Expression)
    ).toBe('(x => y)(z)')
  })

  it('works with slightly more complex case', () => {
    expect(
      expressionToSimpleString(findNextCallExpressionAndParent(
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
      ).expression as Expression)
    ).toBe('(x => (y => (z => x(y(z)))))((a => a))')
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
    expect(
      expressionToSimpleString(
        result.parentCallExpression as PrioritizedCallExpression
      )
    ).toBe('(a => (b => c))(d)((e => f)(g))')
    expect(result.parentKey).toBe('arg')
  })

  it('returns null if there is no more expression to call', () => {
    expect(
      findNextCallExpressionAndParent(
        prioritizeExpressionContainer(buildExpressionContainer(['x', 'y']))
          .expression
      ).notFound
    ).toBe(true)
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
    expect(
      expressionToSimpleString(result.expression as PrioritizedCallExpression)
    ).toBe('(c => c)(d)')
    expect(
      expressionToSimpleString(
        result.parentFunctionExpression as PrioritizedFunctionExpression
      )
    ).toBe('(b => (c => c)(d))')
  })
})
