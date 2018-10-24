import buildExpressionFromParams from 'src/lib/yc/buildExpressionFromParams'
import { NeedsPrioritizeExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  DefaultCallExpression,
  DefaultExpression,
  DefaultFunctionExpression,
  DefaultVariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function buildExpressionContainer(
  expressionParams: VariableExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultVariableExpression>
export default function buildExpressionContainer(
  expressionParams: CallExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultCallExpression>
export default function buildExpressionContainer(
  expressionParams: FunctionExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultFunctionExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultExpression> {
  return {
    expression: buildExpressionFromParams(expressionParams),
    containerState: 'needsPrioritize',
    previouslyChangedExpressionState: 'default'
  }
}
