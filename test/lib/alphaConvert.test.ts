import alphaConvert from 'src/lib/alphaConvert'
import buildExpressionContainer from 'src/lib/buildExpressionContainer'
import expressionToSimpleString from 'src/lib/expressionToSimpleString'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'

describe('alphaConvert', () => {
  describe('conflict does not exist', () => {
    it('doesn not update the expression', () => {
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
              arg: 'c',
              body: 'd'
            }
          ])
        ).expression
      )
      if ('notFound' in result && result.notFound) {
        throw new Error()
      }
      expect(expressionToSimpleString(alphaConvert(result.expression))).toEqual(
        '(x => (y => (z => x(y(z)))))((c => d))'
      )
    })
  })

  describe('conflict exists', () => {
    it('updates expression', () => {
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
              arg: 'y',
              body: 'z'
            }
          ])
        ).expression
      )
      if ('notFound' in result && result.notFound) {
        throw new Error()
      }
      expect(expressionToSimpleString(alphaConvert(result.expression))).toEqual(
        '(x => (a => (b => x(a(b)))))((y => z))'
      )
    })
  })
})
