/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ButtonWithTouchActiveStates from 'src/components/ButtonWithTouchActiveStates'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

const ExpressionRunnerButton = (props: JSX.IntrinsicElements['button']) => (
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

export default ExpressionRunnerButton
