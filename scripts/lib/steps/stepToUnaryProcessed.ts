import {
  isFunction,
  isVariable,
  isCall,
  isConditional
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/ExpressionTypes'

export default function stepToUnaryProcessed(
  e: VariableExpression
): StepVariable<'default'>
export default function stepToUnaryProcessed(
  e: FunctionExpression
): StepFunction<'default'>
export default function stepToUnaryProcessed(
  e: CallExpression
): NonExecutableStepCall<'default'>
export default function stepToUnaryProcessed(
  e: VariableExpression | FunctionExpression
): StepVariable<'default'> | StepFunction<'default'>
export default function stepToUnaryProcessed(
  e: Expression
): StepChild<'default'>
export default function stepToUnaryProcessed(
  e: Expression
): StepChild<'default'> {
  if (isVariable(e)) {
    if (e.shorthandUnary && e.shorthandNumber !== undefined) {
      return {
        ...e,
        shorthandNumber: e.shorthandNumber > 0 ? e.shorthandNumber - 1 : 0,
        highlightType: 'default',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        shorthandUnary: undefined
      }
    } else {
      return {
        ...e,
        highlightType: 'default',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: stepToUnaryProcessed(e.arg),
      body: stepToUnaryProcessed(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: stepToUnaryProcessed(e.arg),
      func: stepToUnaryProcessed(e.func)
    }
  } else if (isConditional(e)) {
    return {
      ...e,
      state: 'default',
      condition: stepToUnaryProcessed(e.condition),
      trueCase: stepToUnaryProcessed(e.trueCase),
      falseCase: stepToUnaryProcessed(e.falseCase)
    }
  } else {
    throw new Error()
  }
}
