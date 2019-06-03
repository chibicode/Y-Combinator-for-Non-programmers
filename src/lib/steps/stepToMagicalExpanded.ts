import { isFunction, isVariable, isCall } from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  VariableShorthandBinary,
  StepVariableShorthandBinary,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  ConditionalExpression,
  StepConditional,
  ExecutableCallMagical,
  MagicalVariable,
  StepMagicalVariable
} from 'src/types/ExpressionTypes'
import prioritizeExpression from 'src/lib/prioritizeExpression'
import buildMagicalStepFunction from 'src/lib/buildMagicalStepFunction'

function toMagicalExpanded(
  e: VariableShorthandBinary
): StepVariableShorthandBinary<'magicalExpanded'>
function toMagicalExpanded(
  e: MagicalVariable
): StepMagicalVariable<'magicalExpanded'>
function toMagicalExpanded(
  e: VariableExpression
): StepVariable<'magicalExpanded'>
function toMagicalExpanded(
  e: FunctionExpression
): StepFunction<'magicalExpanded'>
function toMagicalExpanded(
  e: ConditionalExpression
): StepConditional<'magicalExpanded'>
function toMagicalExpanded(
  e: CallExpression
): NonExecutableStepCall<'magicalExpanded'>
function toMagicalExpanded(
  e: VariableExpression | FunctionExpression
): StepVariable<'magicalExpanded'> | StepFunction<'magicalExpanded'>
function toMagicalExpanded(e: Expression): StepChild<'magicalExpanded'>
function toMagicalExpanded(e: Expression): StepChild<'magicalExpanded'> {
  if (isVariable(e)) {
    return {
      ...e,
      highlightType: 'active',
      topLeftBadgeType: 'none',
      bottomRightBadgeType: 'none'
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toMagicalExpanded(e.arg),
      body: toMagicalExpanded(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toMagicalExpanded(e.arg),
      func: toMagicalExpanded(e.func)
    }
  } else {
    return {
      ...e,
      state: 'default',
      condition: toMagicalExpanded(e.condition),
      trueCase: toMagicalExpanded(e.trueCase),
      falseCase: toMagicalExpanded(e.falseCase)
    }
  }
}

export default function stepToMagicalExpanded(
  e: ExecutableCallMagical
): ExecutableStepCallRegular<'magicalExpanded'> {
  const result: ExecutableStepCallRegular<'magicalExpanded'> = {
    state: 'magicalExpanded',
    func: buildMagicalStepFunction(e.func.magicalType),
    type: 'call',
    priority: 0,
    arg: toMagicalExpanded(e.arg)
  }

  return prioritizeExpression<ExecutableStepCallRegular<'magicalExpanded'>>(
    result
  )
}
