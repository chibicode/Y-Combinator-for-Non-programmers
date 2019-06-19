import {
  SteppedExpressionContainer,
  ExpressionContainer,
  ExpressionContainerStates
} from 'src/types/ExpressionContainerTypes'
import { VariableExpression } from 'src/types/ExpressionTypes'
import { VariableNames } from 'src/types/VariableNames'
import { allMaxWidths } from 'src/lib/theme/maxWidths'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  hideBottomRightBadges: boolean
  variableSize: 'sm' | 'md' | 'lg' | 'xs' | 'xxs'
  isDoneOrReady: boolean
  bottomRightBadgeOverrides: { [key in VariableNames]?: string }
  highlightOverrides: {
    [key in VariableNames]?: VariableExpression['highlightType']
  }
  started: boolean
  highlightOverrideActiveAfterStart: boolean
  highlightOverridesCallArgAndFuncUnboundOnly: boolean
  showOnlyFocused: boolean
  argPriorityAggHighlights: readonly number[]
  funcPriorityAggHighlights: readonly number[]
  highlightFunctions: boolean
  highlightAllChildren: boolean
  highlightNumber?: number
}

export type InitializeInstruction =
  | {
      type: 'stepForwardUntilContainerState'
      state: ExpressionContainerStates
    }
  | {
      type: 'stepForwardUntilPreviouslyChangedExpressionState'
      state: ExpressionContainer['previouslyChangedExpressionState']
    }
  | {
      type: 'nextIteration'
    }
  | {
      type: 'stepForwardUntilTheEnd'
    }

export interface ExpressionRunnerProps {
  expressionContainer: SteppedExpressionContainer
  hidePriorities: ExpressionRunnerContextProps['hidePriorities']
  hideBottomRightBadges: ExpressionRunnerContextProps['hideBottomRightBadges']
  hideControls: boolean
  explanationsVisibility:
    | 'visible'
    | 'hidden'
    | 'hiddenInitialPausedOnly'
    | 'hiddenInitialAndLastPausedOnly'
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: readonly InitializeInstruction[]
  maxStepsAllowed?: number
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  containerSize: keyof typeof allMaxWidths
  resetIndex: boolean
  hidePlayButton?: boolean
  speed: number
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  highlightOverridesCallArgAndFuncUnboundOnly: boolean
  bottomRightBadgeOverrides: ExpressionRunnerContextProps['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerContextProps['highlightOverrides']
  caption?: React.ReactNode
  highlightOverrideActiveAfterStart: boolean
  showOnlyFocused: ExpressionRunnerContextProps['showOnlyFocused']
  argPriorityAggHighlights: readonly number[]
  funcPriorityAggHighlights: readonly number[]
  highlightFunctions: boolean
  superFastForward: boolean
  highlightNumber?: number
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  hideBottomRightBadges: false,
  variableSize: 'sm',
  isDoneOrReady: false,
  started: false,
  bottomRightBadgeOverrides: {},
  highlightOverrides: {},
  highlightOverrideActiveAfterStart: false,
  highlightOverridesCallArgAndFuncUnboundOnly: false,
  showOnlyFocused: false,
  argPriorityAggHighlights: [],
  funcPriorityAggHighlights: [],
  highlightFunctions: false,
  highlightAllChildren: false
}
