import buildExpressionFromParams from 'src/lib/yc/buildExpressionFromParams'
import { NeedsPrioritizeExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  InactiveCallExpression,
  InactiveExpression,
  InactiveFunctionExpression,
  InactiveVariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function buildExpressionContainer(
  expressionParams: VariableExpressionParams
): NeedsPrioritizeExpressionContainer<InactiveVariableExpression>
export default function buildExpressionContainer(
  expressionParams: CallExpressionParams
): NeedsPrioritizeExpressionContainer<InactiveCallExpression>
export default function buildExpressionContainer(
  expressionParams: FunctionExpressionParams
): NeedsPrioritizeExpressionContainer<InactiveFunctionExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<InactiveExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<InactiveExpression> {
  return {
    expression: buildExpressionFromParams(expressionParams),
    containerState: 'needsPrioritize',
    previouslyChangedExpressionState: 'inactive'
  }
}
