import buildExpressionFromParams from 'src/lib/yc/buildExpressionFromParams'
import { NeedsPrioritizeExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
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
): NeedsPrioritizeExpressionContainer<StepVariable>
export default function buildExpressionContainer(
  expressionParams: CallExpressionParams
): NeedsPrioritizeExpressionContainer<NonExecutableStepCall>
export default function buildExpressionContainer(
  expressionParams: FunctionExpressionParams
): NeedsPrioritizeExpressionContainer<StepFunction>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<StepChild>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<StepChild> {
  return {
    expression: buildExpressionFromParams(expressionParams),
    containerState: 'needsPrioritize',
    previouslyChangedExpressionState: 'default'
  }
}
