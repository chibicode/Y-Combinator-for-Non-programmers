import produce, { DraftObject } from 'immer'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import resetExpressionContainer from 'src/lib/resetExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'
import {
  DoneExpressionContainer,
  ExpressionContainer,
  isNeedsResetExpressionContainer,
  isPrioritizedExpressionContainer,
  NeedsResetExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import {
  PrioritizedCallExpression,
  PrioritizedFunctionExpression
} from 'src/types/PrioritizedExpressionTypes'

export default function stepExpressionContainer(
  e: NeedsResetExpressionContainer
): PrioritizedExpressionContainer
export default function stepExpressionContainer(
  e: PrioritizedExpressionContainer
): PrioritizedExpressionContainer | DoneExpressionContainer
export default function stepExpressionContainer(e: ExpressionContainer) {
  if (isNeedsResetExpressionContainer(e)) {
    return prioritizeExpressionContainer(resetExpressionContainer(e))
  } else if (isPrioritizedExpressionContainer(e)) {
    return produce<PrioritizedExpressionContainer>(e, draftContainer => {
      const nextCallExpressionAndParent = findNextCallExpressionAndParent<
        DraftObject<PrioritizedCallExpression>,
        DraftObject<ImmediatelyExecutableCallExpression>,
        DraftObject<PrioritizedFunctionExpression>
      >(draftContainer.expression)
      if (nextCallExpressionAndParent.notFound) {
        return {
          ...e,
          done: true
        }
      } else {
        switch (nextCallExpressionAndParent.expression.state) {
          case 'default': {
            nextCallExpressionAndParent.expression.state = 'readyToHighlight'
          }
        }
      }
    })
  } else {
    throw new Error('Expression must be prioritized')
  }
}
