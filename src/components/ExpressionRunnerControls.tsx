/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import H from 'src/components/H'
import { colors, spaces } from 'src/lib/theme'
import Emoji from 'src/components/Emoji'
import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'
import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'

interface ExpressionRunnerControlsProps {
  canStepForward: boolean
  canStepBackward: boolean
  isPlaying: boolean
  showPlayButton: boolean
  skipToTheEnd: boolean
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
  showPlayButton,
  isPlaying,
  onAutoClick,
  onResetClick,
  onPauseClick,
  onSkipToTheEndClick,
  skipToTheEnd,
  convert
}: ExpressionRunnerControlsProps) => {
  const centerButtonWidth = convert ? 60 : 44
  const sideButtonsWidth = (100 - centerButtonWidth) / 2 - 2
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin: ${spaces(1)} -2px 0 -2px;
      `}
    >
      {showPlayButton ? (
        <>
          {!isPlaying && canStepBackward && !skipToTheEnd ? (
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
      {showPlayButton && (
        <ExpressionRunnerButton
          onClick={
            canStepForward
              ? skipToTheEnd
                ? onSkipToTheEndClick
                : isPlaying
                ? onPauseClick
                : onAutoClick
              : onResetClick
          }
          css={[
            css`
              width: ${centerButtonWidth}%;
            `,
            canStepForward &&
              !isPlaying &&
              css`
                background: ${colors('yellow100')};
              `,
            !canStepForward &&
              css`
                background: ${colors('pink50')};
              `
          ]}
        >
          {canStepForward ? (
            isPlaying ? (
              <H args={{ name: 'pause' }} highlightType="none" />
            ) : skipToTheEnd ? (
              convert ? (
                convert === 'toMathBoxPlay' ? (
                  <H
                    args={{ name: 'runAndConertToMathbox', addNewline: true }}
                    highlightType="none"
                  />
                ) : (
                  <H
                    args={{ name: 'convert', type: convert }}
                    highlightType="none"
                  />
                )
              ) : (
                <H args={{ name: 'play' }} highlightType="none" />
              )
            ) : (
              <H args={{ name: 'fastForward' }} highlightType="none" />
            )
          ) : convert && convert !== 'toMathBoxPlay' ? (
            <H
              args={{ name: 'undoConvert', type: convert }}
              highlightType="none"
            />
          ) : (
            <H args={{ name: 'reset' }} highlightType="none" />
          )}
        </ExpressionRunnerButton>
      )}
      {showPlayButton ? (
        <>
          {!isPlaying && canStepForward && !skipToTheEnd ? (
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
