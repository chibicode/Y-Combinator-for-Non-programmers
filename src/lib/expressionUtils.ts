import produce from 'immer'
import cloneDeep from 'lodash/cloneDeep'
import difference from 'lodash/difference'
import union from 'lodash/union'
import uniq from 'lodash/uniq'
import zipObject from 'lodash/zipObject'

import {
  CallExpression,
  Expression,
  FunctionExpression,
  ImmediatelyExecutableCallExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'

const betaReduceRecurser = ({
  expression,
  from,
  to
}: {
  expression: Expression
  from: string
  to: VariableExpression | FunctionExpression
}): Expression => {
  if (expression.type === 'variable') {
    if (expression.value === from) {
      return to
    } else {
      return expression
    }
  } else if (expression.type === 'call') {
    expression.value.arg = betaReduceRecurser({
      expression: expression.value.arg,
      from,
      to
    })
    expression.value.func = betaReduceRecurser({
      expression: expression.value.func,
      from,
      to
    })
    return expression
  } else {
    expression.value.body = betaReduceRecurser({
      expression: expression.value.body,
      from,
      to
    })
    return expression
  }
}

export const betaReduce = (
  expression: ImmediatelyExecutableCallExpression
): Expression => {
  const clonedExpression = cloneDeep(expression)
  return betaReduceRecurser({
    expression: clonedExpression.value.func.value.body,
    from: clonedExpression.value.func.value.arg.value,
    to: clonedExpression.value.arg
  })
}

export const resetExpression = (expression: Expression) => {
  return produce<Expression>(expression, draftExpression => {
    draftExpression.state = 'default'
    if (draftExpression.type === 'function') {
      if (draftExpression.value.arg) {
        resetExpression(draftExpression.value.arg)
      }
      if (draftExpression.value.body) {
        resetExpression(draftExpression.value.body)
      }
    } else if (draftExpression.type === 'call') {
      delete draftExpression.priority
      if (draftExpression.value.arg) {
        resetExpression(draftExpression.value.arg)
      }
      if (draftExpression.value.func) {
        resetExpression(draftExpression.value.func)
      }
    }
  })
}
