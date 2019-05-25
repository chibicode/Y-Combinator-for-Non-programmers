/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import React, { Fragment } from 'react'
import Emoji from 'src/components/Emoji'
import { colors, fontSizes, ns, spaces, maxWidths } from 'src/lib/theme'
import { VariableNames } from 'src/types/VariableNames'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'

interface EmojiSeparatorProps {
  emojis: string[]
  letters?: VariableNames[]
  nodes?: React.ReactNode[]
  size: 'sm' | 'md' | 'lg'
  alignCenter: boolean
  Component: React.ComponentType | string
  cssOverrides?: SerializedStyles
  description?: React.ReactNode
}

const fontSize = (size: EmojiSeparatorProps['size']) =>
  ({
    sm: [fontSizes(1.4), fontSizes(1.6)],
    md: [fontSizes(2), fontSizes(2.5)],
    lg: [fontSizes(3), fontSizes(4)]
  }[size])

const margins = (size: EmojiSeparatorProps['size']) =>
  ({
    sm: [spaces(1.5), spaces(1.75)],
    md: [spaces(1), spaces(1.25)],
    lg: [spaces(0.5), spaces(0.75)]
  }[size])

const EmojiSeparator = ({
  letters,
  emojis,
  nodes,
  size,
  Component,
  alignCenter,
  cssOverrides,
  description
}: EmojiSeparatorProps) => (
  <Component
    css={[
      css`
        text-align: ${alignCenter ? 'center' : 'left'};
        margin: ${margins(size)[0]} 0 ${margins(size)[1]};
        font-size: ${fontSize(size)[0]};
        ${ns} {
          font-size: ${fontSize(size)[1]};
        }
      `,
      cssOverrides
    ]}
  >
    <>
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
      {description && (
        <div
          css={css`
            font-size: ${fontSizes(0.85)};
            color: ${colors('grey600')};
            padding-bottom: ${spaces(0.5)};
            max-width: ${maxWidths('xxs')};
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
  emojis: []
}

export default EmojiSeparator
