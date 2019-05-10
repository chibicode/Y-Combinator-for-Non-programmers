import {
  isCall,
  isVariable,
  isShorthandFunction
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression,
  StepChild,
  ExecutableCall,
  ShorthandFunctionExpression
} from 'src/types/yc/ExpressionTypes'

export default function replaceCallParentKey(
  expression: VariableExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: ExecutableCall | StepChild<'default'>
): VariableExpression
export default function replaceCallParentKey(
  expression: FunctionExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: ExecutableCall | StepChild<'default'>
): FunctionExpression
export default function replaceCallParentKey(
  expression: ShorthandFunctionExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: ExecutableCall | StepChild<'default'>
): ShorthandFunctionExpression
export default function replaceCallParentKey(
  expression: CallExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: ExecutableCall | StepChild<'default'>
): CallExpression
export default function replaceCallParentKey(
  expression: VariableExpression | FunctionExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: ExecutableCall | StepChild<'default'>
): VariableExpression | FunctionExpression
export default function replaceCallParentKey(
  expression: Expression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: ExecutableCall | StepChild<'default'>
): Expression
export default function replaceCallParentKey(
  expression: Expression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: ExecutableCall | StepChild<'default'>
): Expression {
  if (isVariable(expression)) {
    return expression
  } else if (isCall(expression)) {
    if (expression === target) {
      return {
        ...expression,
        [key]: replaceWith
      }
    } else {
      return {
        ...expression,
        arg: replaceCallParentKey(expression.arg, target, key, replaceWith),
        func: replaceCallParentKey(expression.func, target, key, replaceWith)
      }
    }
  } else if (isShorthandFunction(expression)) {
    return expression
  } else {
    return {
      ...expression,
      body: replaceCallParentKey(expression.body, target, key, replaceWith)
    }
  }
}
