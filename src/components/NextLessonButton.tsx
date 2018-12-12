import { css } from 'emotion'
import Link from 'next/link'
import React from 'react'
import locale from 'src/lib/locale'
import { colors, fontSizes, lineHeights, radii, spaces } from 'src/lib/theme'

interface NextLessonButtonProps {
  Component: React.ComponentType<{ className?: string }> | string
  href: string
  primaryText: React.ReactNode
  secondaryText?: React.ReactNode
  tertiaryText?: React.ReactNode
}

const NextLessonButton: React.FunctionComponent<NextLessonButtonProps> & {
  defaultProps: Partial<NextLessonButtonProps>
} = ({ primaryText, secondaryText, tertiaryText, href, Component }) => (
  <Component
    className={css`
      text-align: center;
      margin: ${spaces(3)} 0;
    `}
  >
    <Link href={href}>
      <a
        className={css`
          display: inline-block;
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
        <span
          className={css`
            font-size: ${fontSizes(1.25)};
            font-weight: bold;
            display: block;
          `}
        >
          {primaryText}
        </span>
        {secondaryText && (
          <span
            className={css`
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
        className={css`
          font-size: ${fontSizes(0.85)};
          margin-top: ${spaces(0.75)};
          color: ${colors('grey500')};
        `}
      >
        {tertiaryText}
      </div>
    )}
  </Component>
)

NextLessonButton.defaultProps = {
  Component: 'div'
}

export default NextLessonButton
