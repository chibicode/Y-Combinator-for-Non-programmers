/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ExpressionRunner, {
  ExpressionRunnerProps
} from 'src/components/Yc/ExpressionRunner'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'
import { P } from 'src/components/ContentTags'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import { spaces } from 'src/lib/theme'

export const ExpressionRunnerSimple = ({
  expressionContainer,
  initialState,
  isDone,
  explanationsVisibility,
  showPriorities,
  showAllShowSteps,
  newCaption,
  bottomRightBadgeOverrides,
  highlightOverrides,
  variableSize,
  containerSize
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  isDone: boolean
  showPriorities: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  explanationsVisibility: ExpressionRunnerProps['explanationsVisibility']
  newCaption?: ExpressionRunnerProps['newCaption']
  bottomRightBadgeOverrides?: ExpressionRunnerProps['bottomRightBadgeOverrides']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  variableSize: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hideControls
    hidePriorities={!showPriorities}
    explanationsVisibility={explanationsVisibility}
    showAllShowSteps={showAllShowSteps}
    variableSize={variableSize}
    containerSize={containerSize}
    newCaption={newCaption}
    bottomRightBadgeOverrides={bottomRightBadgeOverrides}
    highlightOverrides={highlightOverrides}
    initializeInstructions={[
      isDone
        ? {
            type: 'stepForwardUntilTheEnd'
          }
        : {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: initialState
          }
    ]}
  />
)

ExpressionRunnerSimple.defaultProps = {
  isDone: false,
  initialState: 'default',
  showPriorities: false,
  explanationsVisibility: 'hidden',
  variableSize: 'lg'
}

export const ExpressionRunnerPlayButtonOnly = ({
  expressionContainer,
  initialState,
  lastAllowedExpressionState,
  skipToTheEnd,
  hideFuncUnboundBadgeOnExplanation,
  showPriorities,
  nextIteration,
  showAllShowSteps,
  isFastForwardPlayButton,
  skipAlphaConvert,
  variableSize,
  containerSize
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  showPriorities: boolean
  lastAllowedExpressionState?: CallStates
  nextIteration?: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  isFastForwardPlayButton: boolean
  skipAlphaConvert: boolean
  variableSize: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
}) => (
  <ExpressionRunner
    isFastForwardPlayButton={isFastForwardPlayButton}
    expressionContainer={expressionContainer}
    hidePriorities={!showPriorities}
    resetIndex
    showAllShowSteps={showAllShowSteps}
    hideFuncUnboundBadgeOnExplanation={hideFuncUnboundBadgeOnExplanation}
    skipToTheEnd={skipToTheEnd}
    hideRemainingTime
    variableSize={variableSize}
    containerSize={containerSize}
    skipAlphaConvert={skipAlphaConvert}
    explanationsVisibility="hiddenInitialPausedOnly"
    lastAllowedExpressionState={lastAllowedExpressionState}
    initializeInstructions={
      nextIteration
        ? [
            {
              type: 'nextIteration'
            },
            {
              type: 'stepForwardUntilPreviouslyChangedExpressionState',
              state: initialState
            }
          ]
        : [
            {
              type: 'stepForwardUntilPreviouslyChangedExpressionState',
              state: initialState
            }
          ]
    }
  />
)

ExpressionRunnerPlayButtonOnly.defaultProps = {
  initialState: 'default',
  skipToTheEnd: true,
  hideFuncUnboundBadgeOnExplanation: true,
  showPriorities: false,
  isFastForwardPlayButton: false,
  skipAlphaConvert: false,
  variableSize: 'lg'
}

export const ExpressionRunnerPairSimple = ({
  expressionContainer,
  initialState,
  finalIsDone,
  finalState,
  showPriorities,
  firstInitializeInstructions,
  secondInitializeInstructions
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  finalIsDone: boolean
  finalState?: CallStates
  showPriorities: boolean
  firstInitializeInstructions?: ExpressionRunnerProps['initializeInstructions']
  secondInitializeInstructions?: ExpressionRunnerProps['initializeInstructions']
}) => (
  <>
    <ExpressionRunner
      expressionContainer={expressionContainer}
      hideControls
      hidePriorities={!showPriorities}
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={
        firstInitializeInstructions
          ? firstInitializeInstructions
          : [
              {
                type: 'stepForwardUntilPreviouslyChangedExpressionState',
                state: initialState
              }
            ]
      }
    />
    <P
      css={css`
        text-align: center;
        margin: ${spaces('-0.75')} 0 ${spaces('-0.5')};
      `}
    >
      {finalState || finalIsDone || secondInitializeInstructions ? (
        <>
          <Emoji size="mdlg">⬇️</Emoji>
        </>
      ) : (
        <>
          <Emoji>🔽</Emoji>{' '}
          <H args={{ name: 'afterPlay' }} highlightType="none" />{' '}
          <Emoji>🔽</Emoji>
        </>
      )}
    </P>
    <ExpressionRunner
      expressionContainer={expressionContainer}
      hideControls
      hidePriorities={!showPriorities}
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={
        secondInitializeInstructions
          ? secondInitializeInstructions
          : [
              finalState
                ? {
                    type: 'stepForwardUntilPreviouslyChangedExpressionState',
                    state: finalState
                  }
                : {
                    type: 'stepForwardUntilTheEnd'
                  }
            ]
      }
    />
  </>
)

ExpressionRunnerPairSimple.defaultProps = {
  initialState: 'default',
  finalIsDone: false,
  showPriorities: false
}

export const ExpressionRunnerSingleStep = ({
  expressionContainer,
  initialState,
  finalState,
  hideFuncUnboundBadgeOnExplanation,
  showPriorities,
  explanationsVisibility,
  showAllShowSteps
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  finalState: CallStates
  hideFuncUnboundBadgeOnExplanation: boolean
  showPriorities: boolean
  explanationsVisibility: ExpressionRunnerProps['explanationsVisibility']
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities={!showPriorities}
    hideFuncUnboundBadgeOnExplanation={hideFuncUnboundBadgeOnExplanation}
    hidePlayButton
    explanationsVisibility={explanationsVisibility}
    variableSize={'lg'}
    resetIndex
    lastAllowedExpressionState={finalState}
    showAllShowSteps={showAllShowSteps}
    initializeInstructions={[
      {
        type: 'stepForwardUntilPreviouslyChangedExpressionState',
        state: initialState
      }
    ]}
  />
)

ExpressionRunnerSingleStep.defaultProps = {
  hideFuncUnboundBadgeOnExplanation: false,
  showPriorities: false,
  explanationsVisibility: 'hiddenInitial'
}
