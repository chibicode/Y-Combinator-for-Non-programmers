import {
  isCallExpression,
  isExecutableCallExpression,
  isFunctionExpression
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCallExpression,
  Expression,
  FunctionExpression
} from 'src/types/yc/ExpressionTypes'

export interface FindResult {
  readonly expression?: ExecutableCallExpression
  readonly callParent?: CallExpression
  readonly funcParent?: FunctionExpression
  readonly callParentKey?: 'func' | 'arg'
}

const NOT_FOUND: FindResult = {}

interface HelperStackItem {
  readonly expression: CallExpression
  readonly callParent?: CallExpression
  readonly callParentKey?: 'func' | 'arg'
}

function helper(expression: CallExpression): FindResult {
  const stack: HelperStackItem[] = [{ expression }]
  while (stack.length > 0) {
    const current = stack.pop()
    if (current && current.expression) {
      if (
        current.expression &&
        isExecutableCallExpression(current.expression)
      ) {
        return {
          expression: current.expression,
          callParent: current.callParent,
          callParentKey: current.callParentKey
        }
      }

      if (isCallExpression(current.expression.func)) {
        stack.push({
          expression: current.expression.func,
          callParentKey: 'func',
          callParent: current.expression
        })
      }

      if (isCallExpression(current.expression.arg)) {
        stack.push({
          expression: current.expression.arg,
          callParentKey: 'arg',
          callParent: current.expression
        })
      }
    }
  }
  return NOT_FOUND
}

export default function findNextCallExpressionAndParent(
  expression: Expression
): FindResult {
  if (isCallExpression(expression)) {
    return helper(expression)
  } else if (isFunctionExpression(expression)) {
    let currentExpression: Expression = expression
    let previousExpression: Expression = expression
    while (isFunctionExpression(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (isCallExpression(currentExpression)) {
      const helperResult = helper(currentExpression)
      if (helperResult.callParent) {
        return helperResult
      } else {
        return {
          funcParent: previousExpression,
          expression: helperResult.expression
        }
      }
    } else {
      return NOT_FOUND
    }
  } else {
    return NOT_FOUND
  }
}
