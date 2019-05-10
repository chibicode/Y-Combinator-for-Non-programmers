import { getConflicts, getAllVariables } from 'src/lib/yc/variablesHelper'
import {
  isFunction,
  isVariable,
  isShorthandFunction
} from 'src/lib/yc/expressionTypeGuards'
import { activeFuncArg } from 'src/lib/yc/steps/stepToShowFuncUnbound'
import {
  CallExpression,
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  ShorthandFunctionExpression,
  StepShorthandFunction
} from 'src/types/yc/ExpressionTypes'
import { VariableNamesToNumbersObj } from 'src/lib/yc/variablesHelper'

export function toAlphaConvertDone(
  e: VariableExpression,
  conflicts: VariableNamesToNumbersObj,
  allVariables: VariableNamesToNumbersObj,
  funcSide: boolean
): StepVariable<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: FunctionExpression,
  conflicts: VariableNamesToNumbersObj,
  allVariables: VariableNamesToNumbersObj,
  funcSide: boolean
): StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: ShorthandFunctionExpression,
  conflicts: VariableNamesToNumbersObj,
  allVariables: VariableNamesToNumbersObj,
  funcSide: boolean
): StepShorthandFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: CallExpression,
  conflicts: VariableNamesToNumbersObj,
  allVariables: VariableNamesToNumbersObj,
  funcSide: boolean
): NonExecutableStepCall<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: VariableExpression | FunctionExpression,
  conflicts: VariableNamesToNumbersObj,
  allVariables: VariableNamesToNumbersObj,
  funcSide: boolean
): StepVariable<'alphaConvertDone'> | StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  conflicts: VariableNamesToNumbersObj,
  allVariables: VariableNamesToNumbersObj,
  funcSide: boolean
): StepChild<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  conflicts: VariableNamesToNumbersObj,
  allVariables: VariableNamesToNumbersObj,
  funcSide: boolean
): StepChild<'alphaConvertDone'> {
  if (isVariable(e)) {
    if (funcSide) {
      if (conflicts[e.name] && conflicts[e.name]![e.alphaConvertCount]) {
        const maxAlphaConvertCount = Math.max.apply(
          Math,
          Object.keys(allVariables[e.name]!).map(x => parseInt(x))
        )
        if (e.bound) {
          return {
            ...e,
            alphaConvertCount: maxAlphaConvertCount + 1,
            highlightType: 'conflictResolvedHighlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcBound'
          }
        } else {
          return {
            ...e,
            alphaConvertCount: maxAlphaConvertCount + 1,
            highlightType: 'conflictResolvedHighlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcUnbound'
          }
        }
      } else if (funcSide && !e.bound) {
        return {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        }
      } else {
        return {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcBound'
        }
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toAlphaConvertDone(e.arg, conflicts, allVariables, funcSide),
      body: toAlphaConvertDone(e.body, conflicts, allVariables, funcSide)
    }
  } else if (isShorthandFunction(e)) {
    return {
      ...e,
      highlightType: 'default',
      args: e.args.map(arg =>
        toAlphaConvertDone(arg, conflicts, allVariables, funcSide)
      )
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toAlphaConvertDone(e.arg, conflicts, allVariables, funcSide),
      func: toAlphaConvertDone(e.func, conflicts, allVariables, funcSide)
    }
  }
}

const stepToAlphaConvertDone = (
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'alphaConvertDone'> => {
  const conflicts = getConflicts(e)
  const allVariables = getAllVariables(e)
  return {
    ...e,
    state: 'alphaConvertDone',
    arg: toAlphaConvertDone(e.arg, conflicts, allVariables, false),
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: toAlphaConvertDone(e.func.body, conflicts, allVariables, true)
    }
  }
}

export default stepToAlphaConvertDone
