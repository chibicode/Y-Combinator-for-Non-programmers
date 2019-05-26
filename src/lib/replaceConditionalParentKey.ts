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

export default function replaceConditionalParentKey(
  expression: VariableExpression,
  target: ConditionalExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): VariableExpression
export default function replaceConditionalParentKey(
  expression: FunctionExpression,
  target: ConditionalExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): FunctionExpression
export default function replaceConditionalParentKey(
  expression: CallExpression,
  target: ConditionalExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): CallExpression
export default function replaceConditionalParentKey(
  expression: ConditionalExpression,
  target: ConditionalExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): ConditionalExpression
export default function replaceConditionalParentKey(
  expression: VariableExpression | FunctionExpression,
  target: ConditionalExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): VariableExpression | FunctionExpression
export default function replaceConditionalParentKey(
  expression: Expression,
  target: ConditionalExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): Expression
export default function replaceConditionalParentKey(
  expression: Expression,
  target: ConditionalExpression,
  replaceWith: ExecutableCall | StepChild<'default'>
): Expression {
  if (isVariable(expression)) {
    return expression
  } else if (isCall(expression)) {
    return {
      ...expression,
      arg: replaceConditionalParentKey(expression.arg, target, replaceWith),
      func: replaceConditionalParentKey(expression.func, target, replaceWith)
    }
  } else if (isFunction(expression)) {
    return {
      ...expression,
      body: replaceConditionalParentKey(expression.body, target, replaceWith)
    }
  } else {
    if (expression === target) {
      return {
        ...expression,
        condition: replaceWith
      }
    } else {
      return {
        ...expression,
        condition: replaceConditionalParentKey(
          expression.condition,
          target,
          replaceWith
        ),
        trueCase: replaceConditionalParentKey(
          expression.trueCase,
          target,
          replaceWith
        ),
        falseCase: replaceConditionalParentKey(
          expression.falseCase,
          target,
          replaceWith
        )
      }
    }
  }
}
