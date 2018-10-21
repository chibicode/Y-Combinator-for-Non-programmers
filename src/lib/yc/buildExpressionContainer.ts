import buildExpressionFromParams from 'src/lib/yc/buildExpressionFromParams'
import { NeedsPrioritizeExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  DefaultStateCallExpression,
  DefaultStateExpression,
  DefaultStateFunctionExpression,
  DefaultStateVariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function buildExpressionContainer(
  expressionParams: VariableExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateVariableExpression>
export default function buildExpressionContainer(
  expressionParams: CallExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateCallExpression>
export default function buildExpressionContainer(
  expressionParams: FunctionExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateFunctionExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateExpression> {
  return {
    expression: buildExpressionFromParams(expressionParams),
    containerState: 'needsPrioritize',
    previouslyChangedExpressionState: 'default'
  }
}
