import { StepChild, ExecutableCallBinary } from 'src/types/ExpressionTypes'

const stepToBinaryComputed = (
  e: ExecutableCallBinary
): StepChild<'default'> => {
  return {
    type: 'variable',
    name: 'shorthandNumber',
    bound: true,
    highlightType: 'default',
    topLeftBadgeType: 'none',
    bottomRightBadgeType: 'none',
    emphasizePriority: false,
    argPriorityAgg: [],
    funcPriorityAgg: [],
    shorthandNumber: e.func.shorthandNumber * e.arg.arg.shorthandNumber
  }
}

export default stepToBinaryComputed
