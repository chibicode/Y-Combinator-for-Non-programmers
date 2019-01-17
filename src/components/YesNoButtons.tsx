/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
// import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import { colors, lineHeights, radii, spaces } from 'src/lib/theme'

interface YesNoButtonsState {
  selection: 'default' | 'yes' | 'no'
}

interface YesNoButtonsProps {
  answer: 'yes' | 'no'
}

export default class YesNoButtons extends React.Component<
  YesNoButtonsProps,
  YesNoButtonsState
> {
  public state: YesNoButtonsState = {
    selection: 'default'
  }

  public render() {
    return (
      <div
        css={css`
          text-align: center;
          margin: ${spaces(3)} 0 ${spaces(1.5)};
        `}
      >
        <button
          css={css`
            padding: ${locale === 'jp' ? spaces(0.25) : spaces(0.5)}
              ${spaces(1.5)} ${locale === 'jp' ? spaces(0.5) : spaces(0.75)};
            border-radius: ${radii(0.5)};
            border: 2px solid ${colors('pink700')};
            background: ${colors('pink400')};
            color: #fff;
            text-decoration: none;
            line-height: ${lineHeights(1.3)};
            -webkit-user-select: none;

            &:focus {
              box-shadow: inset 0 0 0 1px ${colors('pink700')};
              outline: none;
            }

            &:hover {
              background: ${colors('pink500')};
            }

            &:active {
              background: ${colors('pink500')};
            }
          `}
        >
          x
        </button>
        <button
          css={css`
            padding: ${locale === 'jp' ? spaces(0.25) : spaces(0.5)}
              ${spaces(1.5)} ${locale === 'jp' ? spaces(0.5) : spaces(0.75)};
            border-radius: ${radii(0.5)};
            border: 2px solid ${colors('pink700')};
            background: ${colors('pink400')};
            color: #fff;
            text-decoration: none;
            line-height: ${lineHeights(1.3)};
            -webkit-user-select: none;

            &:focus {
              box-shadow: inset 0 0 0 1px ${colors('pink700')};
              outline: none;
            }

            &:hover {
              background: ${colors('pink500')};
            }

            &:active {
              background: ${colors('pink500')};
            }
          `}
        >
          x
        </button>
      </div>
    )
  }
}
