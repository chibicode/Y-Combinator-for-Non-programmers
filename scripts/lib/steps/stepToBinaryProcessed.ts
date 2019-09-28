import {
  ExecutableBinaryStatesDistributed,
  StepChild
} from 'src/types/ExpressionTypes'

const stepToBinaryProcessed = (
  e: ExecutableBinaryStatesDistributed
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
    shorthandNumber: e.first.shorthandNumber * e.second.shorthandNumber
  }
}

export default stepToBinaryProcessed
