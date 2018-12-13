/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import h from 'src/lib/h'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

const Button: React.FunctionComponent<JSX.IntrinsicElements['button']> = ({
  // Remove ref b/c it's HOC
  ref,
  ...props
}) => (
  <ButtonWithTouchActiveStates
    {...props}
    activeBackgroundColor={colors('indigo100')}
    css={css`
      border-radius: ${radii(0.25)};
      border: 2px solid ${colors('indigo300')};
      background: #fff;
      color: ${colors('indigo500')};
      font-size: ${fontSizes(0.85)};
      padding: ${spaces(0.5)} 0;
      &:enabled {
        cursor: pointer;
      }

      &:disabled,
      &:active:disabled {
        color: ${colors('indigo300')};
        background: ${colors('indigo50')};
      }

      @media (hover: hover) {
        &:hover:enabled {
          background: ${colors('indigo50')};
        }
        &:focus {
          box-shadow: inset 0 0 0 1px ${colors('indigo300')};
          outline: none;
        }
      }
      &:active:enabled {
        background: ${colors('indigo100')};
      }
    `}
  />
)

interface ExpressionRunnerControlsProps {
  canStepForward: boolean
  canStepBackward: boolean
  isDone: boolean
  isPlaying: boolean
  showPlayButton: boolean
  hideForwardAndBackButtons: boolean
  onNextClick: () => void
  onPreviousClick: () => void
  onAutoClick: () => void
  onPauseClick: () => void
  onResetClick: () => void
}

const noOp = () => {
  return
}

const ExpressionRunnerControls: React.FunctionComponent<
  ExpressionRunnerControlsProps
> = ({
  canStepForward,
  canStepBackward,
  onNextClick,
  onPreviousClick,
  showPlayButton,
  isPlaying,
  onAutoClick,
  onPauseClick,
  onResetClick,
  hideForwardAndBackButtons,
  isDone
}) => (
  <div
    css={css`
      display: flex;
      margin: ${spaces(0.75)} -2px 0 -2px;
    `}
  >
    {!hideForwardAndBackButtons && !isPlaying && canStepBackward ? (
      <Button
        onClick={onPreviousClick}
        css={css`
          flex: 1;
          margin-right: ${spaces(0.25)};
        `}
      >
        {h('ycPrevious')}
      </Button>
    ) : (
      <div
        css={css`
          flex: 1;
          margin-right: ${spaces(0.25)};
          /* Same border as the button */
          border: 2px solid transparent;
        `}
      />
    )}
    {showPlayButton &&
      (canStepForward || isDone ? (
        <Button
          onClick={
            canStepForward
              ? isPlaying
                ? onPauseClick
                : onAutoClick
              : onResetClick
          }
          css={[
            css`
              flex: 1;
              margin-left: ${spaces(0.25)};
              margin-right: ${spaces(0.25)};
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
          {canStepForward
            ? isPlaying
              ? h('ycPause')
              : h('ycPlay')
            : h('ycReset')}
        </Button>
      ) : (
        <div
          css={css`
            flex: 1;
            margin-left: ${spaces(0.25)};
            /* Same border as the button */
            border: 2px solid transparent;
          `}
        />
      ))}
    {!hideForwardAndBackButtons && !isPlaying && (canStepForward || isDone) ? (
      <Button
        onClick={canStepForward ? onNextClick : noOp}
        disabled={!canStepForward}
        css={css`
          flex: 1;
          margin-left: ${spaces(0.25)};
        `}
      >
        {canStepForward ? h('ycNext') : h('ycDone')}
      </Button>
    ) : (
      <div
        css={css`
          flex: 1;
          margin-left: ${spaces(0.25)};
          /* Same border as the button */
          border: 2px solid transparent;
        `}
      />
    )}
  </div>
)

export default ExpressionRunnerControls
