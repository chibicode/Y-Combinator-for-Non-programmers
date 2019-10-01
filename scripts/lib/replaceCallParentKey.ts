import {
  isCall,
  isVariable,
  isFunction,
  isConditional,
  isBinary
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression,
  ConditionalExpression,
  BinaryExpression
} from 'src/types/ExpressionTypes'

export default function replaceCallParentKey(
  expression: VariableExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: Expression
): VariableExpression
export default function replaceCallParentKey(
  expression: FunctionExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: Expression
): FunctionExpression
export default function replaceCallParentKey(
  expression: CallExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: Expression
): CallExpression
export default function replaceCallParentKey(
  expression: ConditionalExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: Expression
): ConditionalExpression
export default function replaceCallParentKey(
  expression: BinaryExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: Expression
): BinaryExpression
export default function replaceCallParentKey(
  expression: VariableExpression | FunctionExpression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: Expression
): VariableExpression | FunctionExpression
export default function replaceCallParentKey(
  expression: Expression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: Expression
): Expression
export default function replaceCallParentKey(
  expression: Expression,
  target: CallExpression,
  key: 'func' | 'arg',
  replaceWith: Expression
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
  } else if (isFunction(expression)) {
    return {
      ...expression,
      body: replaceCallParentKey(expression.body, target, key, replaceWith)
    }
  } else if (isConditional(expression)) {
    return {
      ...expression,
      condition: replaceCallParentKey(
        expression.condition,
        target,
        key,
        replaceWith
      ),
      trueCase: replaceCallParentKey(
        expression.trueCase,
        target,
        key,
        replaceWith
      ),
      falseCase: replaceCallParentKey(
        expression.falseCase,
        target,
        key,
        replaceWith
      )
    }
  } else if (isBinary(expression)) {
    return {
      ...expression,
      first: replaceCallParentKey(expression.first, target, key, replaceWith),
      second: replaceCallParentKey(expression.second, target, key, replaceWith)
    }
  } else {
    throw new Error()
  }
}
