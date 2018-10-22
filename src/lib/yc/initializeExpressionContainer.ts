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
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function initializeExpressionContainer(
  expressionParams: VariableExpressionParams
): PrioritizedExpressionContainer<VariableExpression>
export default function initializeExpressionContainer(
  expressionParams: CallExpressionParams
): PrioritizedExpressionContainer<CallExpression>
export default function initializeExpressionContainer(
  expressionParams: FunctionExpressionParams
): PrioritizedExpressionContainer<FunctionExpression>
export default function initializeExpressionContainer(
  expressionParams: ExpressionParams
): PrioritizedExpressionContainer<Expression> {
  return prioritizeExpressionContainer(
    buildExpressionContainer(expressionParams)
  )
}
