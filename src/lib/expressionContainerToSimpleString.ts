import expressionToSimpleString from 'src/lib/expressionToSimpleString'
import { ExpressionContainer } from 'src/types/ExpressionContainerTypes'

export default function expressionContainerToSimpleString(
  e: ExpressionContainer,
  { addPriority } = { addPriority: false }
) {
  return expressionToSimpleString(e.expression, { addPriority })
}
