import {
  isCall,
  isExecutableCall,
  isFunction
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression
} from 'src/types/yc/ExpressionTypes'

export interface FindResult {
  readonly callParent?: CallExpression
  readonly funcParent?: FunctionExpression
  readonly callParentKey?: 'func' | 'arg'
  readonly notFound?: boolean
}

interface HelperStackItem {
  readonly expression: CallExpression
  readonly callParent?: CallExpression
  readonly callParentKey?: 'func' | 'arg'
}

const notFound: FindResult = {
  notFound: true
}

/**
 * Run DFS on callExpression to find ExecutableCallExpression
 * and its parent information (could be missing if root expression).
 * DFS looks for functions first before arguments.
 */
function helper(callExpression: CallExpression): FindResult {
  const stack: HelperStackItem[] = [{ expression: callExpression }]

  while (stack.length > 0) {
    const current = stack.pop()
    if (current && current.expression) {
      if (current.expression && isExecutableCall(current.expression)) {
        return {
          callParent: current.callParent,
          callParentKey: current.callParentKey
        }
      }

      if (isCall(current.expression.func)) {
        stack.push({
          expression: current.expression.func,
          callParentKey: 'func',
          callParent: current.expression
        })
      }

      if (isCall(current.expression.arg)) {
        stack.push({
          expression: current.expression.arg,
          callParentKey: 'arg',
          callParent: current.expression
        })
      }
    }
  }
  return notFound
}

export default function findNextCallExpressionAndParent(
  expression: Expression
): FindResult {
  if (isCall(expression)) {
    return helper(expression)
  } else if (isFunction(expression)) {
    let currentExpression: Expression = expression
    let previousExpression: FunctionExpression | null = null
    while (isFunction(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (isCall(currentExpression)) {
      const helperResult = helper(currentExpression)
      if (helperResult.callParent) {
        return helperResult
      } else if (previousExpression) {
        return {
          funcParent: previousExpression
        }
      }
    }
  }
  return notFound
}
