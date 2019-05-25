import { isCall, isVariable, isFunction } from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  ConditionalExpression,
  FunctionExpression,
  VariableExpression,
  StepChild,
  ExecutableCall
} from 'src/types/ExpressionTypes'

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
  expression: ConditionalExpression,
  target: FunctionExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): ConditionalExpression
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
  } else if (isFunction(expression)) {
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
  } else {
    return {
      ...expression,
      condition: replaceFuncParentKey(
        expression.condition,
        target,
        replaceWith
      ),
      trueCase: replaceFuncParentKey(expression.trueCase, target, replaceWith),
      falseCase: replaceFuncParentKey(expression.falseCase, target, replaceWith)
    }
  }
}
