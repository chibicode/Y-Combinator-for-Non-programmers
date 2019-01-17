/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import CardContext from 'src/components/CardContext'
import { CardContextProps } from 'src/components/CardContext'
import locale from 'src/lib/locale'
import { colors, fontSizes, ns, radii, spaces } from 'src/lib/theme'

export interface CardProps {
  children: React.ReactNode
  color: 'white' | 'orange' | 'yellow' | 'indigo' | 'teal'
  slideNumber?: number
  slideCount?: number
}

export interface CardState {
  overrideColor?: CardProps['color']
}

const backgroundColor = (color: CardProps['color']) =>
  ({
    teal: colors('teal50'),
    white: colors('white'),
    orange: colors('deepOrange50'),
    yellow: colors('yellow50'),
    indigo: colors('indigo50')
  }[color])

const slideLabelBgColor = (color: CardProps['color']) =>
  ({
    teal: colors('teal700'),
    white: colors('indigo500'),
    orange: colors('deepOrange900'),
    yellow: colors('yellow50'),
    indigo: colors('indigo500')
  }[color])

const emBackgroundColor = (color: CardProps['color']) =>
  ({
    teal: colors('white'),
    white: colors('yellow100'),
    orange: colors('white'),
    yellow: colors('yellow200'),
    indigo: colors('white')
  }[color])

export default class Card extends React.Component<CardProps, CardState> {
  public static defaultProps = {
    color: 'white'
  }

  public state: CardState = {}

  public render() {
    const { children, color, slideNumber, slideCount } = this.props
    const finalColor = this.state.overrideColor || color
    return (
      <>
        <CardContext.Provider
          value={{
            emBackgroundColor: emBackgroundColor(finalColor),
            updateColor: this.updateColor
          }}
        >
          <div
            css={css`
              padding-top: ${spaces(1)};
              padding-left: ${spaces(1)};
              padding-right: ${spaces(1)};
              padding-bottom: ${spaces(0.5)};

              ${ns} {
                padding-top: ${spaces(2)};
                padding-left: ${spaces(2)};
                padding-right: ${spaces(2)};
                padding-bottom: ${spaces(1.5)};
              }
              position: relative;
              background: ${backgroundColor(finalColor)};
              border-radius: ${radii(0.5)};
              margin-bottom: ${slideNumber === undefined ? spaces(1.5) : 0};
            `}
          >
            {slideNumber && slideCount && (
              <div
                css={css`
                  position: absolute;
                  bottom: -0.5rem;
                  right: 1rem;
                  font-size: ${fontSizes(0.75)};
                  line-height: 1;
                  color: ${colors('white')};
                  background: ${slideLabelBgColor(finalColor)};
                  padding: ${spaces(0.25)} ${spaces(0.5)};
                  border-radius: 9999px;
                `}
              >
                <>
                  {slideNumber === 1 && (
                    <>{locale === 'jp' ? 'スライド' : 'Slide'} </>
                  )}
                  <span
                    css={css`
                      font-weight: bold;
                    `}
                  >
                    {slideNumber}
                  </span>{' '}
                  <span
                    css={css`
                      color: ${colors('white66')};
                    `}
                  >
                    / {slideCount}
                  </span>
                </>
              </div>
            )}
            {children}
          </div>
        </CardContext.Provider>
        {slideNumber !== slideCount && (
          <div
            css={css`
              width: 1.25rem;
              height: 2rem;
              margin: 0 auto;
              background: ${colors('indigo200')};
            `}
          />
        )}
      </>
    )
  }

  private updateColor: CardContextProps['updateColor'] = overrideColor => {
    this.setState({ overrideColor })
  }
}
