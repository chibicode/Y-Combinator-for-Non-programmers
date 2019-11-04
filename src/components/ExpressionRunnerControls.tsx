/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import H from 'src/components/H'
import { colors, spaces, fontSizes } from 'src/lib/theme'
import Emoji from 'src/components/Emoji'
import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'
import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import locale from 'src/lib/locale'

interface ExpressionRunnerControlsProps {
  canStepForward: boolean
  canStepBackward: boolean
  isRunning: boolean
  showRunButton: boolean
  skipToTheEnd: boolean
  hideForwardButton: boolean
  onNextClick: () => void
  onPreviousClick: () => void
  onAutoClick: () => void
  onResetClick: () => void
  onSkipToTheEndClick: () => void
  onPauseClick: () => void
  convert: ExpressionRunnerProps['convert']
}

const noOp = () => {
  return
}

const ButtonPlaceholder = ({
  width,
  flex
}: {
  width?: number
  flex?: number
}) => (
  <div
    css={[
      width &&
        css`
          width: ${width}%;
        `,
      flex &&
        css`
          /* Same border as the button */
          border: 2px solid transparent;
          flex: ${flex};
        `
    ]}
  />
)

const ExpressionRunnerControls = ({
  canStepForward,
  canStepBackward,
  onNextClick,
  onPreviousClick,
  showRunButton,
  isRunning,
  onAutoClick,
  onResetClick,
  onPauseClick,
  onSkipToTheEndClick,
  skipToTheEnd,
  convert,
  hideForwardButton
}: ExpressionRunnerControlsProps) => {
  const centerButtonWidth = convert ? 66 : 48
  const sideButtonsWidth = (100 - centerButtonWidth) / 2 - 2
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin: ${spaces(1)} -2px 0 -2px;
      `}
    >
      {showRunButton ? (
        <>
          {!isRunning && canStepBackward && !skipToTheEnd ? (
            <ExpressionRunnerButton
              onClick={onPreviousClick}
              css={css`
                width: ${sideButtonsWidth}%;
              `}
            >
              <Emoji>⬅</Emoji>
            </ExpressionRunnerButton>
          ) : (
            <ButtonPlaceholder width={sideButtonsWidth} />
          )}
        </>
      ) : canStepBackward ? (
        <ExpressionRunnerButton
          onClick={onPreviousClick}
          css={css`
            flex: 1;
          `}
        >
          <H args={{ name: 'previous' }} />
        </ExpressionRunnerButton>
      ) : (
        <ButtonPlaceholder flex={1} />
      )}
      {showRunButton && (
        <ExpressionRunnerButton
          onClick={
            canStepForward
              ? skipToTheEnd
                ? onSkipToTheEndClick
                : isRunning
                ? onPauseClick
                : onAutoClick
              : onResetClick
          }
          css={[
            css`
              width: ${centerButtonWidth}%;
            `,
            canStepForward &&
              !isRunning &&
              css`
                background: ${colors('yellow100')};
              `,
            !canStepForward &&
              css`
                background: ${colors('pink50')};
              `,
            convert &&
              locale === 'en' &&
              css`
                font-size: ${fontSizes(0.75)};
              `
          ]}
        >
          {canStepForward ? (
            isRunning ? (
              <H args={{ name: 'pause' }} highlightType="none" />
            ) : skipToTheEnd ? (
              convert ? (
                <H args={{ name: 'convertToMathbox' }} highlightType="none" />
              ) : (
                <H args={{ name: 'run' }} highlightType="none" />
              )
            ) : (
              <H args={{ name: 'runAndShowAllSteps' }} highlightType="none" />
            )
          ) : convert ? (
            <H args={{ name: 'undoConvertToMathbox' }} highlightType="none" />
          ) : (
            <H args={{ name: 'reset' }} highlightType="none" />
          )}
        </ExpressionRunnerButton>
      )}
      {showRunButton ? (
        <>
          {!isRunning &&
          canStepForward &&
          !skipToTheEnd &&
          !hideForwardButton ? (
            <ExpressionRunnerButton
              onClick={onNextClick}
              css={css`
                width: ${sideButtonsWidth}%;
              `}
            >
              <Emoji>➡️</Emoji>
            </ExpressionRunnerButton>
          ) : (
            <ButtonPlaceholder width={sideButtonsWidth} />
          )}
        </>
      ) : canStepForward ? (
        <ExpressionRunnerButton
          onClick={canStepForward ? onNextClick : noOp}
          disabled={!canStepForward}
          css={css`
            flex: 1;
          `}
        >
          {canStepForward ? (
            <H args={{ name: 'next' }} />
          ) : (
            <H args={{ name: 'done' }} />
          )}
        </ExpressionRunnerButton>
      ) : (
        <ButtonPlaceholder flex={1} />
      )}
    </div>
  )
}

export default ExpressionRunnerControls
