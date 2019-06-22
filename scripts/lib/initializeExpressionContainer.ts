import buildExpressionContainer from 'scripts/lib/buildExpressionContainer'
import prioritizeExpressionContainer from 'scripts/lib/prioritizeExpressionContainer'
import { ContainerWithState } from 'src/types/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams,
  VariableShorthandNumberParams,
  ConditionalExpressionParams
} from 'src/types/ExpressionParamTypes'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression,
  ConditionalExpression
} from 'src/types/ExpressionTypes'

export default function initializeExpressionContainer(
  expressionParams: VariableExpressionParams
): ContainerWithState<'ready', VariableExpression>
export default function initializeExpressionContainer(
  expressionParams: CallExpressionParams
): ContainerWithState<'ready', CallExpression>
export default function initializeExpressionContainer(
  expressionParams: FunctionExpressionParams
): ContainerWithState<'ready', FunctionExpression>
export default function initializeExpressionContainer(
  expressionParams: ConditionalExpressionParams
): ContainerWithState<'ready', ConditionalExpression>
export default function initializeExpressionContainer(
  expressionParams: VariableShorthandNumberParams
): ContainerWithState<'ready', VariableExpression>
export default function initializeExpressionContainer(
  expressionParams: ExpressionParams
): ContainerWithState<'ready', Expression> {
  return prioritizeExpressionContainer(
    buildExpressionContainer(expressionParams)
  )
}
