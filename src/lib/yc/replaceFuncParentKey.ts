import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression,
  StepChild,
  ExecutableCall
} from 'src/types/yc/ExpressionTypes'

export default function replaceFuncParentKey(
  expression: VariableExpression,
  target: FunctionExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): VariableExpression
export default function replaceFuncParentKey(
  expression: FunctionExpression,
  target: FunctionExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): FunctionExpression
export default function replaceFuncParentKey(
  expression: CallExpression,
  target: FunctionExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): CallExpression
export default function replaceFuncParentKey(
  expression: VariableExpression | FunctionExpression,
  target: FunctionExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): VariableExpression | FunctionExpression
export default function replaceFuncParentKey(
  expression: Expression,
  target: FunctionExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): Expression
export default function replaceFuncParentKey(
  expression: Expression,
  target: FunctionExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): Expression {
  if (isVariable(expression)) {
    return expression
  } else if (isCall(expression)) {
    return {
      ...expression,
      arg: replaceFuncParentKey(expression.arg, target, replaceWith),
      func: replaceFuncParentKey(expression.func, target, replaceWith)
    }
  } else {
    if (expression === target) {
      return {
        ...expression,
        body: replaceWith
      }
    } else {
      return {
        ...expression,
        body: replaceFuncParentKey(expression.body, target, replaceWith)
      }
    }
  }
}
