/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import React, { Fragment } from 'react'
import Emoji from 'src/components/Emoji'
import { radii, colors, fontSizes, ns, spaces, maxWidths } from 'src/lib/theme'
import { VariableNames } from 'src/types/VariableNames'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'

interface EmojiSeparatorProps {
  emojis: string[]
  letters?: VariableNames[]
  nodes?: React.ReactNode[]
  size: 'sm' | 'md' | 'lg' | 'mdsm'
  alignCenter: boolean
  Component: React.ComponentType | string
  cssOverrides?: SerializedStyles
  description?: React.ReactNode
  addDotDotDotFront: boolean
  addDotDotDotEnd: boolean
  noBottomMargin: boolean
  noTopMargin: boolean
}

const fontSize = (size: EmojiSeparatorProps['size']) =>
  ({
    sm: [fontSizes(1.4), fontSizes(1.6)],
    mdsm: [fontSizes(1.6), fontSizes(2)],
    md: [fontSizes(2), fontSizes(2.5)],
    lg: [fontSizes(3), fontSizes(4)]
  }[size])

const margins = (size: EmojiSeparatorProps['size']) =>
  ({
    sm: [spaces(1.5), spaces(1.75)],
    mdsm: [spaces(1.25), spaces(1.5)],
    md: [spaces(1), spaces(1.25)],
    lg: [spaces(0.5), spaces(0.75)]
  }[size])

const DotDotDot = () => (
  <span
    css={css`
      background: ${colors('secretCode')};
      color: #fff;
      padding: 0em 0.1em;
      line-height: 1;
      border-radius: ${radii(0.25)};
      font-weight: bold;
      display: inline-block;
    `}
  >
    &middot;&middot;&middot;
  </span>
)

const EmojiSeparator = ({
  letters,
  emojis,
  nodes,
  size,
  Component,
  alignCenter,
  cssOverrides,
  description,
  addDotDotDotFront,
  addDotDotDotEnd,
  noBottomMargin,
  noTopMargin
}: EmojiSeparatorProps) => (
  <Component
    css={[
      css`
        text-align: ${alignCenter ? 'center' : 'left'};
        margin: ${noTopMargin ? 0 : margins(size)[0]} 0
          ${noBottomMargin ? 0 : margins(size)[1]};
        font-size: ${fontSize(size)[0]};
        ${ns} {
          font-size: ${fontSize(size)[1]};
        }
      `,
      cssOverrides
    ]}
  >
    <>
      {addDotDotDotFront && (
        <>
          <DotDotDot />{' '}
        </>
      )}
      {letters
        ? letters.map((letter, index) => (
            <Fragment key={`${letter}${index}`}>
              <Emoji size="sm">{letterEmojiMapping[letter]}</Emoji>{' '}
            </Fragment>
          ))
        : nodes
        ? nodes.map((node, index) => (
            <Fragment key={`node-${index}`}>
              <span
                css={css`
                  font-size: ${1 / 1.2}em;
                `}
              >
                {node}
              </span>{' '}
            </Fragment>
          ))
        : emojis.map((emoji, index) => (
            <Fragment key={`${emoji}${index}`}>
              <Emoji size="sm">{emoji}</Emoji>{' '}
            </Fragment>
          ))}
      {addDotDotDotEnd && <DotDotDot />}
      {description && (
        <div
          css={css`
            font-size: ${fontSizes(0.85)};
            color: ${colors('grey600')};
            padding-bottom: ${spaces(0.5)};
            max-width: ${maxWidths('xs')};
            margin: 0 auto;
          `}
        >
          {description}
        </div>
      )}
    </>
  </Component>
)

EmojiSeparator.defaultProps = {
  size: 'md',
  spacing: 'md',
  Component: 'div',
  alignCenter: true,
  emojis: [],
  addDotDotDotFront: false,
  addDotDotDotEnd: false,
  noBottomMargin: false,
  noTopMargin: false
}

export default EmojiSeparator
