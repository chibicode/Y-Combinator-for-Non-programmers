import {
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  StepChild,
  CallExpression,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepVariableShorthandNonUnaryNumber,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableShorthandUnaryNumber
} from 'src/types/yc/ExpressionTypes'
import {
  isFunction,
  isVariable,
  isVariableShorthandUnaryNumber
} from 'src/lib/yc/expressionTypeGuards'
import processUnaryNumber from 'src/lib/yc/processUnaryNumber'

function toBetaReduceUnaryExecuted(
  e: VariableShorthandUnaryNumber
): StepVariableShorthandNonUnaryNumber<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: VariableExpression
): StepVariable<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: FunctionExpression
): StepFunction<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: CallExpression
): NonExecutableStepCall<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: VariableExpression | FunctionExpression
):
  | StepVariable<'betaReducePreviewUnaryExecuted'>
  | StepFunction<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: Expression
): StepChild<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: Expression
): StepChild<'betaReducePreviewUnaryExecuted'> {
  if (isVariable(e)) {
    if (isVariableShorthandUnaryNumber(e)) {
      return processUnaryNumber(e)
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toBetaReduceUnaryExecuted(e.arg),
      body: toBetaReduceUnaryExecuted(e.body)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toBetaReduceUnaryExecuted(e.arg),
      func: toBetaReduceUnaryExecuted(e.func)
    }
  }
}

const stepToBetaReduceUnaryExecuted = (
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'betaReducePreviewUnaryExecuted'> => ({
  ...e,
  state: 'betaReducePreviewUnaryExecuted',
  arg: toBetaReduceUnaryExecuted(e.arg),
  func: toBetaReduceUnaryExecuted(e.func)
})

export default stepToBetaReduceUnaryExecuted
