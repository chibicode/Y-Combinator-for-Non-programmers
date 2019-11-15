/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import React from 'react'
import Emoji from 'src/components/Emoji'
import {
  colors,
  fontSizes,
  ns,
  spaces,
  fitWithinMobileWidth
} from 'src/lib/theme'

interface EmojiSeparatorProps {
  emojis: string[]
  nodes?: React.ReactNode[]
  size: 'xs' | 'sm' | 'md' | 'lg' | 'mdsm'
  alignCenter: boolean
  Component: React.ComponentType | string
  cssOverrides?: SerializedStyles
  description?: React.ReactNode
  noBottomMargin: boolean
  noTopMargin: boolean
  topDescription?: React.ReactNode
}

const fontSize = (size: EmojiSeparatorProps['size']) =>
  ({
    xs: [fontSizes(1.2), fontSizes(1.4)],
    sm: [fontSizes(1.4), fontSizes(1.6)],
    mdsm: [fontSizes(1.6), fontSizes(2)],
    md: [fontSizes(2), fontSizes(2.5)],
    lg: [fontSizes(3), fontSizes(4)]
  }[size])

const margins = (size: EmojiSeparatorProps['size']) =>
  ({
    xs: [spaces(1.75), spaces(2)],
    sm: [spaces(1.75), spaces(2)],
    mdsm: [spaces(1.5), spaces(1.75)],
    md: [spaces(1.25), spaces(1.5)],
    lg: [spaces(0.75), spaces(1)]
  }[size])

const SideSpace = ({ children }: { children: React.ReactNode }) => (
  <span
    css={css`
      margin-left: 0.1em;
      margin-right: 0.1em;
    `}
  >
    {children}
  </span>
)

const EmojiSeparator = ({
  emojis,
  nodes,
  size,
  Component,
  alignCenter,
  cssOverrides,
  description,
  topDescription,
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
      {topDescription && (
        <div
          css={[
            css`
              font-size: ${fontSizes(0.85)};
              color: ${colors('grey700')};
              padding-top: ${spaces(0.5)};
              max-width: ${fitWithinMobileWidth};
              margin: 0 auto;
            `
          ]}
        >
          {topDescription}
        </div>
      )}
      <span
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {nodes
          ? nodes.map((node, index) => (
              <SideSpace key={`node-${index}`}>
                <span
                  css={css`
                    font-size: ${1 / 1.2}em;
                  `}
                >
                  {node}
                </span>
              </SideSpace>
            ))
          : emojis.map((emoji, index) => (
              <SideSpace key={`${emoji}${index}`}>
                <Emoji size="sm">{emoji}</Emoji>
              </SideSpace>
            ))}
      </span>
      {description && (
        <div
          css={[
            css`
              font-size: ${fontSizes(0.85)};
              color: ${colors('grey700')};
              padding-bottom: ${spaces(0.5)};
              max-width: ${fitWithinMobileWidth};
              margin: 0 auto;
            `
          ]}
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
  noBottomMargin: false,
  noTopMargin: false
}

export default EmojiSeparator
