import expressionToSimpleString from 'src/lib/yc/expressionToSimpleString'
import { ExpressionContainer } from 'src/types/ExpressionContainerTypes'

export default function expressionContainerToSimpleString(
  e: ExpressionContainer,
  {
    addPriority,
    addPriorityAgg
  }: {
    addPriority?: boolean
    addPriorityAgg?: boolean
  } = { addPriority: false, addPriorityAgg: false }
) {
  return expressionToSimpleString(e.expression, { addPriority, addPriorityAgg })
}
