// import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
// import { Expression } from 'src/types/yc/ExpressionTypes'

// export default function expressionToSimpleString(
//   expression: Expression,
//   {
//     addPriority,
//     addPriorityAgg
//   }: {
//     addPriority?: boolean
//     addPriorityAgg?: boolean
//   } = { addPriority: false, addPriorityAgg: false }
// ): string {
//   if (isVariable(expression)) {
//     if (addPriorityAgg) {
//       const str: string[] = []
//       str.push('[')
//       str.push(expression.funcPriorityAgg.join(','))
//       str.push(expression.name)
//       str.push(expression.argPriorityAgg.join(','))
//       str.push(']')
//       return str.join('')
//     } else {
//       return expression.name
//     }
//   } else if (isCall(expression)) {
//     const func = expressionToSimpleString(expression.func, {
//       addPriority,
//       addPriorityAgg
//     })
//     const priority = addPriority ? `${expression.priority}` : ''
//     const arg = expressionToSimpleString(expression.arg, {
//       addPriority,
//       addPriorityAgg
//     })
//     return `${func}(${priority}${arg})`
//   } else {
//     const arg = expressionToSimpleString(expression.arg, {
//       addPriority,
//       addPriorityAgg
//     })
//     const body = expressionToSimpleString(expression.body, {
//       addPriority,
//       addPriorityAgg
//     })
//     return `(${arg} => ${body})`
//   }
// }
