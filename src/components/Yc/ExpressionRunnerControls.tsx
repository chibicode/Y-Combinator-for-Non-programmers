/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import H from 'src/components/H'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'
import Emoji from 'src/components/Emoji'
import { useState } from 'react'

const Button = (props: JSX.IntrinsicElements['button']) => (
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
  skipToTheEnd: boolean
  onNextClick: () => void
  onPreviousClick: () => void
  onAutoClick: () => void
  onResetClick: () => void
  onSkipToTheEndClick: () => void
  onPauseClick: () => void
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

const sideButtonsWidth = 24
const centerButtonWidth = 48

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
  isDone
}: ExpressionRunnerControlsProps) => {
  const [playClicked, setPlayClicked] = useState(false)
  const onAutoClickWrapper = () => {
    setPlayClicked(true)
    onAutoClick()
  }
  const onResetClickWrapper = () => {
    setPlayClicked(false)
    onResetClick()
  }
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
          {!isPlaying && canStepBackward ? (
            <Button
              onClick={onPreviousClick}
              css={css`
                width: ${sideButtonsWidth}%;
              `}
            >
              <Emoji>⬅</Emoji>
            </Button>
          ) : (
            <ButtonPlaceholder width={sideButtonsWidth} />
          )}
        </>
      ) : canStepBackward ? (
        <Button
          onClick={onPreviousClick}
          css={css`
            flex: 1;
          `}
        >
          <H args={{ name: 'previous' }} />
        </Button>
      ) : (
        <ButtonPlaceholder flex={1} />
      )}
      {showPlayButton && (
        <Button
          onClick={
            canStepForward
              ? skipToTheEnd
                ? onSkipToTheEndClick
                : isPlaying
                ? onPauseClick
                : onAutoClickWrapper
              : onResetClickWrapper
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
              <H args={{ name: 'play' }} highlightType="none" />
            ) : (
              <H args={{ name: 'fastForward' }} highlightType="none" />
            )
          ) : (
            <H args={{ name: 'reset' }} highlightType="none" />
          )}
        </Button>
      )}
      {showPlayButton ? (
        <>
          {!isPlaying && canStepForward && playClicked ? (
            <Button
              onClick={onNextClick}
              css={css`
                width: ${sideButtonsWidth}%;
              `}
            >
              <Emoji>➡️</Emoji>
            </Button>
          ) : (
            <ButtonPlaceholder width={sideButtonsWidth} />
          )}
        </>
      ) : canStepForward || isDone ? (
        <Button
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
        </Button>
      ) : (
        <ButtonPlaceholder flex={1} />
      )}
    </div>
  )
}

export default ExpressionRunnerControls
