/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import React from 'react'
import locale from 'src/lib/locale'
import { colors, fontSizes, lineHeights, radii, spaces } from 'src/lib/theme'

interface NextLessonButtonProps {
  href: string
  primaryText: React.ReactNode
  secondaryText?: React.ReactNode
  tertiaryText?: React.ReactNode
}

const NextLessonButton = ({
  primaryText,
  secondaryText,
  tertiaryText,
  href
}: NextLessonButtonProps) => (
  <div
    css={css`
      text-align: center;
      margin: ${spaces(2)} 0 ${spaces(2)};
    `}
  >
    <Link href={href} passHref>
      <a
        css={css`
          display: inline-block;
          padding: ${locale === 'jp' ? spaces(0.25) : spaces(0.5)}
            ${spaces(1.5)} ${locale === 'jp' ? spaces(0.5) : spaces(0.75)};
          border-radius: ${radii(0.5)};
          border: 2px solid ${colors('pink600')};
          background: ${colors('pink400')};
          color: #fff;
          text-decoration: none;
          line-height: ${lineHeights(1.3)};
          -webkit-user-select: none;

          &:focus {
            box-shadow: inset 0 0 0 1px ${colors('pink600')};
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
        <span
          css={css`
            font-size: ${fontSizes(1.25)};
            font-weight: bold;
            display: block;
          `}
        >
          {primaryText}
        </span>
        {secondaryText && (
          <span
            css={css`
              font-size: ${fontSizes(0.85)};
              display: block;
            `}
          >
            {secondaryText}
          </span>
        )}
      </a>
    </Link>
    {tertiaryText && (
      <div
        css={css`
          font-size: ${fontSizes(0.85)};
          margin-top: ${spaces(0.75)};
          color: ${colors('grey600')};
        `}
      >
        {tertiaryText}
      </div>
    )}
  </div>
)

export default NextLessonButton
