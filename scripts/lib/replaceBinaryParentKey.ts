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
  ConditionalExpression,
  FunctionExpression,
  VariableExpression,
  BinaryExpression
} from 'src/types/ExpressionTypes'

export default function replaceBinaryParentKey(
  expression: VariableExpression,
  key: 'first' | 'second',
  target: BinaryExpression,
  replaceWith: Expression
): VariableExpression
export default function replaceBinaryParentKey(
  expression: FunctionExpression,
  key: 'first' | 'second',
  target: BinaryExpression,
  replaceWith: Expression
): FunctionExpression
export default function replaceBinaryParentKey(
  expression: CallExpression,
  key: 'first' | 'second',
  target: BinaryExpression,
  replaceWith: Expression
): CallExpression
export default function replaceBinaryParentKey(
  expression: ConditionalExpression,
  key: 'first' | 'second',
  target: BinaryExpression,
  replaceWith: Expression
): ConditionalExpression
export default function replaceBinaryParentKey(
  expression: BinaryExpression,
  key: 'first' | 'second',
  target: BinaryExpression,
  replaceWith: Expression
): BinaryExpression
export default function replaceBinaryParentKey(
  expression: VariableExpression | FunctionExpression,
  key: 'first' | 'second',
  target: BinaryExpression,
  replaceWith: Expression
): VariableExpression | FunctionExpression
export default function replaceBinaryParentKey(
  expression: Expression,
  key: 'first' | 'second',
  target: BinaryExpression,
  replaceWith: Expression
): Expression
export default function replaceBinaryParentKey(
  expression: Expression,
  key: 'first' | 'second',
  target: BinaryExpression,
  replaceWith: Expression
): Expression {
  if (isVariable(expression)) {
    return expression
  } else if (isCall(expression)) {
    return {
      ...expression,
      arg: replaceBinaryParentKey(expression.arg, key, target, replaceWith),
      func: replaceBinaryParentKey(expression.func, key, target, replaceWith)
    }
  } else if (isFunction(expression)) {
    return {
      ...expression,
      body: replaceBinaryParentKey(expression.body, key, target, replaceWith)
    }
  } else if (isConditional(expression)) {
    return {
      ...expression,
      condition: replaceBinaryParentKey(
        expression.condition,
        key,
        target,
        replaceWith
      ),
      trueCase: replaceBinaryParentKey(
        expression.trueCase,
        key,
        target,
        replaceWith
      ),
      falseCase: replaceBinaryParentKey(
        expression.falseCase,
        key,
        target,
        replaceWith
      )
    }
  } else if (isBinary(expression)) {
    if (expression === target) {
      return {
        ...expression,
        [key]: replaceWith
      }
    } else {
      return {
        ...expression,
        first: replaceBinaryParentKey(
          expression.first,
          key,
          target,
          replaceWith
        ),
        second: replaceBinaryParentKey(
          expression.second,
          key,
          target,
          replaceWith
        )
      }
    }
  } else {
    throw new Error()
  }
}
