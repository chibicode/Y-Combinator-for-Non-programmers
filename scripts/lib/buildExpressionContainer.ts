import buildExpressionFromParams from 'scripts/lib/buildExpressionFromParams'
import { ContainerWithState } from 'src/types/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  ConditionalExpressionParams,
  VariableExpressionParams,
  BinaryExpressionParams
} from 'src/types/ExpressionParamTypes'
import {
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepConditional,
  StepBinary,
  StepVariable
} from 'src/types/ExpressionTypes'

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
  expressionParams: ConditionalExpressionParams
): ContainerWithState<'needsPrioritize', StepConditional>
export default function buildExpressionContainer(
  expressionParams: BinaryExpressionParams
): ContainerWithState<'needsPrioritize', StepBinary>
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
