import buildExpressionContainer from 'src/lib/yc/buildExpressionContainer'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
import { ContainerWithState } from 'src/types/yc/ExpressionContainerTypes'
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
): ContainerWithState<'prioritized', VariableExpression>
export default function initializeExpressionContainer(
  expressionParams: CallExpressionParams
): ContainerWithState<'prioritized', CallExpression>
export default function initializeExpressionContainer(
  expressionParams: FunctionExpressionParams
): ContainerWithState<'prioritized', FunctionExpression>
export default function initializeExpressionContainer(
  expressionParams: ExpressionParams
): ContainerWithState<'prioritized', Expression> {
  return prioritizeExpressionContainer(
    buildExpressionContainer(expressionParams)
  )
}
