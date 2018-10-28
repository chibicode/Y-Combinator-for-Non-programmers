// import betaReduce from 'src/lib/yc/betaReduce'
// import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
// import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
// import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
// import expressionToSimpleString from 'test/helpers/expressionToSimpleString'

// describe('betaReduce', () => {
//   it('beta reduces simple expression', () => {
//     const result = findNextCallExpressionAndParent(
//       prioritizeExpressionContainer(
//         buildExpressionContainer([
//           {
//             arg: 'x',
//             body: 'x'
//           },
//           'y'
//         ])
//       ).expression
//     )
//     if ('notFound' in result && result.notFound) {
//       throw new Error()
//     }
//     expect(expressionToSimpleString(betaReduce(result.expression))).toBe('y')
//   })

//   it('beta reduces complex expression', () => {
//     const result = findNextCallExpressionAndParent(
//       prioritizeExpressionContainer(
//         buildExpressionContainer([
//           {
//             arg: 'x',
//             body: {
//               arg: 'y',
//               body: {
//                 arg: 'z',
//                 body: ['x', ['y', 'z']]
//               }
//             }
//           },
//           {
//             arg: 'a',
//             body: 'a'
//           },
//           {
//             arg: 'b',
//             body: 'b'
//           },
//           'c'
//         ])
//       ).expression
//     )
//     if ('notFound' in result && result.notFound) {
//       throw new Error()
//     }
//     expect(expressionToSimpleString(betaReduce(result.expression))).toEqual(
//       '(y => (z => (a => a)(y(z))))'
//     )
//   })
// })
