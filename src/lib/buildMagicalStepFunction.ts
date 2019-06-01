import magicalVariableName from 'src/lib/magicalVariableName'
import buildExpressionFromParams from 'src/lib/buildExpressionFromParams'
import prioritizeExpression from 'src/lib/prioritizeExpression'
import {
  StepFunction,
  StepVariable,
  StepConditional
} from 'src/types/ExpressionTypes'

const buildMagicalStepFunction = (): StepFunction<'magicalExpanded'> => {
  const variable = (bound: boolean): StepVariable<'magicalExpanded'> => {
    return {
      type: 'variable',
      bound,
      emphasizePriority: true,
      argPriorityAgg: [],
      funcPriorityAgg: [],
      name: magicalVariableName,
      isMagical: false,
      highlightType: 'highlighted',
      topLeftBadgeType: 'none',
      bottomRightBadgeType: 'none'
    }
  }
  const arg: StepVariable<'magicalExpanded'> = variable(false)

  const body: StepConditional<'magicalExpanded'> = {
    type: 'conditional',
    checkType: 'isZero',
    condition: {
      ...variable(true),
      shorthandUnary: 'pred'
    },
    priority: 0,
    state: 'default',
    trueCase: {
      ...buildExpressionFromParams({
        shorthandNumber: 1
      }),
      highlightType: 'highlighted'
    },
    falseCase: {
      type: 'call',
      state: 'default',
      priority: 0,
      func: {
        ...buildExpressionFromParams('question'),
        highlightType: 'highlighted'
      },
      arg: {
        type: 'call',
        state: 'default',
        priority: 0,
        func: {
          type: 'variable',
          bound: true,
          emphasizePriority: false,
          name: 'magical',
          argPriorityAgg: [],
          funcPriorityAgg: [],
          highlightType: 'highlighted',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none',
          isMagical: true
        },
        arg: {
          ...variable(true),
          shorthandUnary: 'pred'
        }
      }
    }
  }

  const func: StepFunction<'magicalExpanded'> = {
    type: 'function',
    arg,
    body
  }

  return prioritizeExpression(func)
}

export default buildMagicalStepFunction
