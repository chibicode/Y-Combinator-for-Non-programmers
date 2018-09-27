import { css } from 'emotion'
import Link from 'next/link'
import React from 'react'
import { colors, fontSizes, radii, spaces } from 'src/lib/theme'

interface NextLessonButtonProps {
  Component?: React.ComponentType | string
  href: string
  primaryText: React.ReactNode
  secondaryText?: React.ReactNode
}

const NextLessonButton: React.SFC<NextLessonButtonProps> = ({
  primaryText,
  secondaryText,
  href,
  Component = 'div'
}) => (
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
          padding: ${spaces(0.5)} ${spaces(1.5)} ${spaces(0.75)};
          border-radius: ${radii(0.5)};
          border: 2px solid ${colors('pink700')};
          background: ${colors('pink400')};
          color: #fff;
          text-decoration: none;
          &:focus {
            box-shadow: 0 0 0 1pt ${colors('pink700')};
            outline: none;
          }
          &:hover,
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
  </Component>
)

export default NextLessonButton
