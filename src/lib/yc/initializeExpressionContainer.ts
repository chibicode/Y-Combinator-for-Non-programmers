import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
import { PrioritizedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  PrioritizedCallExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function initializeExpressionContainer(
  expressionParams: VariableExpressionParams
): PrioritizedExpressionContainer<PrioritizedVariableExpression>
export default function initializeExpressionContainer(
  expressionParams: CallExpressionParams
): PrioritizedExpressionContainer<PrioritizedCallExpression>
export default function initializeExpressionContainer(
  expressionParams: FunctionExpressionParams
): PrioritizedExpressionContainer<PrioritizedFunctionExpression>
export default function initializeExpressionContainer(
  expressionParams: ExpressionParams
) {
  return prioritizeExpressionContainer(
    buildExpressionContainer(expressionParams)
  )
}
