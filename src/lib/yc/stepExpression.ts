import {
  ActiveChildExpression,
  ActiveFunctionExpression,
  ActiveVariableExpression,
  ExecutableActiveCallExpression,
  ExecutableActiveFunctionExpression,
  ExecutableActiveVariableExpression,
  ExecutableInactiveCallExpression,
  InactiveCallExpression,
  InactiveChildExpression,
  InactiveFunctionExpression,
  InactiveVariableExpression,
  NonExecutableActiveCallExpression
} from 'src/types/yc/ExpressionTypes'
import {
  isFunctionExpression,
  isVariableExpression
} from './expressionTypeGuards'

const inactiveToActiveHelper = (
  e: InactiveCallExpression
): ExecutableActiveCallExpression => {
  return inactiveToActiveHelper(e)
}

function allInactiveToActiveVariable(
  x: InactiveVariableExpression
): ActiveVariableExpression
function allInactiveToActiveVariable(
  x: InactiveFunctionExpression
): ActiveFunctionExpression
function allInactiveToActiveVariable(
  x: InactiveCallExpression
): NonExecutableActiveCallExpression
function allInactiveToActiveVariable(
  x: InactiveChildExpression
): ActiveChildExpression
function allInactiveToActiveVariable(x: InactiveChildExpression) {
  if (isVariableExpression(x)) {
    return {
      ...x,
      highlightType: 'active'
    }
  } else if (isFunctionExpression(x)) {
    return {
      ...x,
      arg: allInactiveToActiveVariable(x.arg),
      body: allInactiveToActiveVariable(x.body)
    }
  } else {
    return {
      ...x,
      arg: allInactiveToActiveVariable(x.arg),
      func: allInactiveToActiveVariable(x.func)
    }
  }
}

const inactiveToExecutableActiveVariable = (
  x: InactiveVariableExpression
): ExecutableActiveVariableExpression => ({
  ...x,
  highlightType: 'activeEmphasizePriorityOne'
})

const inactiveToExecutableActiveFunctionExpression = (
  x: InactiveFunctionExpression
): ExecutableActiveFunctionExpression => ({
  ...x,
  arg: inactiveToExecutableActiveVariable(x.arg),
  body: allInactiveToActiveVariable(x.body)
})

const inactiveToActive = (
  e: ExecutableInactiveCallExpression
): ExecutableActiveCallExpression => {
  return {
    ...e,
    state: 'active',
    arg: isFunctionExpression(e.arg)
      ? inactiveToExecutableActiveFunctionExpression(e.arg)
      : inactiveToExecutableActiveVariable(e.arg),
    func: inactiveToExecutableActiveFunctionExpression(e.func)
  }
}
