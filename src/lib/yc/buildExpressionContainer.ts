import buildExpressionFromParams from 'src/lib/yc/buildExpressionFromParams'
import { ContainerWithState } from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable
} from 'src/types/yc/ExpressionTypes'

export default function buildExpressionContainer(
  expressionParams: VariableExpressionParams
): ContainerWithState<'needsPrioritize', StepVariable>
export default function buildExpressionContainer(
  expressionParams: CallExpressionParams
): ContainerWithState<'needsPrioritize', NonExecutableStepCall>
export default function buildExpressionContainer(
  expressionParams: FunctionExpressionParams
): ContainerWithState<'needsPrioritize', StepFunction>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): ContainerWithState<'needsPrioritize', StepChild>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): ContainerWithState<'needsPrioritize', StepChild> {
  return {
    expression: buildExpressionFromParams(expressionParams),
    containerState: 'needsPrioritize',
    previouslyChangedExpressionState: 'default'
  }
}
